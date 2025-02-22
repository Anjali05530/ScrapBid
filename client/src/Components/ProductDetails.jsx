import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

const products = [
  { id: 1, name: "Product A", price: 100, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Product B", price: 150, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Product C", price: 200, image: "https://via.placeholder.com/150" },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [bid, setBid] = useState(0);

  if (!product) return <h2>Product not found</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ width: "200px" }} />
      <p>Price: ${product.price}</p>
      <p>Highest Bid: ${bid}</p>
      <input
        type="number"
        placeholder="Enter bid"
        onChange={(e) => setBid(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <button onClick={() => alert("Bid placed!")}>Place Bid</button>
      <br /><br />
      <Link to="/ProductListing" style={{ textDecoration: "none", color: "blue" }}>Back to Listing</Link>
    </div>
  );
};

export default ProductDetails;
