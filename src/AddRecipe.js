import React from 'react';
import './AddRecipe.css';
import Sidebar from './Sidebar';
import Header from './Header';
import BottomNavbar from './BottomNav';


import { useState } from 'react';

const AddRecipe = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [currentIngredient, setCurrentIngredient] = useState('');
  const [currentQuantity, setCurrentQuantity] = useState('');
  const [currentUnit, setCurrentUnit] = useState('tsp');
  const [restrictions, setRestrictions] = useState([]);
  const [currentRestriction, setCurrentRestriction] = useState('vegan-r');
  const [mealType, setMealType] = useState('');


  const addIngredient = () => {
    setIngredients([...ingredients, { name: currentIngredient, quantity: currentQuantity, unit: currentUnit }]);
    setCurrentIngredient('');
    setCurrentQuantity('');
    setCurrentUnit('tbsp');

    return <div>Adding Ingredient....</div>
  };

  const addRestriction = () => {
    if (!restrictions.includes(currentRestriction)) {
      setRestrictions([...restrictions, currentRestriction]);
    }
  };

  const submitRecipe = (e) => {
    e.preventDefault();
    const recipeData = {
      name: recipeName,
      ingredients,
      restrictions,
      mealType
    };

    setRecipeName('');
    setCurrentIngredient('');
    setCurrentQuantity('');
    setCurrentUnit('tsp');
    console.log(recipeData);
    // ADD DATABASE CODE
  };

  const addToMealType = (type) => {
    setMealType(type);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <div className="addrecipe-mealmap-container">
      
      <Header />

      <div className='addrecipe-content'>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        <main className={`addrecipe-main-content ${isSidebarOpen ? 'with-sidebar' : ''}`}>
          <div className="addrecipe-tabs">
            <span className='enter-title'>Enter Recipe Info</span>
          </div>



          <form id="recipe-inputs">
            <div class="input-container1 input-container">
              <label htmlFor="recipe-name-input">Recipe Name:</label>
              <input type="text" id="recipe-name-input" value={recipeName} onChange={(e) => setRecipeName(e.target.value)} placeholder="Enter Name..."/>
            </div>



            <div class="input-container2 input-container" id="input-container-ingredient">
              <label htmlFor="text-input-ingredient">Ingredient:</label>
              <input type="text" id="text-input" name="ingredient-name-input" value={currentIngredient} onChange={(e) => setCurrentIngredient(e.target.value)} placeholder="Enter Ingredient..."/>

              <label htmlFor="text-input-ingredient">Quantity:</label>
              <input type="text-ingredient" id="text-input" name="number-quantity-input" value={currentQuantity} onChange={(e) => setCurrentQuantity(e.target.value)} placeholder="Enter Quantity..."/>

              
              <label htmlFor="number-quantity-input">Quantity:</label>
              <select name="ingredient-units" id="ingredient-units" value={currentUnit} onChange={e => setCurrentUnit(e.target.value)}>
                <option value="tsp">Teaspoons (tsp)</option>
                <option value="tbsp">Tablespoons (tbsp)</option>
                <option value="cup">Cups</option>
                <option value="ml">Milliliters (ml)</option>
                <option value="l">Liters (l)</option>
                <option value="g">Grams (g)</option>
                <option value="kg">Kilograms (kg)</option>
                <option value="oz">Ounces (oz)</option>
                <option value="lb">Pounds (lb)</option>
                <option value="lb">Count</option>

              </select>

              <button type="button" className="add-single-ingredient-button" onClick={addIngredient}><b>Add Ingredient</b></button>
            </div>



            <div class="input-container3 input-container">
              
              <label htmlFor="restriction-values">Restriction:</label>

              <select name="restrictions" id="food-restrictions" value={currentRestriction} onChange={e => setCurrentRestriction(e.target.value)}>
                <option value="vegetarian-r">Vegetarian</option>
                <option value="vegan-r">Vegan</option>
                <option value="kosher-r">Kosher</option>
                <option value="pescatarian-r">Pescatarian</option>
                <option value="gluten-r">Gluten Free</option>
                <option value="dairy-r">Dairy Free</option>
                <option value="sugar-r">Sugar Free</option>
                <option value="sugar-r">Keto</option>
                <option value="other-r">Other</option>
                
              </select>

              <button type="button" className="add-single-restriction-button" onClick={addRestriction}><b>Add Restriction</b></button>

            </div>
          </form>

          <div className="meal-buttons">
            <button className="breakfast-button meal-button" onClick={() => addToMealType('Breakfast')}><b>Breakfast</b></button>
            <button className="lunch-button meal-button" onClick={() => addToMealType('Lunch')}><b>Lunch</b></button>
            <button className="dinner-button meal-button" onClick={() => addToMealType('Dinner')}><b>Dinner</b></button>
            <button className="snack-button meal-button" onClick={() => addToMealType('Snack')}><b>Snack</b></button>
          </div>

          <div className="submit-button">
            <button type="submit" className="submit-recipe" onClick={submitRecipe}><b>Add Recipe</b></button>
          </div>
          
        </main>
      </div>
      <BottomNavbar/>
    </div>
  );
};

export default AddRecipe;