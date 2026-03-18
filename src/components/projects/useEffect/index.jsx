import "./index.css";
import { useState, useEffect } from "react";
export const FirstUseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count has been updated:", count);
  }, [count]);

  return (
    <div className="use-effect-page">
      <div className="use-effect-card">
        <div className="use-effect-header">
          <p className="chip">useEffect</p>
          <h1>First useEffect Example</h1>
          <p className="subtext">
            The useEffect hook is a powerful tool in React for side effects,
            like data fetching and subscriptions. It replaces lifecycle methods
            in functional components.
          </p>
        </div>

        <div className="counter-block">
          <p className="label">Count the Number</p>
          <p className="count">{count}</p>
          <button onClick={() => setCount(count + 1)} className="action-btn">
            Increase Count
          </button>
        </div>
      </div>
    </div>
  );
};
