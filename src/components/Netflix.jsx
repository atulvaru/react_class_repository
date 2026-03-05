import { netflixData } from "../api/netflixData";
import { ServiceCard } from "./ServiceCard";
const Netflix = () => {
  return (
    <>
      {netflixData.map((movie) => {
        return <ServiceCard key={movie.id} data={movie} />;
      })}
    </>
  );
};

export default Netflix;
