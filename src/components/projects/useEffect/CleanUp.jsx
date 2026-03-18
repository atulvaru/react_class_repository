import "./CleanUp.css";
import { useState, useEffect } from "react";
export const CleanUp = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Clean up function to clear the interval
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="cleanup-page">
      <div className="cleanup-card">
        <div className="cleanup-top">
          <span className="cleanup-chip">Cleanup Hook</span>
          <p className="cleanup-sub">Auto stops on unmount</p>
        </div>
        <h1 className="cleanup-title">useEffect Cleanup Demo</h1>
        <p className="cleanup-desc">This interval increments count every second and cleans up safely.</p>

        <div className="cleanup-value">
          <div>
            <p className="label">Subscribes</p>
            <p className="count">{count}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
