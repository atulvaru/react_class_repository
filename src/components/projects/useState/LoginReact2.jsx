import "./LoginReact.css";
import { useState } from "react";

export const LoginReact2 = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
     
    console.log("Login Data:", user);
    setTimeout(() => {
      setIsLoading(false);
      alert("Login successful!");
    }, 2000);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-header">
          <h1>Welcome Back</h1>
          <span className="login-icon">🔐</span>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <div className="input-wrapper">
            <span className="input-icon">📧</span>
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="input-wrapper">
            <span className="input-icon">🔒</span>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="••••••••"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
              autoComplete="off"
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>
        </div>

        <div className="form-options">
          <label className="remember-me">
            <input type="checkbox" />
            <span>Remember me</span>
          </label>
          <a href="#forgot" className="forgot-link">
            Forgot password?
          </a>
        </div>

        <button type="submit" className="login-button" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Sign In"}
        </button>

        <div className="login-footer">
          Don't have an account? <a href="#signup">Create one</a>
        </div>
      </form>
    </div>
  );
};
