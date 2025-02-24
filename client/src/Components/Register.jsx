import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css"; // Import CSS file

const Register = () => {
  const [userType, setUserType] = useState("buyer");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    aadhar: "",
    contact: "",
    address: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle User Type Selection
  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Registration Successful!");
  };

  return (
    <div className="register-container">
      <h2>Register</h2>

      {/* User Type Selection */}
      <div className="radio-group">
        <label>
          <input type="radio" name="userType" value="buyer" checked={userType === "buyer"} onChange={handleUserTypeChange} />
          Buyer
        </label>
        <label>
          <input type="radio" name="userType" value="seller" checked={userType === "seller"} onChange={handleUserTypeChange} />
          Seller
        </label>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>

        {/* Additional Fields for Seller */}
        {userType === "seller" && (
          <>

            <div className="form-group">
              <label>Contact Number:</label>
              <input type="text" name="contact" value={formData.contact} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Address:</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} required />
            </div>
          </>
        )}

        <button type="submit">Register</button>

        <div className="links">
          <p>Already have an account? <Link to="/Login" className="login-link">Login</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Register;
