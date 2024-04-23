


import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import './AllGroceryLists.css';

const AllGroceryLists = () => {
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
    <div className="all-grocery-lists-page">
      <Sidebar isOpen={false} toggleSidebar={() => {}} />
      <div className="grocery-list-container">
        <h1>Grocery List Info</h1>
        <div className="grocery-list-card">
          <h2>                             Grocery List</h2>
          <h3>Items:</h3>
          <ul>
            {groceryItems.map((item, index) => (
              <li key={index} className="grocery-list-item">
                <span className="ingredient-name">{item.name}</span>
                <span className="quantity-unit">
                  {item.quantity ? `${item.quantity} ${item.unit}` : `Some ${item.unit}`}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AllGroceryLists;
