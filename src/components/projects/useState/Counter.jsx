import { useState } from "react";
import "./Counter.css";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div className="counter-container">
      <div className="counter-card">
        <h1>Counter App</h1>
        <div className="counter-display">{count}</div>
        
        <div className="step-section">
          <label className="step-label">Step Value</label>
          <input
            className="step-input"
            type="number"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
        </div>

        <div className="button-group">
          <button 
            className="btn btn-increase"
            onClick={() => setCount(count + step)}
          >
            ➕ Increase
          </button>
          <button 
            className="btn btn-decrease" disabled={count <= 0}
            onClick={() => setCount(count - step)}
          >
            ➖ Decrease
          </button>
          <button 
            className="btn btn-reset"
            onClick={() => setCount(0)}
          >
            🔄 Reset
          </button>
        </div>
      </div>
    </div>
  );
};
