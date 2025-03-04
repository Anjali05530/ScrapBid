import React from "react";
import CategoryGrid from "./CategoryGrid";
import { ProductCard } from "./FeaturedProducts";
import auctionData from "./auctionData";

const AuctionListing = () => {
  const categories = [
    "Consumer Electronics",
    "Gaming Entertainment",
    "Home Appliances",
    "Power & Energy Devices",
  ];

  return (
    <div
      style={{
        position: "relative",
        padding: "80px",
        gap:"40px",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div style={{ width: "35%" }}>
        <CategoryGrid layout="column" />
      </div>

      <div style={{ display: "flex", flexDirection: "column", width: "65%" }}>
        {categories.map((category) => {
          const formattedCategory = category.toLowerCase().trim();
          const filteredProducts = auctionData.filter(
            (item) => item.category.toLowerCase().trim() === formattedCategory
          );
          const displayProducts = filteredProducts.slice(0, 3);

          return (
            <div
              key={category}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                justifyContent: "flex-start",
                marginBottom: "50px",
              }}
            >
              {displayProducts.map((product) => (
                <ProductCard key={product.id} item={product} />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AuctionListing;