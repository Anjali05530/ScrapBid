import React from "react";
import Newsletter from "./Assests/Newsletter.jpg";
const NewsletterSubscription = () => {
  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "50vh",
    backgroundImage: `url(${Newsletter})`, // Replace with correct path
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    marginTop:"50px",
    backdropFilter: "blur(8px)",
  };

  const overlayStyle = {
    padding: "24px",
    textAlign: "center",
    borderRadius: "8px",
    width: "75%",
    maxWidth: "500px",
  };

  const inputStyle = {
    padding: "12px",
    width: "100%",
    maxWidth: "300px",
    borderTopLeftRadius: "8px",
    borderBottomLeftRadius: "8px",
    border: "none",
    outline: "none",
    color: "black",
  };

  const buttonStyle = {
    backgroundColor: "#60a5fa",
    padding: "12px",
    color: "white",
    fontWeight: "bold",
    borderTopRightRadius: "8px",
    borderBottomRightRadius: "8px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "8px" }}>
          Stay in touch with our offers
        </h2>
        <p style={{ marginBottom: "16px" }}>Subscribe to our Newsletter</p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <input type="email" placeholder="Enter your email" style={inputStyle} />
          <button style={buttonStyle}>SUBMIT</button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
