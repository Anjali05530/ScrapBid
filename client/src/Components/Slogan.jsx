import React from "react";
import { FaSearch } from "react-icons/fa";
import "./Slogan.css";

const Slogan = () => {
  return (
    <div className="Slogan-container"style={{ 

      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center",
      height: "100vh", 
      textAlign: "center", 
      color: "white"
    }}>


      {/* Slogan + Search Bar Together */}
      <div style={{ marginTop: "70px" }}>
        <h1 style={{ fontSize: "50px", fontWeight: "bold", marginBottom: "10px",animation: "floating 3s ease-in-out infinite" }}>
          Turn Scrap into Treasure - Bid, Win, Recycle!
        </h1>

        {/* Search Bar in Center */}
        <div style={{ 
          position: "relative", 
          display: "flex", 
          alignItems: "center",
          backgroundColor: "white", 
          borderRadius: "25px", 
          padding: "5px 15px",
          width: "400px",
          margin: "0 auto",
          boxShadow: "0px 4px 6px rgba(0,0,0,0.1)"
        }}>
          <input 
            type="text" 
            placeholder="Search products..." 
            style={{ 
              border: "none", 
              outline: "none", 
              flex: 1, 
              borderRadius: "25px", 
              padding: "10px"
            }}
          />
          <FaSearch style={{ color: "#0A1D56", cursor: "pointer" }} />
          
        </div>
      </div>
    </div>
  );
};

export default Slogan;
