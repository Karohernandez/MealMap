import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import './RecipePage.css';
import Sidebar from './Sidebar';
import Header from './Header';

const fetchRecipeById = async (id) => {
  // REPLACE WITH ACTUAL DATA. ID passed in will be found to see if it matches one of the recipe ID. This is how data will be displayed
  const recipes = {
    "1": { name: "Pancakes", ingredients: ["1 egg", "1 1/4 cup of milk", "1 1/2 cup of flour", "3 1/2 tbsp baking soda", "3 tbsp butter", "1 tbsp white sugar"] },
    "2": { name: "Breakfast Tacos", ingredients: ["4 large eggs", "2 green onions", "1 tbsp olive oil", "1/2 cup shredded cheese", "1/2 avocado", "4 tortillas"] },
    "3": {name: "Yogurt Bowl", ingredients: ["1 cup greek yogurt", "3 strawberries", "1/4 cup granola"]}
  };

  return recipes[id]; 
};

const fetchReplacementById = async (id) => {
  // REPLACE WITH ACTUAL DATA
  const replacements = {
    "1": { item: "Pancakes", replacements: ["Replacement 1", "Replacement 2"] },
    "2": { item: "Breakfast Tacos", replacements: ["Replacement 1", "Replacement 2"] },
    "3": { item: "Yogurt Bowl", replacements: ["Replacement 1", "Replacement 2"] }
  };
  return replacements[id]; 
};

const RecipePage = () => {

  const { recipeId } = useParams();
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [replacementDetails, setReplacementDetails] = useState(null);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [selectedReplacements, setSelectedReplacements] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  useEffect(() => {
    const getRecipeDetails = async () => {
      const details = await fetchRecipeById(recipeId);
      setRecipeDetails(details);
      setSelectedIngredients(details.ingredients.map(() => false));
    };
    getRecipeDetails();
  }, [recipeId]);

  useEffect(() => {
    const getReplacementDetails = async () => {
      const details = await fetchReplacementById(recipeId);
      setReplacementDetails(details);
      setSelectedReplacements(details.replacements.map(() => false));
    };
   getReplacementDetails();
  }, [recipeId]);


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleIngredientCheck = (index) => {
    setSelectedIngredients(selectedIngredients.map((checked, i) => i === index ? !checked : checked));
  };

  const handleReplacementCheck = (index) => {
    setSelectedReplacements(selectedReplacements.map((checked, i) => i === index ? !checked : checked));
  };

  const handleSubmit = () => {
    const checkedIngredients = recipeDetails.ingredients.filter((_, index) => selectedIngredients[index]);
    

    // instead of adding to local storage, redirect to new page and select grocery list - done by Payson
  };

  if (!recipeDetails) return <div>Loading recipe details...</div>;


  return (

    <div className='recipe-mealmap-container'> 
      <Header />

      <div className="tab-recipe"><span className="tab-info-title">Recipe Info</span></div>

      <div className='recipe-content'>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        <main className={`recipe-main-content ${isSidebarOpen ? 'with-sidebar' : ''}`}>

          <div className='ingredients'>
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
          </div>



            <div className="alternatives">
              <div className="single-alternative-name"><b>Replacements</b></div>

              <div className='recipe-alternatives-title'>
                  <span className='alternative-title'><b>Alternative Ingredients: </b></span>
              </div>

              <ul className="replacements-list">
                {replacementDetails.replacements.map((replacement, index) => (
                <li key={index}>
                  <input
                    type="checkbox"
                    id={`replacement-${index}`}
                    checked={selectedReplacements[index]}
                    onChange={() => handleReplacementCheck(index)}
                  />
                  <label className="replacement" htmlFor={`replacement-${index}`}>{replacement}</label>

                </li>
              ))}
              </ul>
            </div>
            
          </main>

          </div>

          <div className="add-ingredients">
            <Link className="" to="/select-list-page"><button className="text-black bg-gradient-to-r from-theme-green-light via-theme-green-DEFAULT to-theme-green-dark hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-theme-green-light dark:focus:ring-theme-green-dark font-bold rounded-lg text-base px-2 py-3 mx-9 text-center" onClick={handleSubmit}>Add To Shopping List</button></Link>
            <button className="text-black bg-gradient-to-r from-theme-green-light via-theme-green-DEFAULT to-theme-green-dark hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-theme-green-light dark:focus:ring-theme-green-dark font-bold rounded-lg text-base px-10 py-3 mx-9 text-center">Edit Recipe</button>

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