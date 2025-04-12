import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ProductListingPage from './components/ProductListingPage';
import ShoppingCartPage from './components/ShoppingCartPage'; // We'll create this later
import Header from './components/Header'; // Import the Header

function App() {
  return (
    <div>
      <Header /> {/* Include the Header component */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/cart" element={<ShoppingCartPage />} /> {/* Route for the cart */}
      </Routes>
    </div>
  );
}

export default App;