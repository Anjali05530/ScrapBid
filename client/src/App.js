// import React from "react";
// import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
// import Login from "./Components/Login";
// import Register from "./Components/Register";
// import Slogan from "./Components/Slogan";
// import Footer from "./Components/Footer";
// import HowItWorks from "./Components/Howitworks";
// import Navbar from "./Components/Navbar";
// import Header from "./Components/Header";
// import CategoryGrid from "./Components/CategoryGrid";
// import NewsletterPage from "./Components/NewsletterPage";
// import Myaccount from "./Components/Myaccount";
// import { AuctionsSection, CategoryPage } from "./Components/FeaturedProducts"; 
// import ConsumerElectronicsPage from "./Components/ConsumerElectronicsPage";
// import KitchenAppliancesPage from "./Components/KitchenAppliancesPage";
// import WishlistPage from "./Components/WishlistPage";
// import { WishlistProvider } from "./Components/WishlistContext";
// import PowerEnergyDevicesPage from "./Components/PowerEnergyDevicesPage";
// import GamingEntertainment from "./Components/GamingEntertainment";
// import AuctionListing from "./Components/AuctionListing";

// const Layout = () => {
//   const location = useLocation();
//   const isHomePage=location.pathname==="/";

//   return (
//     <div style={{top:isHomePage ? "40px" : "0"}}>
//       {isHomePage && <Header />}
//       <Navbar isHomePage={isHomePage}/>

//       <Routes>
//         <Route path="/Login" element={<Login />} />
//         <Route path="/Myaccount" element={<Myaccount />} />
//         <Route path="/Register" element={<Register />} />
//         <Route path="/AuctionsSection" element={<AuctionsSection hideHeader={true}  />} />
//         <Route path="/category/:category" element={<CategoryPage />} />
//         <Route path="/category/Consumer%20Electronics" element={<ConsumerElectronicsPage />} />
//         <Route path="/category/KitchenAppliances" element={<KitchenAppliancesPage />} />
//         <Route path="/category/PowerEnergyDevicesPage" element={<PowerEnergyDevicesPage/>} />
//         <Route path="/category/GamingEntertainment" element={<GamingEntertainment/>} />
//         <Route path="/wishlist" element={<WishlistPage/>} />
//         <Route
//           path="/"
//           element={
//             <div style={{height: "100vh", scrollBehavior: "smooth"}}>
//               <div className="section">
//                 <Slogan />
//               </div>
//               <div className="section">
//                 <HowItWorks />
//               </div>
//               <div className="section">
//                 <AuctionsSection/>
//               </div>
//               <div className="section">
//                 <CategoryGrid />
//               </div>
//               <div className="section">
//                 <AuctionListing />
//               </div>
//               <div className="section">
//                 <NewsletterPage />
//               </div>
//               <div className="section">
//                 <Footer />
//               </div>
//             </div>
//           }
//         />
//       </Routes>
//     </div>
//   );
// };

// function App() {
//   return (
//     <WishlistProvider>
//     <Router>
//       <Layout />
//     </Router>
//     </WishlistProvider>
//   );
// }

// export default App;



import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Slogan from "./Components/Slogan";
import Footer from "./Components/Footer";
import HowItWorks from "./Components/Howitworks";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import CategoryGrid from "./Components/CategoryGrid";
import NewsletterPage from "./Components/NewsletterPage";
import Myaccount from "./Components/Myaccount";
import { AuctionsSection, CategoryPage } from "./Components/FeaturedProducts"; 
import ConsumerElectronicsPage from "./Components/ConsumerElectronicsPage";
import KitchenAppliancesPage from "./Components/KitchenAppliancesPage";
import WishlistPage from "./Components/WishlistPage";
import { WishlistProvider } from "./Components/WishlistContext";
import PowerEnergyDevicesPage from "./Components/PowerEnergyDevicesPage";
import GamingEntertainment from "./Components/GamingEntertainment";
import AuctionListing from "./Components/AuctionListing";

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isProductPage = location.pathname === "/AuctionsSection";

  const auctionSectionStyle = {
    textAlign: "center",
    paddingTop: isHomePage ? "50px" : isProductPage ? "550px" : "0px",
  };

  return (
    <div style={{ top: isHomePage ? "40px" : "0" }}>
      {isHomePage && <Header />}
      <Navbar isHomePage={isHomePage} />

      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Myaccount" element={<Myaccount />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/AuctionsSection" element={<div style={auctionSectionStyle}><AuctionsSection hideHeader={true} /></div>} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/category/Consumer%20Electronics" element={<ConsumerElectronicsPage />} />
        <Route path="/category/KitchenAppliances" element={<KitchenAppliancesPage />} />
        <Route path="/category/PowerEnergyDevicesPage" element={<PowerEnergyDevicesPage />} />
        <Route path="/category/GamingEntertainment" element={<GamingEntertainment />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route
          path="/"
          element={
            <div style={{ height: "100vh", scrollBehavior: "smooth" }}>
              <div className="section">
                <Slogan />
              </div>
              <div className="section">
                <HowItWorks />
              </div>
              <div className="section" style={auctionSectionStyle}>
                <AuctionsSection />
              </div>
              <div className="section">
                <CategoryGrid />
              </div>
              <div className="section">
                <AuctionListing />
              </div>
              <div className="section">
                <NewsletterPage />
              </div>
              <div className="section">
                <Footer />
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <WishlistProvider>
      <Router>
        <Layout />
      </Router>
    </WishlistProvider>
  );
}

export default App;
