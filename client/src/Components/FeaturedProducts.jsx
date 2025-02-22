import React, { useState, useEffect } from "react";
import { FaGavel, FaHeart } from "react-icons/fa";
import auctions from "./auctionData";
const AuctionsSection = ({hideHeader}) => {
  return (
    <div style={styles.auctionSection}>
      {!hideHeader &&(
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
        {auctions.map((auction, index) => (
          <AuctionCard key={index} auction={auction} />
        ))}
      </div>
    </div>
  );
};

const AuctionCard = ({ auction }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(auction.endTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(auction.endTime));
    }, 1000);
    return () => clearInterval(interval);
  }, [auction.endTime]);

  return (
    <div style={styles.auctionCard}>
      <div style={styles.imageContainer}>
        <img src={auction.image} alt={auction.productName} style={styles.image} />
        <div style={styles.countdownOverlay}>
          <p>Time left:</p>
          <div style={styles.timeValues}>
            <span>{timeLeft.days}d</span>
            <span>{timeLeft.hours}h</span>
            <span>{timeLeft.minutes}m</span>
            <span>{timeLeft.seconds}s</span>
          </div>
        </div>
        <div style={styles.overlayIcons}>
        <div style={styles.icon}>
            <FaGavel />
          </div>
          <div style={styles.icon}>
            <FaHeart />
          </div>
        </div>
      </div>
      <h3 style={styles.productName}>{auction.productName}</h3>
      <p style={styles.bid}>
        Starting Bid: <strong>{auction.bid}</strong>
      </p>
    </div>
  );
};

const calculateTimeLeft = (endTime) => {
  const difference = endTime - Date.now();
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

// Define styles
const styles = {
  auctionSection: {
    textAlign: "center",
    padding: "40px",
  },
  sectionHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: "28px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "30px",
    marginBottom: "10px",
  },
  lineContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "30px",
  },
  line: {
    width: "200px",
    height: "2px",
    backgroundColor: "black",
  },
  titleIcon: {
    fontSize: "24px",
    color: "#007bff",
    marginLeft:"8px",
  },
  auctionContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    gap: "20px",
    margin:"0 auto",
    marginBottom:"60px",
  },
  auctionCard: {
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    width: "300px",
    minHeight:"250px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingBottom: "30px",
  },
  imageContainer: {
    position: "relative",
    height: "250px",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "10px 10px 0 0",
  },
  overlayIcons: {
    position: "absolute",
    top: "10px",
    left: "10px",
    zIndex: 2,
  },
  icon: {
    background: "rgba(255, 255, 255, 0.7)",
    borderRadius: "50%",
    padding: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    cursor: "pointer",
  },
  countdownOverlay: {
    position: "absolute",
    bottom: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "rgba(255, 255, 255, 0.8)",
    padding: "8px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "bold",
  },
  timeValues: {
    display: "flex",
    justifyContent: "center",
    gap: "8px",
  },
  productName: {
    fontSize: "22px",
    fontWeight: "bold",
    marginTop: "10px",
  },
  bid: {
    fontSize: "16px",
    marginBottom: "10px",
  },
};

export default AuctionsSection;
