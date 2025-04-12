import React, { useState } from 'react'; // Import useState
import plants from '../data/plants';
import './ProductListingPage.css';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

function ProductListingPage() {
  const dispatch = useDispatch();
  const [disabledButtons, setDisabledButtons] = useState({}); // State to track disabled buttons

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setDisabledButtons(prev => ({ ...prev, [plant.id]: true })); // Disable the button for this plant
  };

  const plantsByCategory = plants.reduce((acc, plant) => {
    if (!acc[plant.category]) {
      acc[plant.category] = [];
    }
    acc[plant.category].push(plant);
    return acc;
  }, {});

  return (
    <div>
      <h2>Our Beautiful Houseplants</h2>
      {Object.keys(plantsByCategory).map(category => (
        <div key={category}>
          <h3>{category}</h3>
          <div className="plant-list">
            {plantsByCategory[category].map(plant => (
              <div key={plant.id} className="plant-card">
                <img src={plant.thumbnail} alt={plant.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                <h3>{plant.name}</h3>
                <p>${plant.price.toFixed(2)}</p>
                <button
                  onClick={() => handleAddToCart(plant)}
                  disabled={disabledButtons[plant.id]} // Disable based on state
                >
                  {disabledButtons[plant.id] ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductListingPage;