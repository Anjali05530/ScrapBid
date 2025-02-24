import React from "react";
import { FaTruck,FaHeart} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useWishlist } from "./WishlistContext"; 

const Header = () => {
  const {wishlist}=useWishlist();
  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1000 }}>
      <div style={{
        backgroundColor: "#191970",
        color: "white",
        padding: "8px 20px",
        display: "flex",
        justifyContent: "space-between",
        fontSize: "16px",
        width: "100%",
        height: "px",
      }}>
        <div>
          <strong>Call us toll free:</strong> +91-1234567890 |
          <strong> Email:</strong> ScrapBid@gmail.com
        </div>
        <div>
          <Link to="/order-tracking" style={{ color: "white", marginRight: "35px", textDecoration: "none" }}>
            <FaTruck style={{ marginRight: "5px" }} />Order Tracking
          </Link>
          <Link to="/wishlist" style={{ color: "white", marginRight: "25px", textDecoration: "none" }}>
            <FaHeart style={{ marginRight: "5px" }} /> Wishlist ({wishlist.length})
          </Link>
          <Link to="/login" style={{ color: "white", textDecoration: "none" }}>Login</Link>
        </div>
      </div>
      </div>
  );
};

export default Header;