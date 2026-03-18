import { useEffect, useState } from "react";
import "./Pokiemon.css";

const TYPE_COLORS = {
  fire: "#ff6b35",
  water: "#4fc3f7",
  grass: "#66bb6a",
  electric: "#ffd54f",
  psychic: "#f48fb1",
  ice: "#80deea",
  dragon: "#7e57c2",
  dark: "#4a4a6a",
  fairy: "#f8bbd0",
  normal: "#a5a5a5",
  fighting: "#ef5350",
  flying: "#90caf9",
  poison: "#ab47bc",
  ground: "#d4a96a",
  rock: "#bdbdbd",
  bug: "#aed581",
  ghost: "#7c83bc",
  steel: "#78909c",
};

const STAT_LABELS = {
  hp: "HP",
  attack: "ATK",
  defense: "DEF",
  "special-attack": "SpATK",
  "special-defense": "SpDEF",
  speed: "SPD",
};

export const Pokiemon = () => {
  const [allPokemon, setAllPokemon] = useState([]); // list of all 150

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Step 1: fetch list of 150 pokemon
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((res) => res.json())
      .then((data) => {
        setAllPokemon(data.results);
        // Step 2: fetch full details for each pokemon
        const detailFetches = data.results.map((p) =>
          fetch(p.url).then((r) => r.json()),
        );
        return Promise.all(detailFetches);
      })
      .then((details) => {
        setAllPokemon(details);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filtered = allPokemon.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="poke-page">
      <div className="poke-blob blob1" />
      <div className="poke-blob blob2" />

      <div className="poke-wrapper">
        {/* Title */}
        <div className="poke-title-row">
          <span className="poke-ball-icon">⬤</span>
          <h1 className="poke-title">Pokédex</h1>
        </div>

        {/* Search */}
        <div className="search-box">
          <span>🔍</span>
          <input
            className="poke-input"
            type="text"
            placeholder="Search Pokémon..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button className="clear-btn" onClick={() => setSearch("")}>
              ✕
            </button>
          )}
        </div>

        {/* Count */}
        {!loading && (
          <p className="poke-count">
            Showing <strong>{filtered.length}</strong> of{" "}
            <strong>{allPokemon.length}</strong> Pokémon
          </p>
        )}

        {/* Loading */}
        {loading && (
          <div className="poke-state">
            <div className="poke-loader" />
            <p>Loading Pokédex...</p>
          </div>
        )}

        {/* Error */}
        {error && !loading && (
          <div className="poke-state poke-error">
            <p>❌ {error}</p>
          </div>
        )}

        {/* No results */}
        {!loading && filtered.length === 0 && (
          <div className="poke-state">
            <p>
              😕 No Pokémon found for "<strong>{search}</strong>"
            </p>
          </div>
        )}

        {/* Grid of detailed cards */}
        {!loading && !error && (
          <div className="poke-grid">
            {filtered.map((pokemon) => {
              const primaryType = pokemon.types?.[0]?.type?.name || "normal";
              const typeColor = TYPE_COLORS[primaryType] || "#a5a5a5";

              return (
                <div
                  key={pokemon.name}
                  className="poke-card"
                  style={{ "--type-color": typeColor }}
                >
                  {/* Card glow */}
                  <div className="poke-card-glow" />

                  {/* Top */}
                  <div className="poke-card-top">
                    <div className="poke-id">
                      #{String(pokemon.id).padStart(3, "0")}
                    </div>

                    {/* Sprite */}
                    <div className="poke-sprite-wrap">
                      <div className="poke-sprite-ring" />
                      <img
                        className="poke-sprite"
                        src={
                          pokemon.sprites?.other?.["official-artwork"]
                            ?.front_default || pokemon.sprites?.front_default
                        }
                        alt={pokemon.name}
                      />
                    </div>

                    <h2 className="poke-name">{pokemon.name}</h2>

                    {/* Types */}
                    <div className="poke-types">
                      {pokemon.types.map((t) => (
                        <span
                          key={t.type.name}
                          className="poke-type-badge"
                          style={{
                            background: TYPE_COLORS[t.type.name] || "#888",
                          }}
                        >
                          {t.type.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Info Grid */}
                  <div className="poke-info-grid">
                    <div className="poke-info-box">
                      <span className="poke-info-label">Height</span>
                      <span className="poke-info-val">
                        {(pokemon.height / 10).toFixed(1)}m
                      </span>
                    </div>
                    <div className="poke-info-box">
                      <span className="poke-info-label">Weight</span>
                      <span className="poke-info-val">
                        {(pokemon.weight / 10).toFixed(1)}kg
                      </span>
                    </div>
                    <div className="poke-info-box">
                      <span className="poke-info-label">Base XP</span>
                      <span className="poke-info-val">
                        {pokemon.base_experience}
                      </span>
                    </div>
                    <div className="poke-info-box">
                      <span className="poke-info-label">Abilities</span>
                      <span className="poke-info-val poke-abilities">
                        {pokemon.abilities
                          .slice(0, 2)
                          .map((a) => a.ability.name)
                          .join(", ")}
                      </span>
                    </div>
                  </div>

                  <div className="poke-stats-section">
                    <h3 className="poke-section-title">Base Stats</h3>
                    <div className="poke-stats">
                      {pokemon.stats.map((s) => (
                        <div key={s.stat.name} className="poke-stat-row">
                          <span className="poke-stat-label">
                            {STAT_LABELS[s.stat.name] || s.stat.name}
                          </span>
                          <div className="poke-stat-bar-bg">
                            <div
                              className="poke-stat-bar-fill"
                              style={{
                                width: `${Math.min((s.base_stat / 255) * 100, 100)}%`,
                              }}
                            />
                          </div>
                          <span className="poke-stat-num">{s.base_stat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="poke-moves-section">
                    <h3 className="poke-section-title">Moves</h3>
                    <div className="poke-moves">
                      {pokemon.moves.slice(0, 8).map((m) => (
                        <span key={m.move.name} className="poke-move-tag">
                          {m.move.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Pokiemon;
