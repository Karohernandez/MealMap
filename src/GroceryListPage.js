import React, { useState, useEffect } from 'react';
import './GroceryListPage.css'; // Ensure you have the CSS file

const GroceryListPage = () => {
  const [groceryItems, setGroceryItems] = useState([]);

  useEffect(() => {
    const fetchGroceryList = async () => {
      try {
        const response = await fetch('https://mealmap1.azurewebsites.net/api/recipe/grocerylist');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setGroceryItems(data);
      } catch (error) {
        console.error("Failed to fetch grocery list:", error);
      }
    };

    fetchGroceryList();
  }, []);

  return (
    <div className="grocery-list-container">
      <h1>Grocery List</h1>
      <div className="grocery-items">
        {groceryItems.map((item, index) => (
          <div key={index} className="grocery-item">
            <span className="ingredient-name">{item.Name}</span>
            <span className="quantity-unit">{`${item.Quantity} ${item.Unit}`}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroceryListPage;
