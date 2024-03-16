import React from 'react';
import './MainPage.css';
import { useState } from 'react';

import Sidebar from './Sidebar';
//import { useNavigate } from 'react-router-dom';

const MainPage = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="mealmap-container">
      
      <nav className="app-header">
        <div className="header-title">MealMap</div>
        <div className="header-username">User</div>
      </nav>

    <div className='content'>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <main className={`main-content ${isSidebarOpen ? 'with-sidebar' : ''}`}>

        <div className='all-recipes-title'><b>All Recipes</b></div>
        
        <div className="tabs">
          <button className="tab"><b>Breakfast</b></button>
          <button className="tab"><b>Lunch</b></button>
          <button className="tab"><b>Dinner</b></button>
          <button className="tab"><b>Snack</b></button>
          <button className="tab"><b>Other</b></button>
        </div>

        <div className='instruction-text'>
          <span className='view-recipe-title'><b>Click Recipe to View!</b></span>
          <div className='small-card'>
            <div className="single-check-box"></div>
            <span className="add-instruction"><b>Check Below to Add Recipe</b></span> </div>
          
        </div>
        <section className="recipe-cards">
          {/* Map through your recipes and create a card for each one */}
          <div className="card">
            <div className="recipe-image-placeholder"></div>
            <span className="recipe-name">Recipe Name</span>
            {/* Placeholders for recipe images */}
          </div>
          <div className="card">
            <div className="recipe-image-placeholder"></div>
            <span className="recipe-name">Recipe Name</span>
            {/* Placeholders for recipe images */}
          </div>

          <div className="card">
            <div className="recipe-image-placeholder"></div>
            <span className="recipe-name">Recipe Name</span>
            {/* Placeholders for recipe images */}
          </div>

          
          {/* Repeat for each recipe */}
        </section>
      </main>
    </div>
      
    </div>
  );
};

export default MainPage;