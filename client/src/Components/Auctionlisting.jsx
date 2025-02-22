import React from "react";
import CategoryGrid from "./CategoryGrid";

const AuctionListing = () => {
    return (
      <div style={{ display: "flex", backgroundColor: "#f3f4f6", minHeight: "100vh", padding: "24px", overflowY: "auto" }}>
        <div style={{ width: "30%", marginLeft: "10px", paddingTop:"50px"}}>
          <CategoryGrid />
        </div>
      </div>
    );
};

export default AuctionListing;
