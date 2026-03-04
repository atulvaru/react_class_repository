export const ServiceCard = (props)=>{
     return (
          <div  className="movie-card">
            {/* 🖼 Movie Poster */}
            <img src={props.movie.img} alt="movie-poster" />

            <div>
              {/* 📌 Dynamic Values in JSX */}
              <h1>🎥 Movie Name: {props.movie.name}</h1>
              <h3>⭐ Rating: {props.movie.rating}</h3>
              <p>📝 Summary: {props.movie.summary}</p>
              <p>🎭 Genre: {props.movie.genre}</p>

              {/* 🔐 Conditional Rendering */}
              <a href={props.movie.imdb} target="_blank">
                <button>{"Watch Now"}</button>
              </a>
            </div>
          </div>
        );
}