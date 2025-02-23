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
import AuctionListing from "./Components/Auctionlisting";
import { AuctionsSection, CategoryPage } from "./Components/FeaturedProducts"; 
import ConsumerElectronicsPage from "./Components/ConsumerElectronicsPage";
import KitchenAppliancesPage from "./Components/KitchenAppliancesPage";
const Layout = () => {
  const location = useLocation();
  const isHomePage=location.pathname==="/";

  return (
    <div style={{top:isHomePage ? "40px" : "0"}}>
      {isHomePage && <Header />}
      <Navbar isHomePage={isHomePage}/>

      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Myaccount" element={<Myaccount />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/AuctionsSection" element={<AuctionsSection hideHeader={true}  />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/category/Consumer%20Electronics" element={<ConsumerElectronicsPage />} />
        <Route path="/category/KitchenAppliances" element={<KitchenAppliancesPage />} />

        <Route
          path="/"
          element={
            <div style={{height: "100vh", scrollBehavior: "smooth"}}>
              <div className="section">
                <Slogan />
              </div>
              <div className="section">
                <HowItWorks />
              </div>
              <div className="section">
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
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
