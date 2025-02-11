import React, { useRef, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Slogan from "./Components/Slogan";
import FeaturedProducts from "./Components/FeaturedProducts";
import Footer from "./Components/Footer";
import HowItWorks from "./Components/Howitworks";
import ProductDetails from "./Components/ProductDetails";
import ProductListing from "./Components/ProductListing";
import Navbar from "./Components/Navbar";

const Layout = () => {
  const location = useLocation();
  const howItWorksRef = useRef(null);
  const footerRef = useRef(null);
  const [showHowItWorks, setShowHowItWorks] = useState(true);
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (howItWorksRef.current && footerRef.current) {
        const howItWorksRect = howItWorksRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Show "How It Works" when it comes into view
        setShowHowItWorks(howItWorksRect.top < windowHeight * 0.85);
        
        // Show "Footer" as soon as "How It Works" scrolls out of view
        setShowFooter(howItWorksRect.bottom <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {location.pathname === "/" && <Navbar />}

      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/ProductListing" element={<ProductListing />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        <Route
          path="/Slogan"
          element={
            <div style={{ overflowY: "auto", height: "100vh", scrollBehavior: "smooth" }}>
              <div className="section">
                <Slogan />
              </div>
              <div className="section">
                <FeaturedProducts />
              </div>

              <div className="section" ref={howItWorksRef} style={{ height: "100vh" }}>
                {showHowItWorks && <HowItWorks />}
              </div>

              <div className="section" ref={footerRef} style={{ height: "100vh" }}>
                {showFooter && <Footer />}
              </div>
            </div>
          }
        />
      </Routes>
    </>
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
