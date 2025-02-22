import React from "react";
import auctionData from "./auctionData"; // Corrected import path

const ConsumerElectronicsPage = () => {
    // Filter auction items by category "consumer electronics"
    const electronicsProducts = auctionData.filter(
        (item) => item.category.toLowerCase() === "consumer electronics"
    );

    return (
        <div>
            <h2>Consumer Electronics</h2>
            <div className="product-list" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {electronicsProducts.length > 0 ? (
                    electronicsProducts.map((item) => (
                        <div 
                            key={item.id} 
                            className="product-card"
                            style={{
                                border: "1px solid #ddd",
                                padding: "10px",
                                borderRadius: "5px",
                                width: "200px",
                                textAlign: "center",
                                backgroundColor: "#fff",
                                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                            }}
                        >
                            <h3>{item.name}</h3>
                            <p>Price: Rs.{item.price}</p>
                        </div>
                    ))
                ) : (
                    <p>No products found in this category.</p>
                )}
            </div>
        </div>
    );
};

export default ConsumerElectronicsPage;
