// import "./ServiceCard.css";
import styles from "./ServiceCard.module.css";
import styled from "styled-components";
export const ServiceCard = (props) => {
  const { name, img, rating, summary, genre, imdb } = props.data;

  const ratingClass = rating >= 8.5 ? styles.color_green : styles.color_red;
  // const btnClass = Number(rating) >= 8.5 ? styles.btn_green : styles.btn_red;

//   // using styled object
// const ButtonMy = styled.button({
//     marginTop: "15px",
//     padding: "10px 14px",
//     border: "none",
//     backgroundColor: rating >= 8.5 ? "green" : "red",
//     borderRadius: "6px",
//     color: "white",
//     fontWeight: "500",
//     cursor: "pointer",
//     transition: "0.2s",
//   });

// Using Template Literals (Most Common)
const ButtonMy = styled.button`
    margin-top: 15px;
    padding: 10px 14px;
    border: none;
    background-color: ${(props) => (props.rating >= 8.5 ? "green" : "red")};
    border-radius: 6px;
    color: white;
    font-weight: 500;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
        transform: scale(1.05);
    }
`;

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
          {/* <button className={`${styles["movie-btn"]} ${btnClass}`}>Watch Now</button> */}
          <ButtonMy rating={rating}>Watch Now</ButtonMy>
        </a>
      </div>
    </div>
  );
};
