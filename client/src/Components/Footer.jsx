import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#0c2a58",
    color: "white",
    padding: "40px 80px",
    textAlign: "left",
    position: "absolute",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "auto", 
  };

  const containerStyle = {
    maxWidth: "1200px",
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexWrap: "wrap",
  };

  const sectionStyle = {
    flex: "1",
    minWidth: "250px",
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column"
  };

  const inputContainerStyle = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "50px",
    overflow: "hidden",
    maxWidth: "400px",
    height: "45px",
    padding: "5px",
  };

  const inputStyle = {
    padding: "10px",
    flex: "1",
    border: "none",
    outline: "none",
    fontSize: "14px",
    borderRadius: "50px 0 0 50px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    height: "100%",
    borderRadius: "0 50px 50px 0",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    display: "inline-block",
    marginRight: "10px",
    fontSize: "20px",
  };

  const bottomTextStyle = {
    textAlign: "center",
    marginTop: "20px",
    fontSize: "14px",
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={sectionStyle}>
          <h1>ScrapBid</h1>
          <p>ScrapBid@gmail.com</p>
          <p>+91-1234567890</p>
          <div>
            <a href="#" style={linkStyle}><FaFacebookF /></a>
            <a href="#" style={linkStyle}><FaTwitter /></a>
            <a href="#" style={linkStyle}><FaInstagram /></a>
            <a href="#" style={linkStyle}><FaLinkedinIn /></a>
          </div>
        </div>

        <div style={sectionStyle}>
          <h3>Useful Links</h3>
          <a href="#" style={linkStyle}>Category</a>
          <a href="#" style={linkStyle}>Laptop</a>
          <a href="#" style={linkStyle}>Headphones</a>
        </div>

        <div style={sectionStyle}>
          <h3>Our Policy</h3>
          <a href="#" style={linkStyle}>Homepage</a>
          <a href="#" style={linkStyle}>Blog</a>
          <a href="#" style={linkStyle}>Services</a>
        </div>

        <div style={sectionStyle}>
          <h3>Subscribe to our Newsletter</h3>
          <div style={inputContainerStyle}>
            <input type="email" placeholder="Enter your email" required style={inputStyle} />
            <button type="submit" style={buttonStyle}>SUBMIT</button>
          </div>
        </div>
      </div>

      <div style={bottomTextStyle}>
        <p>ScrapBid Auctions Theme by Model Theme | Copyright © 2025</p>
        <p>Elite Author on ThemeForest.</p>
      </div>
    </footer>
  );
};

export default Footer;
