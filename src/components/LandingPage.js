import React from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/products'); // This will navigate to the /products route
  };

  return (
    <div className="landing-page">
      <h1>Welcome to Our Houseplant Store</h1>
      <p>Discover a wide selection of beautiful and healthy houseplants to bring life and greenery to your home.</p>
      <button onClick={handleGetStartedClick}>Get Started</button> {/* Attach the click handler to the button */}
    </div>
  );
}

export default LandingPage;