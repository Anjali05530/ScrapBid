// import React from "react";

// const CategoryCard = ({ title, auctions, image }) => {
//   const cardStyle = {
//     position: "relative",
//     width:"100%",
//     maxwidth:"400px",
//     height: "300px",
//     backgroundImage: `url(${image})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     display: "flex",
//     flexDirection:"column",
//     alignItems: "left",
//     justifyContent: "left",
//     borderRadius: "10px",
//     overflow: "hidden",
//     fontWeight:"bold",
//     padding:"10px",
//   };

//   const overlayStyle = {
//     color: "black",
//     textAlign: "top",
//     padding: "20px",
//     width: "100%",
//     height: "100%",
//     flexDirection: "column",
//     justifyContent: "top",
//     alignItems: "left",
//   };

//   const buttonStyle = {
//     color: "black",
//     border: "none",
//     padding: "10px 20px",
//     cursor: "pointer",
//     borderRadius: "5px",
//     fontSize: "14px",
//     marginTop: "10px",
//     alignItems:"left",
//     display:"inline-block",
//     width:"auto"
//   };

//   return (
//     <div style={cardStyle}>
//       <div style={overlayStyle}>
//         <h2>{title}</h2>
//         <p>{auctions} Auctions</p>
//         <button style={buttonStyle}>VIEW MORE</button>
//       </div>
//     </div>
//   );
// };

// export default CategoryCard;
import React, { useState } from "react";

const CategoryCard = ({ title, auctions, image }) => {
  const [hover, setHover] = useState(false);

  const cardStyle = {
    position: "relative",
    width: "100%",
    maxWidth: "650px",
    height: "300px",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "center",
    borderRadius: "10px",
    overflow: "hidden",
    fontWeight: "bold",
    padding: "10px",
    transition: "transform 0.3s ease-in-out",
    transform: hover ? "scale(1.05)" : "scale(1)", // Hover zoom effect
  };

  const overlayStyle = {
    color: "black",
    textAlign: "top",
    padding: "20px",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "top",
    alignItems: "left",
    backgroundColor: hover ? "rgba(0, 0, 0, 0.1)" : "transparent", // Light overlay on hover
    transition: "background-color 0.3s ease-in-out",
  };

  const buttonStyle = {
    color: "black",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    borderRadius: "5px",
    fontSize: "14px",
    marginTop: "10px",
    alignItems: "left",
    display: "inline-block",
    width: "auto",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={overlayStyle}>
        <h2>{title}</h2>
        <p>{auctions} Auctions</p>
        <button style={buttonStyle}>VIEW MORE</button>
      </div>
    </div>
  );
};

export default CategoryCard;

