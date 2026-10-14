import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">ShopSmart-AI</Link>

      <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
}

export default Navbar;
