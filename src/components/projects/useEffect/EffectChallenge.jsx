import "./EffectChallenge.css";
import { useState, useEffect } from "react";
export const Challenge = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  useEffect(() => {
    console.log(name);
  }, [name]);

  const handleOnClick = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="challenge-page">
      <div className="challenge-card">
        <div className="challenge-header">
          <span className="chip">React Challenge</span>
          <div className="title-right">Right count: {count}</div>
        </div>
        <h1>useEffect Counter</h1>

        <p className="challenge-text">
          Count the value and see the app react instantly.
        </p>
        <div className="count-row">
          <div className="count-value">{count}</div>
          <button className="count-btn" onClick={() => setCount(count + 1)}>
            Increase Count
          </button>
        </div>

        <div className="message-box">
          <p>
            Name : <span>{name}</span>
          </p>
          <input
            className="message-area"
            type="text"
            value={name}
            onChange={handleOnClick}
            placeholder="Type anything..."
          />
        </div>
      </div>
    </div>
  );
};
