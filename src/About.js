import React from "react";
import { useState } from 'react';

import Sidebar from "./Sidebar";
import Header from "./Header";
import BottomNavbar from './BottomNav';
import './About.css';

const About = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="about-container">
      <Header/>

      <div className="tab-link"><span className="tab-link-title">References</span></div>


      <div className="about-content">

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <main className="about-main-content">

        <div className="source-links">
          <span className="source-title"><b>Resouce Links: </b></span>

          <ul className="logo-list">
            <li className="logo-link"><a href="https://www.flaticon.com/free-icons/user" title="user icons">User icons created by Freepik - Flaticon</a> </li>
            <li className="logo-link"><a href="https://www.flaticon.com/free-icons/recipes" title="recipes icons">Recipes icons created by BomSymbols - Flaticon</a></li>
            <li className="logo-link"><a href="https://www.flaticon.com/free-icons/whisk" title="whisk icons">Whisk icons created by Freepik - Flaticon</a></li>
            <li className="logo-link"><a href="https://www.flaticon.com/free-icons/trolley-bag" title="trolley-bag icons">Trolley-bag icons created by ChepyF - Flaticon</a></li>
            <li className="logo-link"><a href="https://www.flaticon.com/free-icons/info" title="info icons">Info icons created by Freepik - Flaticon</a></li>
            <li className="logo-link"><a href="https://www.flaticon.com/free-icons/english-breakfast" title="english breakfast icons">English breakfast icons created by Freepik - Flaticon</a></li>
            <li className="logo-link"><a href="https://www.flaticon.com/free-icons/delete" title="delete icons">Delete icons created by bqlqn - Flaticon</a></li>
            <li className="logo-link"><a href="https://www.flaticon.com/free-icons/lunch" title="lunch icons">Lunch icons created by Linector - Flaticon</a></li>
            <li className="logo-link"><a href="https://www.flaticon.com/free-icons/food" title="food icons">Food icons created by Freepik - Flaticon</a></li>
            <li className="logo-link"><a href="https://www.flaticon.com/free-icons/snacks" title="snacks icons">Snacks icons created by photo3idea_studio - Flaticon</a></li>
            <li className="logo-link"><a href="https://www.flaticon.com/free-icons/grocery" title="grocery icons">Grocery icons created by pongsakornRed - Flaticon</a></li>
          </ul>

        </div>

      </main>

      </div>

      <BottomNavbar/>
    </div>

  )
}

export default About;