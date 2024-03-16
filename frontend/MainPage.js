import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';
import Sidebar from './Sidebar';

const MainPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Breakfast'); 

  // EXAMPLE DATA
  
  const recipes = { 
    Breakfast: [
      { id: 1, name: 'Pancakes', ingredients: ["2 eggs", "1/4 cup of milk", "1/2 cup of flour"] },
      { id: 2, name: 'Omelette', ingredients: []},
      { id: 1, name: 'Waffles', ingredients: [] },
      { id: 2, name: 'Breakfast Tacos', ingredients: []},
      { id: 1, name: 'Yogurt Bowl', ingredients: [] },
      { id: 2, name: 'Eggs & Chorizo', ingredients: []},
    
    ],
    Lunch: [
      { id: 1, name: 'Turkey Sandwich', ingredients: [] },
      { id: 2, name: 'Ceaser Salad', ingredients: [] },
      { id: 2, name: 'Homemade Pizza', ingredients: [] },
    
    ],

    Dinner: [
      { id: 1, name: 'Spaghetti & Meatballs', ingredients: [] },
      { id: 2, name: 'Fish Tacos', ingredients: [] },
     
    ],

    Snack: [
      { id: 1, name: 'Icecream', ingredients: [] },
      { id: 2, name: 'Yogurt', ingredients: [] },
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
          <span className='view-recipe-title'><b>Click Recipe to View!</b></span>
          <div className='small-card'>
            <div className="single-check-box"></div>
            <span className="add-instruction"><b>Check Below to Add Recipe</b></span> </div>
        </div>


        <section className="recipe-cards">
          {recipes[activeTab].map((recipe) => (
              <div key={recipe.id} className="card">
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
                </label>
            </div>
          ))}
        </section>
      </main>
      </div>
    </div>
  );
};

export default MainPage;



