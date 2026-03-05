export const ServiceCard = (props)=>{
    const { name,img,rating,summary,genre,imdb} = props.data;
     return (
          <div  className="movie-card">
            {/* 🖼 Movie Poster */}
            <img src={img} alt="movie-poster" />

            <div>
              {/* 📌 Dynamic Values in JSX */}
              <h1>🎥 Movie Name: {name}</h1>
              <h3>⭐ Rating: {rating}</h3>
              <p>📝 Summary: {summary}</p>
              <p>🎭 Genre: {genre}</p>

              {/* 🔐 Conditional Rendering */}
              <a href={imdb} target="_blank">
                <button>{"Watch Now"}</button>
              </a>
            </div>
          </div>
        );
}