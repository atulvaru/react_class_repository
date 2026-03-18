import "./ShortCircuit.css";
import { useState } from "react";

export const ShortCircuit = () => {
  const [isLogginIn, setIsLogginIn] = useState(false);
  const [user, setUser] = useState("");
  return (
    <>
      <div className="sc-container">
        <div className="sc-wrapper">

          {/* Main Content Card */}
          <div className="sc-content">
            <h2 className="sc-content-title">📋 Quick Guide</h2>
            <div className="sc-content-bar"></div>
            <p className="sc-content-text">
              This component demonstrates the power of short circuit evaluation
              in React. Use the buttons below to toggle login status, manage
              user data, and clear everything with ease.
            </p>
            <div className="sc-code-block">
              {isLogginIn && (
                <p>Welcome to Short Circuit! You are logged in.</p>
              )}
              {user ? `user : ${user}` : "First Log In then you will set User. No user data available."}
            </div>
          </div>

          {/* Buttons Section */}
          <div className="sc-buttons">
            <button
              className="sc-button sc-button-login"
              onClick={() => setIsLogginIn(!isLogginIn)}
            >
              <span className="sc-button-icon">🔐</span>
              <span>Toggle Login</span>
            </button>

            <button className="sc-button sc-button-user" onClick ={() =>setUser("Atul kumar")} disabled={!isLogginIn}>
              <span className="sc-button-icon">👤</span>
              <span>Set User</span>
            </button>

            <button className="sc-button sc-button-clear" onClick={() => {
              setIsLogginIn(false);
              setUser("");
            }}>
              <span className="sc-button-icon">🗑️</span>
              <span>Clear Data</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
