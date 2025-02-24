import React from "react";
import ConsumerElectronics from "./Assests/ConsumerElectronics.jpg";
import Gaming from "./Assests/Gaming.jpg";
import Home from "./Assests/Home.jpg";
import Power from "./Assests/Power.jpg";

const categories = [
  {
    title: "CONSUMER ELECTRONICS",
    auctions: 15,
    image: ConsumerElectronics,
  },
  {
    title: "GAME & ENTERTANMENT",
    auctions: 15,
    image: Gaming,
  },
  {
    title: "HOME APPLIANCES",
    auctions: 15,
    image: Home,
  },
  {
    title: "POWER & ENERGY",
    auctions: 15,
    image: Power,
  },
];

const CategoryGrid = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "auto auto",
        gap: "20px",
        padding: "16px",
        maxWidth: "1300px",
        margin: "auto",
      }}
    >
      <div style={{ gridColumn: "1 / 2", gridRow: "1 / 2", height: "250px" }}>
        <CategoryCard category={categories[0]} />
      </div>
      <div style={{ gridColumn: "2 / 3", gridRow: "1 / 3", height: "350px" }}>
        <CategoryCard category={categories[1]} />
      </div>
      <div style={{ gridColumn: "1 / 2", gridRow: "2 / 4", height: "350px" }}>
        <CategoryCard category={categories[2]} />
      </div>
      <div style={{ gridColumn: "2 / 3", gridRow: "3 / 4", height: "250px" }}>
        <CategoryCard category={categories[3]} />
      </div>
    </div>
  );
};

const CategoryCard = ({ category }) => {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: "0px",
        overflow: "hidden",
        width: "100%",
        height: "100%",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}

      onMouseOver={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0px 8px 20px rgba(0, 0, 0, 0.3)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <img
        src={category.image}
        alt={category.title}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems:"flex-start",
          padding: "16px",
        }}
      >
        <h2 style={{ color: "white", fontSize: "24px", fontWeight: "bold", marginBottom: "4px" }}>
          {category.title}
        </h2>
        <p style={{ color: "white", fontSize: "14px" }}>{category.auctions} Auctions</p>
        <button
          style={{
            marginTop: "10px",
            padding: "12px 16px",
            width:"140px",
            fontSize: "16px",
            border: "1px solid white",
            color: "white",
            background: "transparent",
            borderRadius: "30px",
            cursor: "pointer",
            transition: "all 0.3s",
          }}
          onMouseOver={(e) => {
            e.target.style.background = "white";
            e.target.style.color = "black";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "transparent";
            e.target.style.color = "white";
          }}
        >
          VIEW MORE
        </button>
      </div>
    </div>
  );
};

export default CategoryGrid;
