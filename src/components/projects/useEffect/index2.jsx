import "./index.css";
import { useState, useEffect } from "react";
export const FirstUseEffect2 = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="use-effect-page">
      <div className="clock-card">
        <div className="clock-header">
          <span className="chip">Live Clock</span>
          <h2 className="clock-title">Current Date & Time</h2>
        </div>
        <div className="clock-time">{date.toLocaleString()}</div>
        <p className="clock-note">This updates automatically every second using useEffect.</p>
      </div>
    </div>
  );
};
