import React, { useState } from 'react';


import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='sidebar-background'>
      <button className="sidebar-button" onClick={toggleSidebar}></button>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <button className="sidebar-close-button" onClick={toggleSidebar}></button>
   
        <h1>MealMap</h1>
        <nav>
          
          <Link className="sidebar-link" to="/"><div className="sidebar-icon1"></div><b>All Recipes</b></Link>
          <Link className="sidebar-link" to="/add-recipe-page"><div className="sidebar-icon2"></div><b>Add Recipe</b></Link>
          <Link className="sidebar-link" to="/all-grocery-list-page"><div className="sidebar-icon3"></div><b>Grocery Lists</b></Link>
          <Link className="sidebar-link" to="/about-page"><div className="sidebar-icon4"></div><b>About</b></Link>
          <Link className="sidebar-link5" to="">Log Out</Link>

        </nav>
      </div>
    </div>
  );
};

export default Sidebar;