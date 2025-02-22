import React, { useState } from "react";

const MyAccount = () => {
  const [selectedPage, setSelectedPage] = useState("dashboard");

  const containerStyle = {
    display: "flex",
    width: "100%",
    height: "60vh", // Decreased height to 90% of the viewport height
    fontFamily: "Arial, sans-serif",
  };

  const sidebarStyle = {
    width: "250px",
    backgroundColor: "#66c2ff",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    height: "80%", // Ensures the sidebar takes full height of the container
    position: "fixed", // Keeps the sidebar fixed on the left side
    top: "100px",
    left: 0,
  };

  const sidebarItemStyle = {
    padding: "12px",
    backgroundColor: "#ffffff",
    color: "#000",
    fontWeight: "bold",
    borderRadius: "4px",
    cursor: "pointer",
    textAlign: "left",
  };

  const activeSidebarItem = {
    ...sidebarItemStyle,
    backgroundColor: "#fff",
    color: "#0073e6",
  };

  const contentStyle = {
    flex: 1,
    padding: "20px",
    marginLeft: "270px", // Adjusted to give space for the sidebar
    height: "100%", // Ensures the content area takes full height
  };

  const pages = {
    dashboard: <h2>Welcome to your Dashboard</h2>,
    orders: <h2>Your Orders</h2>,
    downloads: <h2>Your Downloads</h2>,
    addresses: <h2>Manage Addresses</h2>,
    accountDetails: <h2>Update Account Details</h2>,
    myAuctionBids: <h2>Your Auction Bids</h2>,
    myWatchlist: <h2>Your Watchlist</h2>,
    myAuctionActivity: <h2>Auction Activity</h2>,
    auctionSettings: <h2>Auction Settings</h2>,
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
