import React from "react";
import { FaUserPlus, FaGavel, FaLock, FaRecycle } from "react-icons/fa";

const HowItWorks = () => {
  const sectionStyle = {
  backgroundcolor:"white",
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  };

  const headingStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const stepsContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    flexWrap: "wrap",
    maxWidth: "1000px",
    margin: "0 auto",
  };

  const stepStyle = {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    width: "220px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  };

  const iconStyle = {
    fontSize: "2.5rem",
    color: "#0c2a58",
    marginBottom: "10px",
  };

  return (
    <section style={sectionStyle}>
      <h1 style={headingStyle}>How It Works</h1>
      <div style={stepsContainerStyle}>
        <div style={stepStyle}>
          <FaUserPlus style={iconStyle} />
          <h3>Sign Up & List Scrap</h3>
          <p>Register and list your reusable electronic scrap for bidding.</p>
        </div>
        <div style={stepStyle}>
          <FaGavel style={iconStyle} />
          <h3>Place Bids</h3>
          <p>Buyers bid on scrap items, ensuring fair pricing and competition.</p>
        </div>
        <div style={stepStyle}>
          <FaLock style={iconStyle} />
          <h3>Secure Transactions</h3>
          <p>All payments are processed securely through our platform.</p>
        </div>
        <div style={stepStyle}>
          <FaRecycle style={iconStyle} />
          <h3>Receive & Recycle</h3>
          <p>Sellers ship items, and buyers contribute to e-waste reduction.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
