import React from "react";
import { useNavigate } from "react-router-dom";
import { FaGavel, FaEye, FaChartLine } from "react-icons/fa";

const Myaccount = () => {
  const navigate = useNavigate();
  const menuItems = [
    { name: "DASHBOARD", path: "/dashboard" },
    { name: "ORDERS", path: "/orders" },
    { name: "DOWNLOADS", path: "/downloads" },
    { name: "ADDRESSES", path: "/addresses" },
    { name: "ACCOUNT DETAILS", path: "/account-details" },
    { name: "MY AUCTION BIDS", path: "/auction-bids" },
    { name: "MY WATCHLIST", path: "/watchlist" },
    { name: "MY AUCTION ACTIVITY", path: "/auction-activity" },
    { name: "AUCTIONS SETTINGS", path: "/auction-settings" },
    { name: "LOGOUT", path: "/logout" },
  ];

  return (
    <div style={{ display: "flex", fontFamily: "Arial, sans-serif" }}>
      {/* Sidebar */}
      <div
        style={{
          width: "350px",
          backgroundColor: "#6ec1e4",
          padding: "10px",
          height: "80%",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          marginTop: "100px",
          marginLeft: "30px",
        }}
      >
        {menuItems.map((item, index) => (
          <div
            key={index}
            style={{
              padding: "15px",
              fontWeight: "bold",
              color: "#fff",
              cursor: "pointer",
              borderBottom: index !== menuItems.length - 1 ? "1px solid white" : "none",
              textAlign: "center",
              transition: "background 0.3s, color 0.3s",
            }}
            onClick={() => navigate(item.path)}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "white";
              e.target.style.color = "#000";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#6ec1e4";
              e.target.style.color = "#fff";
            }}
          >
            {item.name}
          </div>
        ))}
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: "20px", minWidth: "600px", overflowX: "hidden", marginTop: "90px" }}>
        <p>
          Hello <b>xy</b> (not <b>xy</b>? <a href="/logout" style={{ textDecoration: "none", color: "black" }}>Log out</a>)
        </p>
        <p>
          From your account dashboard you can view your <b>recent orders</b>, manage your
          <b> shipping and billing addresses</b>, and edit your password and account details.
        </p>

        <h2>Auction Quick Links</h2>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {[
            { name: "My Auction Bids", path: "/auction-bids", icon: <FaGavel size={20} /> },
            { name: "My Watchlist", path: "/watchlist", icon: <FaEye size={20} /> },
            { name: "My Auction Activity", path: "/auction-activity", icon: <FaChartLine size={20} /> },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                padding: "20px",
                flex: 1,
                textAlign: "center",
                cursor: "pointer",
                minWidth: "180px",
              }}
              onClick={() => navigate(item.path)}
            >
              <div>{item.icon}</div>
              <p style={{ fontWeight: "bold", color: "black" }}>{item.name}</p>
            </div>
          ))}
        </div>

        {/* Become a Vendor Section */}
<div style={{
  marginTop: "20px",
  padding: "15px",
  border: "1px solid #ccc",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap"
}}>
  <div>
    <b style={{ fontSize: "16px", color: "#333" }}>Become a Vendor</b>
    <p style={{ margin: "5px 0", fontSize: "14px", color: "#777" }}>
      Vendors can sell products and manage a store with a vendor dashboard.
    </p>
  </div>
  <button
    style={{
      backgroundColor: "#1d3b53",
      color: "#6ec1e4",
      padding: "5px 10px",
      border: "none",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "bold",
      minWidth: "130px",
      height: "35px",
      textAlign: "center",
      borderRadius: "3px"
    }}
    onClick={() => navigate("/become-vendor")}
  >
    Become a Vendor
  </button>
</div>

      </div>
    </div>
  );
};

export default Myaccount;
