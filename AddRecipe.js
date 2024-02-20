import React from 'react';
import './AddRecipe.css';

const AddRecipe = () => {
  return (
    <div className="mealmap-container">
      <aside className="sidebar2">
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
        <div className="tabs2">
          <b className='enter-title'>Enter Recipe Info</b>
        </div>

        <section>
        <div class="input-container">
          <label for="text-input">Name:</label>
          <input type="text" id="text-input" name="text-input" placeholder="Enter Ingredient..."/>
        </div>

      <div class="input-container">
        <label for="text-input">Ingredient:</label>
        <input type="text" id="text-input" name="text-input" placeholder="Enter Ingredient..."/>
      </div>

      <div class="input-container">
        <label for="text-input">Ingredient:</label>
        <input type="text" id="text-input" name="text-input" placeholder="Enter Ingredient..."/>
      </div>
        </section>
        
      </main>
    </div>
  );
};

export default AddRecipe;
