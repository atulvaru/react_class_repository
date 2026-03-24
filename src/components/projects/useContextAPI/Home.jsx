 
import { useBioCustomHook } from "./CustomHook";

export const Home = () => {
  const { myName, myAge } = useBioCustomHook();
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
