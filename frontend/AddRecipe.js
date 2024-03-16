import React from 'react';
import './AddRecipe.css';
import Sidebar from './Sidebar';


import { useState } from 'react';


const AddRecipe = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="addrecipe-mealmap-container">
      
      <nav className="addrecipe-app-header">
        <div className="header-title">MealMap</div>
        <div className="header-username">User</div>
      </nav>

      <div className='addrecipe-content'>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        <main className={`addrecipe-main-content ${isSidebarOpen ? 'with-sidebar' : ''}`}>
          <div className="addrecipe-tabs">
            <b className='enter-title'>Enter Recipe Info</b>
          </div>

          <form id="recipe-inputs">
            <div class="input-container">
              <label for="text-input">Recipe Name:</label>
              <input type="text" id="text-input" name="text-input" placeholder="Enter Name..."/>
            </div>

            <div class="input-container" id="input-container-ingredient">
              <label for="text-input-ingredient">Ingredient:</label>
              <input type="text-ingredient" id="text-input" name="text-input" placeholder="Enter Ingredient..."/>

              <label for="text-input-ingredient">Quantity:</label>
              <input type="text-ingredient" id="text-input" name="text-input" placeholder="Enter Quantity..."/>

              <label for="text-input-ingredient">Quantity Amount:</label>
              <input type="text-ingredient" id="text-input" name="text-input" placeholder="Enter Quantity..."/>

              <button className="add-ingredient-button"><b>Add Ingredient</b></button>
            </div>

            <div class="input-container">
              <label for="text-input">Food Restrictions:</label>
              <input type="text" id="text-input" name="text-input" placeholder="Enter Info..."/>

              <button className="add-ingredient-button"><b>Add</b></button>

            </div>

            <div class="input-container">
              <label for="text-input">Dietary Needs:</label>
              <input type="text" id="text-input" name="text-input" placeholder="Enter Info..."/>

              <button className="add-ingredient-button"><b>Add</b></button>

            </div>
          </form>

          <div className="meal-buttons">
            <button className="meal-button"><b>Breakfast</b></button>
            <button className="meal-button"><b>Lunch</b></button>
            <button className="meal-button"><b>Dinner</b></button>
            <button className="meal-button"><b>Snack</b></button>
            <button className="meal-button"><b>Other</b></button> 
          </div>

          <div className="submit-button">
            <button className="submit-recipe"><b>Add!</b></button>
          </div>
          
        </main>
      </div>
    </div>
  );
};

export default AddRecipe;
