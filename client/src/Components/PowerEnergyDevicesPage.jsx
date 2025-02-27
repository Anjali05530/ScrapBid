import React from "react";
import auctionData from "./auctionData";

const PowerEnergyDevicesPage = () => {
    // Ensure auctionData exists before filtering
    if (!auctionData || !Array.isArray(auctionData)) {
        return <p>Error loading auction data.</p>;
    }

    // Normalize category names to avoid case mismatches
    const powerEnergyProducts = auctionData.filter(
        (item) => item.category?.trim().toLowerCase() === "power energy devices"
    );

    return (
        <div style={{ padding: "20px", maxWidth: "1200px", margin: "auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "24px", marginBottom: "20px" }}>
                Power & Energy Devices
            </h2>

            <div 
                className="product-list"
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    justifyContent: "center",
                }}
            >
                {powerEnergyProducts.length > 0 ? (
                    powerEnergyProducts.map((item) => (
                        <div 
                            key={item.id} 
                            className="product-card"
                            style={{
                                border: "1px solid #ddd",
                                padding: "15px",
                                borderRadius: "8px",
                                width: "220px",
                                textAlign: "center",
                                backgroundColor: "#fff",
                                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.15)",
                                transition: "transform 0.2s",
                            }}
                        >
                            <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>{item.name}</h3>
                            <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                                Price: Rs.{item.price}
                            </p>
                        </div>
                    ))
                ) : (
                    <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold", color: "#888" }}>
                        No products found in this category.
                    </p>
                )}
            </div>
        </div>
    );
};

export default PowerEnergyDevicesPage;
