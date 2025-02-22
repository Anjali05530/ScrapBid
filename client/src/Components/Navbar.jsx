import React from "react";
import {FaSearch} from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = ({isHomePage}) => {
  return (
    <div style={{ position: "fixed", top:isHomePage ? "40px" : "0", left: 0, width: "100%", zIndex: 999 }}>

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
          <h2>ScrapBid</h2>
        </div>

        {/* Navigation Links*/}
        <div>
          <Link to="/" style={{ color: "white", marginRight: "15px", textDecoration: "none" }}>Home</Link>
          <Link to="/ProductListing" style={{ color: "white", marginRight: "15px", textDecoration: "none" }}>Products</Link>
          <Link to="/Myaccount" style={{ color: "white", marginRight: "15px", textDecoration: "none" }}>Profile</Link>
          <Link to="/logout" style={{ color: "white", textDecoration: "none" }}>Logout</Link>
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
      </div>
    </div>
  );
};

export default Navbar;

