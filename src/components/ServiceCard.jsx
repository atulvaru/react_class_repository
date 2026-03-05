import "./ServiceCard.css";
export const ServiceCard = (props) => {
  const { name, img, rating, summary, genre, imdb } = props.data;
  return (
    <div className="movie-card">
      {/* 🖼 Movie Poster */}
      <img src={img} alt="movie-poster" />

      <div className="movie-content">
        {/* 📌 Dynamic Values in JSX */}
        <h2 className="movie-title">{name}</h2>
        <p className="movie-rating">⭐ {rating}</p>
        <p className="movie-genre">{genre}</p>
        <p className="movie-summary">{summary}</p>

        {/* 🔐 Conditional Rendering */}
        <a href={imdb} target="_blank">
      <button className="movie-btn">Watch Now</button>
    </a>
      </div>
    </div>
  );
};
