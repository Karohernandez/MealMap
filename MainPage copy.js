import React from 'react';
import './MainPage.css';

const MainPage = () => {
  return (
    <div className="mealmap-container">
      <aside className="sidebar">
        <h1>MealMap</h1>
        <nav>
          <a href="#all-recipes" className="sidebar-link"><b>All Recipes</b></a>
          <a href="#add-new-recipe" className="sidebar-link"><b>Add New Recipe</b></a>
          <a href="#grocery-list" className="sidebar-link"><b>Grocery List</b></a>
          <a href="#find-ingredients" className="sidebar-link"><b>Find Ingredients</b></a>
          <a href="#log-out" className="sidebar-link5">Log Out</a>
        </nav>
      </aside>
      <main className="main-content">
        <header className="header">
          <h2>Your Recipes</h2>
          <div className="user-info">
            <span className="username">Karo Hernandez</span>
          </div>
        </header>
        <div className="tabs">
          <button className="tab active"><b>Breakfast</b></button>
          <button className="tab"><b>Lunch</b></button>
          <button className="tab"><b>Dinner</b></button>
          <button className="tab"><b>Snack</b></button>
          <button className="tab"><b>Other</b></button>
          
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
  );
};

export default MainPage;
