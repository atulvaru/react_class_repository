// import "./ServiceCard.css";
import styles from "./ServiceCard.module.css";
export const ServiceCard = (props) => {
  const { name, img, rating, summary, genre, imdb } = props.data;

  const ratingClass = rating >= 8.5 ? styles.color_green : styles.color_red;
  const btnClass = Number(rating) >= 8.5 ? styles.btn_green : styles.btn_red;

  return (
    <div className={styles["movie-card"]}>
      {/* 🖼 Movie Poster */}
      <img src={img} alt="movie-poster" />

      <div className={styles["movie-content"]}>
        {/* 📌 Dynamic Values in JSX */}
        <h2 className={styles["movie-title"]}>{name}</h2>
        <p className={styles["movie-rating"]}>
          ⭐ Rating{" "}
          {<span className={`${styles.rating} ${ratingClass}`}> {rating} </span>}
        </p>
        <p className={styles["movie-genre"]}>{genre}</p>
        <p className={styles["movie-summary"]}>{summary}</p>

        {/* 🔐 Conditional Rendering */}
        <a href={imdb} target="_blank">
          <button className={`${styles["movie-btn"]} ${btnClass}`}>Watch Now</button>
        </a>
      </div>
    </div>
  );
};
