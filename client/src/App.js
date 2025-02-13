import React from "react";
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

  return (
    <>
      {location.pathname === "/" && <Navbar />}

      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/ProductListing" element={<ProductListing />} />
        <Route path="/product/:id" element={<ProductDetails />} />

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
                <FeaturedProducts />
              </div>
              <div className="section">
                <Footer />
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
