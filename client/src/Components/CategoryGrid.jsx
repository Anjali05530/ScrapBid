import React from "react";
import ConsumerElectronics from "./Assests/ConsumerElectronics.jpg";
import Gaming from "./Assests/Gaming.jpg";
import Home from "./Assests/Home.jpg";
import Power from "./Assests/Power.jpg";
import CategoryCard from "./CategoryCard";

const CategoryGrid = () => {
  const categories = [
    { title: "CONSUMER ELECTRONICS", auctions: 15, image:ConsumerElectronics },
    { title: "POWER & ENERGY DEVICE", auctions: 10, image: Power },
    { title: "HOME & KITCHEN APPLIANCES", auctions: 20, image: Home },
    { title: "GAMING & ENTERTAINMENT", auctions: 23, image:Gaming },
  ];

  const gridStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center", // Centers items horizontally
    alignItems: "center", 
    gap: "70px",
    padding: "40px",
  };

  return (
    <div style={gridStyle}>
      {categories.map((category, index) => (
        <CategoryCard key={index}
                      title={category.title}
                      auctions={category.auctions}
                      image={category.image} />
      ))}
    </div>
  );
};

export default CategoryGrid;


