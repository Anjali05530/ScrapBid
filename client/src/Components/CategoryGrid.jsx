// import React from "react";
// import ConsumerElectronics from "./Assests/ConsumerElectronics.jpg";
// import Gaming from "./Assests/Gaming.jpg";
// import Home from "./Assests/Home.jpg";
// import Power from "./Assests/Power.jpg";

// const categories = [
//   {
//     title: "Computer and Networking",
//     auctions: 15,
//     image: ConsumerElectronics,
//   },
//   {
//     title: "Gadgets and Devices",
//     auctions: 15,
//     image: Gaming,
//   },
//   {
//     title: "HOME APPLIANCES",
//     auctions: 15,
//     image: Home,
//   },
//   {
//     title: "Electronic Components",
//     auctions: 15,
//     image: Power,
//   },
// ];

// const CategoryGrid = ({ layout = "grid" }) => {
//   if (layout === "column") {
//     return (
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           gap: "30px",
//           maxWidth: "1400px",
//           margin: "auto",
//         }}
//       >
//         {categories.map((category, index) => (
//           <div key={index} style={{ height: "300px", width: "100%" }}>
//             <CategoryCard category={category} />
//           </div>
//         ))}
//       </div>
//     );
//   } else {
//     return (
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "1fr 1fr",
//           gridTemplateRows: "auto auto",
//           gap: "20px",
//           padding: "16px",
//           maxWidth: "1350px",
//           margin: "auto",
//         }}
//       >
//         <div style={{ gridColumn: "1 / 2", gridRow: "1 / 2", height: "200px" }}>
//           <CategoryCard category={categories[0]} />
//         </div>
//         <div style={{ gridColumn: "2 / 3", gridRow: "1 / 3", height: "300px" }}>
//           <CategoryCard category={categories[1]} />
//         </div>
//         <div style={{ gridColumn: "1 / 2", gridRow: "2 / 4", height: "300px" }}>
//           <CategoryCard category={categories[2]} />
//         </div>
//         <div style={{ gridColumn: "2 / 3", gridRow: "3 / 4", height: "200px" }}>
//           <CategoryCard category={categories[3]} />
//         </div>
//       </div>
//     );
//   }
// };

// const CategoryCard = ({ category }) => {
//   return (
//     <div
//       style={{
//         position: "relative",
//         borderRadius: "12px",
//         overflow: "hidden",
//         width: "100%",
//         height: "100%",
//         transition: "transform 0.3s ease, box-shadow 0.3s ease",
//       }}
//       onMouseOver={(e) => {
//         e.currentTarget.style.transform = "scale(1.05)";
//         e.currentTarget.style.boxShadow = "0px 8px 20px rgba(0, 0, 0, 0.3)";
//       }}
//       onMouseOut={(e) => {
//         e.currentTarget.style.transform = "scale(1)";
//         e.currentTarget.style.boxShadow = "none";
//       }}
//     >
//       <img
//         src={category.image}
//         alt={category.title}
//         style={{ width: "100%", height: "100%", objectFit: "cover" }}
//       />
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           backgroundColor: "rgba(0, 0, 0, 0.5)",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "flex-start",
//           alignItems: "flex-start",
//           padding: "16px",
//         }}
//       >
//         <h2
//           style={{
//             color: "white",
//             fontSize: "24px",
//             fontWeight: "bold",
//             marginBottom: "4px",
//           }}
//         >
//           {category.title}
//         </h2>
//         <p style={{ color: "white", fontSize: "14px" }}>
//           {category.auctions} Auctions
//         </p>
//         <button
//           style={{
//             marginTop: "10px",
//             padding: "12px 16px",
//             width: "140px",
//             fontSize: "16px",
//             border: "1px solid white",
//             color: "white",
//             background: "transparent",
//             borderRadius: "30px",
//             cursor: "pointer",
//             transition: "all 0.3s",
//           }}
//           onMouseOver={(e) => {
//             e.target.style.background = "white";
//             e.target.style.color = "black";
//           }}
//           onMouseOut={(e) => {
//             e.target.style.background = "transparent";
//             e.target.style.color = "white";
//           }}
//         >
//           VIEW MORE
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CategoryGrid;


import React from "react";
import { useNavigate } from "react-router-dom";
import ConsumerElectronics from "./Assests/ConsumerElectronics.jpg";
import Gaming from "./Assests/Gaming.jpg";
import Home from "./Assests/Home.jpg";
import Power from "./Assests/Power.jpg";

const categories = [
  {
    title: "Consumer Electronics",
    auctions: 15,
    image: ConsumerElectronics,
  },
  {
    title: "Gaming Entertainment",
    auctions: 15,
    image: Gaming,
  },
  {
    title: "HOME APPLIANCES",
    auctions: 15,
    image: Home,
  },
  {
    title: "Power & Energy Devices",
    auctions: 15,
    image: Power,
  },
];

const CategoryGrid = ({ layout = "grid" }) => {
  if (layout === "column") {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "50px",
          maxWidth: "1400px",
          margin: "auto",
        }}
      >
        {categories.map((category, index) => (
          <div key={index} style={{ height: "300px", width: "100%" }}>
            <CategoryCard category={category} />
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "auto auto",
          gap: "10px",
          padding: "16px",
          maxWidth: "1250px",
          margin: "auto",
          marginTop:"80px",
        }}
      >
        <div style={{ gridColumn: "1 / 2", gridRow: "1 / 2", height: "250px" }}>
          <CategoryCard category={categories[0]} />
        </div>
        <div style={{ gridColumn: "2 / 3", gridRow: "1 / 3", height: "300px" }}>
          <CategoryCard category={categories[1]} />
        </div>
        <div style={{ gridColumn: "1 / 2", gridRow: "2 / 4", height: "300px" }}>
          <CategoryCard category={categories[2]} />
        </div>
        <div style={{ gridColumn: "2 / 3", gridRow: "3 / 4", height: "250px" }}>
          <CategoryCard category={categories[3]} />
        </div>
      </div>
    );
  }
};

const CategoryCard = ({ category }) => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate(`/category/${encodeURIComponent(category.title)}`);
  };

  return (
    <div
      style={{
        position: "relative",
        borderRadius: "12px",
        overflow: "hidden",
        width: "100%",
        height: "100%",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0px 8px 20px rgba(0, 0, 0, 0.3)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <img
        src={category.image}
        alt={category.title}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          padding: "16px",
        }}
      >
        <h2
          style={{
            color: "white",
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "4px",
          }}
        >
          {category.title}
        </h2>
        <p style={{ color: "white", fontSize: "14px" }}>
          {category.auctions} Auctions
        </p>
        <button
          style={{
            marginTop: "10px",
            padding: "12px 16px",
            width: "140px",
            fontSize: "16px",
            border: "1px solid white",
            color: "white",
            background: "transparent",
            borderRadius: "30px",
            cursor: "pointer",
            transition: "all 0.3s",
          }}
          onMouseOver={(e) => {
            e.target.style.background = "white";
            e.target.style.color = "black";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "transparent";
            e.target.style.color = "white";
          }}
          onClick={handleViewMore}
        >
          VIEW MORE
        </button>
      </div>
    </div>
  );
};

export default CategoryGrid;
