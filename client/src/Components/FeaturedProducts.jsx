import React from "react";

const FeaturedProducts = () => {
  return (
    <div style={{ 
      height: "100vh", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      backgroundColor: "#f8f9fa", 
      textAlign: "center", 
      padding: "20px"
    }}>
      <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px" }}>
        Featured Products
      </h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
        {/* Sample Product Card */}
        <div style={{ 
          width: "250px", 
          padding: "15px", 
          borderRadius: "10px", 
          backgroundColor: "white", 
          boxShadow: "0px 4px 8px rgba(0,0,0,0.1)", 
          textAlign: "center"
        }}>
          <img src="https://via.placeholder.com/200" alt="Product 1" style={{ width: "100%", borderRadius: "10px" }} />
          <h3 style={{ margin: "10px 0" }}>Product 1</h3>
          <p style={{ color: "#555" }}>$99.99</p>
        </div>

        <div style={{ 
          width: "250px", 
          padding: "15px", 
          borderRadius: "10px", 
          backgroundColor: "white", 
          boxShadow: "0px 4px 8px rgba(0,0,0,0.1)", 
          textAlign: "center"
        }}>
          <img src="https://via.placeholder.com/200" alt="Product 2" style={{ width: "100%", borderRadius: "10px" }} />
          <h3 style={{ margin: "10px 0" }}>Product 2</h3>
          <p style={{ color: "#555" }}>$149.99</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
