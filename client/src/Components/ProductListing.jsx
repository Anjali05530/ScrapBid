import React, { useState } from "react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Product A", price: 100, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Product B", price: 150, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Product C", price: 200, image: "https://via.placeholder.com/150" },
];

const ProductListing = () => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const toggleWishlist = (id) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  const addToCart = (id) => {
    if (!cart.includes(id)) setCart([...cart, id]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product Listing</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", textAlign: "center" }}>
            <img src={product.image} alt={product.name} style={{ width: "100px" }} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => toggleWishlist(product.id)} style={{ marginRight: "10px" }}>
              {wishlist.includes(product.id) ? "❤️ Wishlisted" : "🤍 Add to Wishlist"}
            </button>
            <button onClick={() => addToCart(product.id)}>🛒 Add to Cart</button>
            <br /><br />
            <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "blue" }}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
