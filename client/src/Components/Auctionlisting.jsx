import React from "react";
import CategoryGrid from "./CategoryGrid";

const AuctionListing = () => {
    return (
      <div style={{ display: "flex", backgroundColor: "#f3f4f6", minHeight: "100vh", paddingRight: "80px", overflowY: "auto" }}>
        <div style={{ width: "50%", marginLeft: "20px", paddingTop:"50px",gap:"10px"}}>
          <CategoryGrid />
        </div>
      </div>
    );
};

export default AuctionListing;
