import { useContext } from "react";
import { BioContext } from ".";

export const Home = () => {
  const { myName, myAge } = useContext(BioContext);
  return (
    <div>
      <h1>🏠 Home Page</h1>
      <p>Welcome, {myName}!</p>
      <p>Your current age is {myAge}.</p>

      <p>
        This data is coming from <strong>Context API</strong> (global state).
      </p>
    </div>
  );
};
