import { useState } from "react";

function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="product-card">
      <div className="product-image">{product.emoji}</div>

      <h3>{product.name}</h3>
      <p>{product.category}</p>

      <strong>₹{product.price}</strong>
      <button onClick={() => setLiked(!liked)}>{liked ? "❤️" : "♡"}</button>

      <div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
