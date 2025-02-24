import React from "react";
import { useWishlist } from "./WishlistContext"; // Importing wishlist context
import { ProductCard } from "./FeaturedProducts"; 

const WishlistPage = () => {
  const { wishlist, toggleWishlist } = useWishlist(); // Accessing wishlist and toggleWishlist from context

  console.log(wishlist); // Debugging: Log wishlist data to check if it's correct

  return (
    <div className="wishlist-container">
      <h2>My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map((item) => (
            <ProductCard 
              key={item.id} 
              item={item} 
              toggleWishlist={toggleWishlist} // Pass toggleWishlist function to ProductCard
            />
          ))}
        </div>
      )}
    </div>
  );
};


export default WishlistPage;
