import { netflixData } from "../api/netflixData";
import { ServiceCard } from "./ServiceCard";
// import "./Netflix.css";
const Netflix = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-8 md:grid-cols-2 sm:grid-cols-1">
      {netflixData.map((movie) => {
        return <ServiceCard key={movie.id} data={movie} />;
      })}
    </div>
  );
};

export default Netflix;
