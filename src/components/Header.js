import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector
import './Header.css'; // You'll create this CSS file

function Header() {
  const totalItems = useSelector((state) => state.cart.totalItems); // Get totalItems from Redux state

  return (
    <header className="header">
      <Link to="/products" className="logo">My Houseplant Store</Link>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart">
          <span role="img" aria-label="shopping-cart">🛒</span> ({totalItems})
        </Link>
      </nav>
    </header>
  );
}

export default Header;