import React, { useState } from "react";

const MyAccount = () => {
  const [selectedPage, setSelectedPage] = useState("dashboard");

  const containerStyle = {
    display: "flex",
    width: "100%",
    height: "50vh", // Decreased height to 90% of the viewport height
    fontFamily: "Arial, sans-serif",
  };

  const sidebarStyle = {
    width: "270px",
    backgroundColor: "#66c2ff",
    padding: "4px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    height: "80%", // Ensures the sidebar takes full height of the container
    position: "fixed", // Keeps the sidebar fixed on the left side
    top: "100px",
    left: "15px",
    borderRadius:"10px"
  };

  const sidebarItemStyle = {
    padding: "12px",
    backgroundColor: "#ffffff",
    color: "#000",
    fontWeight: "bold",
    borderRadius: "6px",
    cursor: "pointer",
    textAlign: "left",
    width:"-700px"
  };

  const activeSidebarItem = {
    ...sidebarItemStyle,
    backgroundColor: "#fff",
    color: "#0073e6",
  };

  const contentStyle = {
    flex: 1,
    padding: "20px",
    marginLeft: "20px", // Adjusted to give space for the sidebar
    height: "100%", // Ensures the content area takes full height
  };

  const pages = {
    DASHBOARD: <h2>Welcome to your Dashboard</h2>,
    ORDERS: <h2>Your Orders</h2>,
    DOWNLOADS: <h2>Your Downloads</h2>,
    ADDRESSES: <h2>Manage Addresses</h2>,
    ACCOUNTDETAILS: <h2>Update Account Details</h2>,
    MYAUCTIONBIDS: <h2>Your Auction Bids</h2>,
    MYWATCHLIST: <h2>Your Watchlist</h2>,
    MYAUCTIONACTIVITY: <h2>Auction Activity</h2>,
    AUCTIONSETTINGS: <h2>Auction Settings</h2>,
  };

  return (
    <div style={containerStyle}>
      {/* Sidebar */}
      <div style={sidebarStyle}>
        {Object.keys(pages).map((page) => (
          <div
            key={page}
            style={selectedPage === page ? activeSidebarItem : sidebarItemStyle}
            onClick={() => setSelectedPage(page)}
          >
            {page.replace(/([A-Z])/g, " $1").trim()}
          </div>
        ))}
      </div>

      {/* Content Area */}
      <div style={contentStyle}>{pages[selectedPage]}</div>
    </div>
  );
};

export default MyAccount;
