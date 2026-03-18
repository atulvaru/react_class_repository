import { useEffect, useState } from "react";
import "./HowFetchApi.css";

export const NotUseFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  //    Search barFilter posts by title in real time
  //    📊 Stats barShows total posts, filtered count, load status
  //    ⏳ Loading spinnerSpinning animation while fetching
  //    ❌ Error stateShows message if fetch fails
  //    🃏 Post cardsEach post shows #id, userId, title & body
  //    🎨 FontsSyne display + DM Mono for code/body text
  //    🌊 AnimationsfadeUp on load, hover lift on cards

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, []);

  const filtered = data.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="api-page">
      <div className="api-wrapper">
        {/* Header */}
        <div className="api-header">
          <span className="api-chip">📡 Live API</span>
          <h1 className="api-title">
            Post <span className="api-title-accent">Explorer</span>
          </h1>
          <p className="api-subtitle">
            Fetched from <code>jsonplaceholder.typicode.com/posts</code>
          </p>
        </div>

        {/* Stats Bar */}
        <div className="api-stats">
          <div className="stat-box">
            <span className="stat-num">{data.length}</span>
            <span className="stat-label">Total Posts</span>
          </div>
          <div className="stat-box">
            <span className="stat-num">{filtered.length}</span>
            <span className="stat-label">Showing</span>
          </div>
          <div className="stat-box">
            <span className="stat-num accent">{loading ? "⏳" : "✅"}</span>
            <span className="stat-label">Status</span>
          </div>
        </div>

        {/* Search */}
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            className="search-input"
            type="text"
            placeholder="Search posts by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* States */}
        {loading && (
          <div className="state-box">
            <div className="loader"></div>
            <p>Fetching posts...</p>
          </div>
        )}

        {error && (
          <div className="state-box error">
            <span>❌</span>
            <p>{error}</p>
          </div>
        )}

        {/* Posts List */}
        {!loading && !error && (
          <ul className="post-list">
            {filtered.length === 0 ? (
              <div className="state-box">
                <span>🔎</span>
                <p>No posts match your search.</p>
              </div>
            ) : (
              filtered.map((post) => (
                <li key={post.id} className="post-card">
                  <div className="post-meta">
                    <span className="post-id">#{post.id}</span>
                    <span className="post-user">👤 User {post.userId}</span>
                  </div>
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-body">{post.body}</p>
                </li>
              ))
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NotUseFetch;
