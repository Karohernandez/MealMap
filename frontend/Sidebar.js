import React, { useState } from 'react';
import './Sidebar.css'; 

import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='sidebar-background'>
      <button className="sidebar-button" onClick={toggleSidebar}></button>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <button className="sidebar-close-button" onClick={toggleSidebar}>Close</button>
   
        <h1>MealMap</h1>
        <nav>
          {/*<a href="#all-recipes" className="sidebar-link"><b>All Recipes</b></a>
          <a href="#add-new-recipe" className="sidebar-link" onClick={handleNavigation}><b>Add New Recipe</b></a>
          <a href="#grocer-list" className="sidebar-link"><b>Grocery List</b></a>
          <a href="#find-ingredients" className="sidebar-link"><b>Find Ingredients</b></a>
          <a href="#log-out" className="sidebar-link5">Log Out</a>*/}

          <Link className="sidebar-link" to="/"><b>All Recipes</b></Link>
          <Link className="sidebar-link" to="/second-page"><b>Add New Recipe</b></Link>
          <Link className="sidebar-link" to="/"><b>Grocery List</b></Link>
          <Link className="sidebar-link" to="/"><b>Find Ingredients</b></Link>
          <Link className="sidebar-link5" to="/">Log Out</Link>

        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
