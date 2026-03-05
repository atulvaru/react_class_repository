import { netflixData } from "../api/netflixData";
import { ServiceCard } from "./ServiceCard";
const Netflix = () => {
  return (
    <div className="movie-grid">
      {netflixData.map((movie) => {
        return <ServiceCard key={movie.id} data={movie} />;
      })}
    </div>
  );
};

export default Netflix;
