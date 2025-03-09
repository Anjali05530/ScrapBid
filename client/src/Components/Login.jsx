import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <FaEnvelope className="icon" />
            <input type="email" placeholder="Email ID" required />
          </div>
          <div className="input-group">
            <FaLock className="icon" />
            <input type="password" placeholder="Password" required />
          </div>
          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
          <p>
            Don't have an account? <a href="Register">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
