import React from "react";
import { FaUserPlus, FaGavel, FaLock, FaRecycle } from "react-icons/fa";

const FeaturesSection = () => {
  const features = [
    { icon: <FaUserPlus />, title:"Sign Up & List Scrap", description: "Register and list your reusable electronic scrap for bidding." },
    { icon: <FaGavel />, title: "Place Bids", description: "Buyers bid on scrap items, ensuring fair pricing and competition." },
    { icon: <FaLock />, title: "Secure Transactions", description: "All payments are processed securely through our platform." },
    { icon: <FaRecycle />, title: "Receive & Recycle", description: "Sellers ship items, and buyers contribute to e-waste reduction." }
  ];

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent:"center",
      backgroundColor: "#87CEFA",
      padding: "30px 0",
      width: "100vw",
      height: "auto",
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        width: "100%",
        gap: "30px",
      }}>
        {features.map((feature, index) => (
          <div key={index} style={{
            flex: "1 1 250px",
            flexDirection:"column",
            textAlign: "center",
            color: "white",
            margin: "10px",
            minWidth: "250px",
          }}>
            <div style={{ fontSize: "50px", marginBottom: "10px" }}>{feature.icon}</div>
            <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>{feature.title}</h3>
            <p style={{ fontSize: "14px" }}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;

