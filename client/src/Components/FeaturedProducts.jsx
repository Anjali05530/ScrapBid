import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaGavel, FaHeart } from "react-icons/fa";
import auctionData from "./auctionData";

const AuctionsSection = ({ hideHeader }) => {
  const sortedAuctions = [...auctionData].sort((a, b) => b.bid - a.bid);
  const displayAuctions = hideHeader ? sortedAuctions : sortedAuctions.slice(0, 4);

  return (
    <div style={styles.auctionSection}>
      {!hideHeader && (
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>LATEST AUCTIONS</h2>
          <div style={styles.lineContainer}>
            <div style={styles.line}></div>
            <FaGavel style={styles.titleIcon} />
            <div style={styles.line}></div>
          </div>
        </div>
      )}
      <div style={styles.auctionContainer}>
        {displayAuctions.map((auction) => (
          <ProductCard key={auction.id} item={auction} />
        ))}
      </div>
    </div>
  );
};

const CategoryPage = () => {
  const { category } = useParams();
  const formattedCategory = category.replace(/%20/g, " ").toLowerCase().trim();
  const filteredProducts = auctionData.filter(
    (item) => item.category.toLowerCase().trim() === formattedCategory
  );

  return (
    <div style={{ textAlign: "center", marginTop: "-270px" }}>
      <h2>{category} Products</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => <ProductCard key={item.id} item={item} />)
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

const ProductCard = ({ item }) => {
  const [timeLeft, setTimeLeft] = useState(item.endTime - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(item.endTime - Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, [item.endTime]);

  const formatTime = (ms) => {
    if (ms <= 0) return "Auction Ended";
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div style={styles.productCard}>
      <div style={styles.imageContainer}>
        <img src={item.image} alt={item.productName} style={styles.image} />
        <div style={styles.countdownOverlay}>
          <strong style={{ fontSize: "12px", textTransform: "uppercase" }}>Time left:</strong>
          <span>{formatTime(timeLeft)}</span>
        </div>
        <div style={styles.overlayIcons}>
          <FaGavel style={styles.icon} />
          <FaHeart style={styles.icon} />
        </div>
      </div>
      <div style={{ padding: "15px" }}>
        <h3 style={{ fontSize: "18px", fontWeight: "bold", margin: "5px 0" }}>{item.productName}</h3>
        <p style={{ fontSize: "16px", color: "#555" }}>
          Starting Bid: <strong>₹{item.bid}</strong>
        </p>
      </div>
    </div>
  );
};

const styles = {
  auctionSection: { textAlign: "center", padding: "40px", },
  sectionHeader: { display: "flex", flexDirection: "column", alignItems: "center" },
  sectionTitle: { fontSize: "28px", fontWeight: "bold", marginBottom: "10px" },
  lineContainer: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "30px" },
  line: { width: "200px", height: "2px", backgroundColor: "black" },
  titleIcon: { fontSize: "24px", color: "#007bff" },
  auctionContainer: { display: "flex", flexWrap: "wrap", gap: "35px", justifyContent: "center" },
  productCard: {
    width: "300px",
    height:"355px",
    borderRadius: "15px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    overflow: "hidden",
    background: "white",
    textAlign: "center",
  },
  imageContainer: { position: "relative", width: "100%", height: "250px" },
  image: { width: "100%", height: "100%", objectFit: "cover" },
  countdownOverlay: {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "rgba(255, 255, 255, 0.9)",
    padding: "10px 14px",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "bold",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  overlayIcons: {
    position: "absolute",
    top: "10px",
    left: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  icon: {
    fontSize: "30px",
    cursor: "pointer",
    background: "white",
    borderRadius: "50%",
    padding: "5px",
  },
};

export { AuctionsSection, CategoryPage };
