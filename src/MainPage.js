import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';
import Sidebar from './Sidebar';
import Header from './Header';

const MainPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Breakfast'); 

  // EXAMPLE DATA

  // API CALLS: Retrieve name of recipes from db and store in these arrays. That is how they will be displayed, the name ID be passed in to the recipe page
  // ideally make an ID in db that goes with recipe 
  const recipes = { 
    Breakfast: [
      { id: 1, name: 'Pancakes' },
      { id: 2, name: 'Breakfast Tacos'},
      { id: 3, name: 'Yogurt Bowl' },
      { id: 4, name: 'Waffles' },
      { id: 5, name: 'Omelette'},
      { id: 6, name: 'Eggs & Chorizo'},
    ],
    Lunch: [
      { id: 7, name: 'Turkey Sandwich'},
      { id: 8, name: 'Ceaser Salad' },
      { id: 9, name: 'Homemade Pizza' },
    ],

    Dinner: [
      { id: 10, name: 'Spaghetti' },
      { id: 11, name: 'Fish Tacos' },
    ],

    Snack: [
      { id: 12, name: 'Icecream' },
      { id: 13, name: 'Yogurt' },
    ]
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleRecipeSelection = (category, id) => {
    
    const updatedRecipes = { ...recipes };
    const recipeIndex = updatedRecipes[category].findIndex(recipe => recipe.id === id);
    if (recipeIndex !== -1) {
      updatedRecipes[category][recipeIndex].selected = !updatedRecipes[category][recipeIndex].selected;
    }
  };

  const deleteRecipe = (id) => {

  }

  return (
    <div className="mealmap-container">

      <Header/>

      <div className='content'>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />


      <main className={`main-content ${isSidebarOpen ? 'with-sidebar' : ''}`}>
        <div className='all-recipes-title'><b>All Recipes</b></div>

        <div className="tabs">
          {Object.keys(recipes).map((category) => (
            <button
              key={category}
              className={`tab ${activeTab === category ? 'active' : ''}`}
              onClick={() => setActiveTab(category)}
            >
              <b>{category}</b>
            </button>
          ))}
        </div>

        <div className='instruction-text'>
          <span className='view-recipe-title'><b>Click Recipe to View</b></span>
          <div className='add-recipe-to-list'><Link className="" to="/select-list-page"><button className="text-white bg-gradient-to-r from-theme-green-light via-theme-green-DEFAULT to-theme-green-dark hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-theme-green-light dark:focus:ring-theme-green-dark font-bold rounded-lg text-base px-5 py-3 text-center">Add to Grocery List</button></Link></div>
        </div>

        <section className="recipe-cards">
          {recipes[activeTab].map((recipe) => (
              <div key={recipe.id} className="card">
                <div className='recipe-image'></div>
                <div className='bottom-label'>
                <input
                  type="checkbox"
                  id={`recipe-${recipe.id}`}
                  name={`recipe-${recipe.id}`}
                  checked={recipe.selected}
                  onChange={() => toggleRecipeSelection(activeTab, recipe.id)}
                />
                <label htmlFor={`recipe-${recipe.id}`}>
                  
                  <Link to={`/user-recipe-page/${recipe.id}`} style={{ textDecoration: 'none' }}>
                    <span className="recipe-name">{recipe.name}</span>
                  </Link>

                  <button className='delete-recipe' onClick = {deleteRecipe(recipe.id)}></button>
                  <span class="delete-tooltiptext">Delete Recipe</span>

                </label>
                </div>
            </div>
          ))}
        </section>
      </main>
      </div>
    </div>
  );
};

export default MainPage;


