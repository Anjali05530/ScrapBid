// import React from "react";
// import { FaUserPlus, FaGavel, FaLock, FaRecycle } from "react-icons/fa";

// const HowItWorks = () => {
//   const sectionStyle = {
//   backgroundcolor:"white",
//   width: "100vw",
//   height: "100vh",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   alignItems: "center",
//   textAlign: "center",
//   };

//   const headingStyle = {
//     fontSize: "2rem",
//     fontWeight: "bold",
//     marginBottom: "20px",
//   };

//   const stepsContainerStyle = {
//     display: "flex",
//     justifyContent: "center",
//     gap: "40px",
//     flexWrap: "wrap",
//     maxWidth: "1000px",
//     margin: "0 auto",
//   };

//   const stepStyle = {
//     backgroundColor: "white",
//     padding: "20px",
//     borderRadius: "10px",
//     width: "220px",
//     boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
//     textAlign: "center",
//   };

//   const iconStyle = {
//     fontSize: "2.5rem",
//     color: "#0c2a58",
//     marginBottom: "10px",
//   };

//   return (
//     <section style={sectionStyle}>
//       <h1 style={headingStyle}>How It Works</h1>
//       <div style={stepsContainerStyle}>
//         <div style={stepStyle}>
//           <FaUserPlus style={iconStyle} />
//           <h3>Sign Up & List Scrap</h3>
//           <p>Register and list your reusable electronic scrap for bidding.</p>
//         </div>
//         <div style={stepStyle}>
//           <FaGavel style={iconStyle} />
//           <h3>Place Bids</h3>
//           <p>Buyers bid on scrap items, ensuring fair pricing and competition.</p>
//         </div>
//         <div style={stepStyle}>
//           <FaLock style={iconStyle} />
//           <h3>Secure Transactions</h3>
//           <p>All payments are processed securely through our platform.</p>
//         </div>
//         <div style={stepStyle}>
//           <FaRecycle style={iconStyle} />
//           <h3>Receive & Recycle</h3>
//           <p>Sellers ship items, and buyers contribute to e-waste reduction.</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;

import React from "react";
import { FaUserPlus, FaGavel, FaLock, FaRecycle } from "react-icons/fa";

const FeaturesSection = () => {
  const features = [
    { icon: <FaUserPlus />, title:"Sign Up & List Scrap", description: "Register and list your reusable electronic scrap for bidding." },
    { icon: <FaGavel />, title: "Place Bids", description: "Buyers bid on scrap items, ensuring fair pricing and competition." },
    { icon: <FaLock />, title: "Secure Transactions", description: "All payments are processed securely through our platform." },
    { icon: <FaRecycle />, title: "Receive & Recycle", description: "Sellers ship items, and buyers contribute to e-waste reduction." }
  ];

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent:"center",
      backgroundColor: "#87CEFA",
      padding: "30px 0",
      width: "100vw",
      height: "auto",
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        width: "100%",
        gap: "30px",
      }}>
        {features.map((feature, index) => (
          <div key={index} style={{
            flex: "1 1 250px",
            flexDirection:"column",
            textAlign: "center",
            color: "white",
            margin: "10px",
            minWidth: "250px",
          }}>
            <div style={{ fontSize: "50px", marginBottom: "10px" }}>{feature.icon}</div>
            <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>{feature.title}</h3>
            <p style={{ fontSize: "14px" }}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;

