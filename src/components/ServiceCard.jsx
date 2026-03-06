// import "./ServiceCard.css";
// import styles from "./ServiceCard.module.css";
// import styled from "styled-components";
export const ServiceCard = (props) => {
  const { name, img, rating, summary, genre, imdb } = props.data;

  const ratingColor =
    rating >= 8.5 ? "bg-green-500" : "bg-red-500";

  const btnColor =
    rating >= 8.5
      ? "bg-green-500 hover:bg-green-600"
      : "bg-red-500 hover:bg-red-600";

  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden transition duration-300 flex flex-col hover:-translate-y-1 hover:shadow-2xl">

      {/* Poster */}
      <img
        src={img}
        alt="movie-poster"
        className="w-full h-[380px] object-cover"
      />

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">

        <h2 className="text-[20px] font-semibold mb-2">
          {name}
        </h2>

        <p className="text-yellow-400 mb-2">
          ⭐ Rating
          <span
            className={`ml-2 px-3 py-1 rounded-full text-black font-medium ${ratingColor}`}
          >
            {rating}
          </span>
        </p>

        <p className="text-sm text-slate-400 mb-2">
          {genre}
        </p>

        <p className="text-sm leading-6 text-slate-300">
          {summary}
        </p>

        <a href={imdb} target="_blank">
          <button
            className={`mt-4 px-4 py-2 rounded-md text-white font-medium transition ${btnColor} hover:scale-105`}
          >
            Watch Now
          </button>
        </a>
      </div>
    </div>
  );
};