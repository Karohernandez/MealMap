import React, { useState } from 'react';
import './AddRecipe.css';
import Sidebar from './Sidebar';
import Header from './Header';

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
  };

  const addRestriction = () => {
    if (!restrictions.includes(currentRestriction)) {
      setRestrictions([...restrictions, currentRestriction]);
    }
  };

  const submitRecipe = async (e) => {
    e.preventDefault();
    const recipeData = {
      name: recipeName,
      ingredients,
      restrictions,
      mealType
    };

    console.log(recipeData); // For debugging, can be removed later

    try {
      const response = await fetch('https://mealmap1.azurewebsites.net/api/recipe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipeData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Recipe added successfully:', result);

      // Clear the form fields after successful submission
      setRecipeName('');
      setIngredients([]);
      setRestrictions([]);
      setMealType('');
    } catch (error) {
      console.error('Error submitting recipe:', error);
    }
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
          <form id="recipe-inputs">
            <div className="input-container1 input-container">
              <label htmlFor="recipe-name-input">Recipe Name:</label>
              <input
                type="text"
                id="recipe-name-input"
                value={recipeName}
                onChange={(e) => setRecipeName(e.target.value)}
                placeholder="Enter Name..."
              />
            </div>

            <div className="input-container2 input-container">
              <label htmlFor="text-input-ingredient">Ingredient:</label>
              <input
                type="text"
                id="text-input-ingredient"
                value={currentIngredient}
                onChange={(e) => setCurrentIngredient(e.target.value)}
                placeholder="Enter Ingredient..."
              />

              <label htmlFor="number-quantity-input">Quantity:</label>
              <input
                type="text"
                id="number-quantity-input"
                value={currentQuantity}
                onChange={(e) => setCurrentQuantity(e.target.value)}
                placeholder="Enter Quantity..."
              />

              <select
                name="ingredient-units"
                id="ingredient-units"
                value={currentUnit}
                onChange={e => setCurrentUnit(e.target.value)}
              >
                <option value="tsp">Teaspoons (tsp)</option>
                <option value="tbsp">Tablespoons (tbsp)</option>
                <option value="cup">Cups</option>
                <option value="ml">Milliliters (ml)</option>
                <option value="l">Liters (l)</option>
                <option value="g">Grams (g)</option>
                <option value="kg">Kilograms (kg)</option>
                <option value="oz">Ounces (oz)</option>
                <option value="lb">Pounds (lb)</option>
                <option value="count">Count</option>
              </select>

              <button className="add-single-ingredient-button" onClick={addIngredient}>
                <b>Add Ingredient</b>
              </button>
            </div>

            <div className="input-container3 input-container">
              <label htmlFor="restriction-values">Restriction:</label>
              <select
                name="restrictions"
                id="food-restrictions"
                value={currentRestriction}
                onChange={e => setCurrentRestriction(e.target.value)}
              >
                <option value="vegetarian-r">Vegetarian</option>
                <option value="vegan-r">Vegan</option>
                <option value="kosher-r">Kosher</option>
                <option value="pescatarian-r">Pescatarian</option>
                <option value="gluten-r">Gluten Free</option>
                <option value="dairy-r">Dairy Free</option>
                <option value="sugar-r">Sugar Free</option>
                <option value="keto-r">Keto</option>
                <option value="other-r">Other</option>
              </select>

              <button className="add-single-restriction-button" onClick={addRestriction}>
                <b>Add Restriction</b>
              </button>
            </div>

            <div className="meal-buttons">
              <button className="breakfast-button meal-button" onClick={() => addToMealType('Breakfast')}>
                <b>Breakfast</b>
              </button>
              <button className="lunch-button meal-button" onClick={() => addToMealType('Lunch')}>
                <b>Lunch</b>
              </button>
              <button className="dinner-button meal-button" onClick={() => addToMealType('Dinner')}>
                <b>Dinner</b>
              </button>
              <button className="snack-button meal-button" onClick={() => addToMealType('Snack')}>
                <b>Snack</b>
              </button>
            </div>

            <div className="submit-button">
              <button type="submit" className="submit-recipe" onClick={submitRecipe}>
                <b>Add Recipe</b>
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default AddRecipe;
