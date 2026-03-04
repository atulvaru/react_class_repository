import { netflixData } from "../api/netflixData";
const Netflix = () => {
  return (
    <>
      {netflixData.map((movie) => {
        return (
          <div key={movie.id} className="movie-card">
            {/* 🖼 Movie Poster */}
            <img src={movie.img} alt="movie-poster" />

            <div>
              {/* 📌 Dynamic Values in JSX */}
              <h1>🎥 Movie Name: {movie.name}</h1>
              <h3>⭐ Rating: {movie.rating}</h3>
              <p>📝 Summary: {movie.summary}</p>
              <p>🎭 Genre: {movie.genre}</p>

              {/* 🔐 Conditional Rendering */}
              <a href={movie.imdb} target="_blank">
                <button>{"Watch Now"}</button>
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Netflix;
