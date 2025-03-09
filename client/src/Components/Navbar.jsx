import React, { useState } from "react";
import { FaSearch, FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ isHomePage }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div style={{ position: "fixed", top: isHomePage ? "40px" : "40px", left: 0, width: "100%", zIndex: 999 }}>
      <div
        style={{
          backgroundColor: "#0A1D56",
          color: "white",
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "20px",
          width: "100%",
          height: "80px",
        }}
      >
        {/* Logo */}
        <div style={{ fontSize: "33px", fontWeight: "bold" }}>
          <span style={{ color: "#87CEFA" }}>S</span>crap
          <span style={{ color: "#87CEFA" }}>B</span>id
        </div>

        {/* Search Bar (Now inside flexbox) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "25px",
            padding: "5px 15px",
            width: "300px",
            marginRight: "20px",
          }}
        >
          <input
            type="text"
            placeholder="Search products..."
            style={{
              border: "none",
              outline: "none",
              flex: 1,
              borderRadius: "25px",
              padding: "5px 10px",
            }}
          />
          <FaSearch style={{ color: "#0A1D56", cursor: "pointer" }} />
        </div>

        {/* Navigation Links */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>

          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <Link to="/AuctionsSection" style={{ color: "white", textDecoration: "none" }}>Products</Link>
            {showDropdown && (
              <div
                style={{
                  position: "absolute",
                  top: "30px",
                  left: 0,
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "5px",
                  boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
                  minWidth: "250px",
                  zIndex: 1000,
                  display: "flex",
                  flexDirection: "column",
                  padding: "10px 0",
                }}
              >
                <Link to="/category/Consumer%20Electronics" style={{ padding: "10px", textDecoration: "none", color: "black", fontSize: "20px", borderBottom: "1px solid #ccc" }}>Consumer Electronics</Link>
                <Link to="/category/power & energy devices" style={{ padding: "10px", textDecoration: "none", color: "black", borderBottom: "1px solid #ccc" }}>Power & Energy Devices</Link>
                <Link to="/category/home appliances" style={{ padding: "10px", textDecoration: "none", color: "black", borderBottom: "1px solid #ccc" }}>Home & Kitchen Appliances</Link>
                <Link to="/category/Gaming Entertainment" style={{ padding: "10px", textDecoration: "none", color: "black" }}>Gaming & Entertainment</Link>
              </div>
            )}
          </div>

          <Link to="/Myaccount" style={{ color: "white", textDecoration: "none" }}>Profile</Link>
          <Link to="/logout" style={{ color: "white", textDecoration: "none" }}>Logout</Link>

          {/* Cart Button */}
          <Link
            to="/cart"
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "white",
              padding: "10px 15px",
              borderRadius: "30px",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: "bold",
              color: "black",
              boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
              marginLeft: "180px",
            }}
          >
            <FaShoppingBasket style={{ color: "#87CEFA", fontSize: "20px", marginLeft: "10px" }} />
            My Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
