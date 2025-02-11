import React, { useState } from "react";
import "./Login.css"; // Import CSS file
import { Link } from "react-router-dom"; // For navigation links

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    alert("Login Successful!");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>

        <div className="form-group remember-me">
          <input type="checkbox" name="rememberMe" checked={formData.rememberMe} onChange={handleChange} />
          <label>Remember Me</label>
        </div>

        <button type="submit">Login</button>

        <div className="links">
          <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
          <p>
            Don't have an account? <Link to="/Register" className="register-link">Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
