import "./ServiceCard.css";
export const ServiceCard = (props) => {
  const { name, img, rating, summary, genre, imdb } = props.data;

  const ratingClass = rating >= 8.5 ? "color_green" : "color_red";
 const btnClass = Number(rating) >= 8.5 ? "btn_green" : "btn_red";


  return (
    <div className="movie-card">
      {/* 🖼 Movie Poster */}
      <img src={img} alt="movie-poster" />

      <div className="movie-content">
        {/* 📌 Dynamic Values in JSX */}
        <h2 className="movie-title">{name}</h2>
        <p className="movie-rating">
          ⭐ Rating{" "}
          {<span className={`rating ${ratingClass}`}> {rating} </span>}
        </p>
        <p className="movie-genre">{genre}</p>
        <p className="movie-summary">{summary}</p>

        {/* 🔐 Conditional Rendering */}
        <a href={imdb} target="_blank">
          <button className={`movie-btn ${btnClass}`}>Watch Now</button>
        </a>
      </div>
    </div>
  );
};
