// import React from "react";

// const FeaturedProducts = () => {
//   return (
//     <div style={{ 
//       height: "100vh", 
//       display: "flex", 
//       flexDirection: "column", 
//       alignItems: "center", 
//       justifyContent: "center", 
//       backgroundColor: "#f8f9fa", 
//       textAlign: "center", 
//       padding: "20px"
//     }}>
//       <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px" }}>
//         Featured Products
//       </h1>

//       <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
//         {/* Sample Product Card */}
//         <div style={{ 
//           width: "250px", 
//           padding: "15px", 
//           borderRadius: "10px", 
//           backgroundColor: "white", 
//           boxShadow: "0px 4px 8px rgba(0,0,0,0.1)", 
//           textAlign: "center"
//         }}>
//           <img src="https://via.placeholder.com/200" alt="Product 1" style={{ width: "100%", borderRadius: "10px" }} />
//           <h3 style={{ margin: "10px 0" }}>Product 1</h3>
//           <p style={{ color: "#555" }}>$99.99</p>
//         </div>

//         <div style={{ 
//           width: "250px", 
//           padding: "15px", 
//           borderRadius: "10px", 
//           backgroundColor: "white", 
//           boxShadow: "0px 4px 8px rgba(0,0,0,0.1)", 
//           textAlign: "center"
//         }}>
//           <img src="https://via.placeholder.com/200" alt="Product 2" style={{ width: "100%", borderRadius: "10px" }} />
//           <h3 style={{ margin: "10px 0" }}>Product 2</h3>
//           <p style={{ color: "#555" }}>$149.99</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeaturedProducts;

import React, { useState, useEffect } from "react";
import { FaGavel, FaHeart } from "react-icons/fa";
import FeaturedProduct1 from "./Assests/FeaturedProduct1.jpg";
import FeaturedProduct2 from "./Assests/FeaturedProduct2.jpg";

const auctions = [
  {
    image: FeaturedProduct1,
    productName: "Laptop",
    bid: "₨.100",
    endTime: Date.now() + 165 * 24 * 60 * 60 * 1000,
  },
  {
    image: FeaturedProduct2,
    productName: "Smartphone",
    bid: "₨.150",
    endTime: Date.now() + 170 * 24 * 60 * 60 * 1000,
  },
  {
    image: FeaturedProduct1,
    productName: "Tablet",
    bid: "₨.120",
    endTime: Date.now() + 167 * 24 * 60 * 60 * 1000,
  },
  {
    image: FeaturedProduct1,
    productName: "Smartwatch",
    bid: "₨.80",
    endTime: Date.now() + 161 * 24 * 60 * 60 * 1000,
  },
];

const AuctionsSection = () => {
  return (
    <div style={styles.auctionSection}>
      <h2 style={styles.sectionTitle}>
        LATEST AUCTIONS <FaGavel style={styles.titleIcon} />
      </h2>
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
        <div style={styles.overlayIcons}>
          <div style={styles.icon}>
            <FaHeart />
          </div>
        </div>
      </div>
      <h3 style={styles.productName}>{auction.productName}</h3>
      <div style={styles.timer}>
        <p>Time left:</p>
        <div style={styles.timeValues}>
          <span>{timeLeft.days}</span> Days
          <span>{timeLeft.hours}</span> Hours
          <span>{timeLeft.minutes}</span> Minutes
          <span>{timeLeft.seconds}</span> Seconds
        </div>
      </div>
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

const styles = {
  auctionSection: {
    textAlign: "center",
    padding: "40px",
  },
  sectionTitle: {
    fontSize: "28px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "40px",
    marginBottom: "60px",
  },
  titleIcon: {
    color: "#007bff",
    marginLeft: "8px",
  },
  auctionContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    margin: "0 auto",
    marginBottom: "60px",
  },
  auctionCard: {
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    width: "300px",
    minHeight: "250px",
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
  },
  overlayIcons: {
    position: "absolute",
    top: "10px",
    left: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  icon: {
    background: "white",
    padding: "8px",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "30px",
    height: "30px",
    cursor: "pointer",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
  },
  timer: {
    background: "rgba(255, 255, 255, 0.9)",
    padding: "10px",
    fontSize: "16px",
    fontWeight: "bold",
    margin: "10px 0",
  },
  timeValues: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    fontSize: "10px",
  },
  productName: {
    fontSize: "22px",
    fontWeight: "bold",
    marginTop: "10px",
    wordBreak: "break-word",
  },
  bid: {
    fontSize: "16px",
    marginBottom: "10px",
  },
};

export default AuctionsSection;

