import React, { useEffect } from 'react';
import './RecipePage.css';
import { useState } from 'react';

import Sidebar from './Sidebar';
import { useParams } from 'react-router-dom';

const fetchRecipeById = async (id) => {
  // REPLACE WITH ACTUAL DATA
  const recipes = {
    "1": { name: "Omelette", ingredients: ["Ingredient 1", "Ingredient 2"] },
    "2": { name: "Breakfast Tacos", ingredients: ["Ingredient A", "Ingredient B"] },
    
  };
  return recipes[id]; 
};

const RecipePage = () => {

  const { recipeId } = useParams();
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  useEffect(() => {
    const getRecipeDetails = async () => {
      const details = await fetchRecipeById(recipeId);
      setRecipeDetails(details);
      setSelectedIngredients(details.ingredients.map(() => false));
    };
    getRecipeDetails();
  }, [recipeId]);


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleIngredientCheck = (index) => {
    setSelectedIngredients(selectedIngredients.map((checked, i) => i === index ? !checked : checked));
  };

  if (!recipeDetails) return <div>Loading recipe details...</div>;



  return (

    <div className='recipe-mealmap-container'> 
      <nav className="recipe-header">
        <div className="header-title">MealMap</div>
          <div className="recipe-username">User</div>
      </nav>

      <div className="tab-recipe"><span className="tab-info-title">Recipe Info</span></div>

      <div className='recipe-content'>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        <main className={`recipe-main-content ${isSidebarOpen ? 'with-sidebar' : ''}`}>
        <div className="single-recipe-name"><b>{recipeDetails.name}</b></div>

        <div className='recipe-ingredients-title'>
          <span className='ingredients-title'><b>Ingredients: </b></span>
        </div>

        <ul className="ingredients-list"> 
        {recipeDetails.ingredients.map((ingredient, index) => (
          <li key={index}>
            <input
              type="checkbox"
              id={`ingredient-${index}`}
              checked={selectedIngredients[index]}
              onChange={() => handleIngredientCheck(index)}
            />
            <label className="ingredient" htmlFor={`ingredient-${index}`}>{ingredient}</label>
          </li>
        ))}
        </ul>
      </main>

      </div>

      <div className="add-ingredients">
        <button className="add-ingredients-button">Add To Shopping List !</button>
        </div>

    </div>

  )
}

export default RecipePage;



/* THIS WILL HELP WITH RETRIEVING AND DISPLAYING DATA

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from './Sidebar'; // Ensure this import matches your file structure

// Function to simulate an API call to fetch recipe details by ID
const fetchRecipeById = async (id) => {
  try {
    const response = await fetch(`https://your-api.com/recipes/${id}`);
    if (!response.ok) {
      throw new Error('Recipe not found');
    }
    const data = await response.json();
    return data; // Assuming this is the recipe object
  } catch (error) {
    console.error("Failed to fetch recipe", error);
    return null; // Handle error appropriately in your app
  }
};

const RecipePage = () => {
  const { recipeId } = useParams();
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const getRecipeDetails = async () => {
      const details = await fetchRecipeById(recipeId);
      setRecipeDetails(details);
    };
    getRecipeDetails();
  }, [recipeId]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (!recipeDetails) return <div>Loading recipe details...</div>;

  return (
    <div className='recipe-mealmap-container'>
      
      <main className={`main-content ${isSidebarOpen ? 'with-sidebar' : ''}`}>
        <div><b>{recipeDetails.name}</b></div>
        <div className='recipe-tabs'>
          <span className='ingredients-title'><b>Ingredients:</b></span>
        </div>
        <ul>
          {recipeDetails.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default RecipePage;
*/