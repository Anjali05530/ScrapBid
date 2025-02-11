import React from "react";
import { FaSearch, FaTruck, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1000 }}>
      {/* Top Header */}
      <div style={{
        backgroundColor: "#0A1D56",
        color: "white",
        padding: "8px 20px",
        display: "flex",
        justifyContent: "space-between",
        fontSize: "18px",
        width: "100%"
      }}>
        <div>
          <strong>Call us toll free:</strong> +91-1234567890 |
          <strong> Email:</strong> ScrapBid@gmail.com
        </div>
        <div>
          <Link to="/order-tracking" style={{ color: "white", marginRight: "35px", textDecoration: "none" }}>
            <FaTruck style={{ marginRight: "5px" }} />Order Tracking
          </Link>
          <Link to="/wishlist" style={{ color: "white", marginRight: "25px", textDecoration: "none" }}>
            <FaHeart style={{ marginRight: "5px" }} /> Wishlist
          </Link>
          <Link to="/login" style={{ color: "white", textDecoration: "none" }}>Login</Link>
        </div>
      </div>

      {/* Navbar */}
      <div style={{
        backgroundColor: "#0A1D56",
        color: "white",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "20px",
        width: "100%",
        height: "80px"
      }}>
        <div>
          <img
            src="client/public/Logo.jpg"
            alt="Scrapbid Logo"
            style={{ width: "120px", height: "auto" }}
          />
        </div>

        {/* Search Bar */}
        <div style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: "25px",
          padding: "5px 15px",
          width: "300px"
        }}>
          <input
            type="text"
            placeholder="Search products..."
            style={{
              border: "none",
              outline: "none",
              flex: 1,
              borderRadius: "25px",
              padding: "5px 10px"
            }}
          />
          <FaSearch style={{ color: "#0A1D56", cursor: "pointer" }} />
        </div>

        {/* Navigation Links */}
        <div>
          <Link to="/Slogan" style={{ color: "white", marginRight: "15px", textDecoration: "none" }}>Home</Link>
          <Link to="/ProductListing" style={{ color: "white", marginRight: "15px", textDecoration: "none" }}>Products</Link>
          <Link to="/profile" style={{ color: "white", marginRight: "15px", textDecoration: "none" }}>Profile</Link>
          <Link to="/logout" style={{ color: "white", textDecoration: "none" }}>Logout</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
