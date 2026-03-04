 const Netflix = () => {
  // 🎥 Movie Details
  const name = "Avengers: Endgame (2019)";
  const rating = 8.4;
  const summary =
    "A thrilling superhero movie filled with action and emotional moments.";

  // 🎭 Genre Function
  const getGenre = () => {
    return "Action / Adventure";
  };

  // 👤 User Age
  const age = 19;

  // 🎯 Best Practice: Pure Function with Parameter
  const getViewerStatus = (userAge) => {
    if (userAge >= 18) return "🎬 Watch Now";
    return "🚫 Not Available";
  };

  return (
    <div className="movie-card">
      {/* 🖼 Movie Poster */}
      <img src="average.avif" alt="movie-poster" />

      <div>
        {/* 📌 Dynamic Values in JSX */}
        <h1>🎥 Movie Name: {name}</h1>
        <h3>⭐ Rating: {rating}</h3>
        <p>📝 Summary: {summary}</p>
        <p>🎭 Genre: {getGenre()}</p>

        {/* 🔐 Conditional Rendering */}
        <button>{getViewerStatus(age)}</button>
      </div>
    </div>
  );
};


export default Netflix;