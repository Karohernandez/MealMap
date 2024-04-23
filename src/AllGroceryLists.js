import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useState} from 'react';

import Sidebar from './Sidebar';
import Header from './Header';
import './AllGroceryLists.css'
import BottomNavbar from './BottomNav';

import groceryIcon from './images/Grocery.png'; 



const AllGroceryLists = () => {
  const [groceryList, setGroceryList] = useState([]);
  const [activeTab, setActiveTab] = useState('Planned'); 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const groceryIcons = {
    Planned: groceryIcon,
    Completed: groceryIcon,
  };

  const groceryLists = {
    Planned: [
      {id: 1, name: 'Grocery List 1', date: '5/1/24'},
      {id: 2, name: 'Grocery List 2', date: '5/5/24'},
      {id: 3, name: 'Grocery List 3', date: '4/13/24'},
    ],

    Completed: [
      {id: 4, name: 'Grocery List 4', date: '3/1/24'},
      {id: 5, name: 'Grocery List 5', date: '3/15/24'}
    ]
  }

  

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // grab the saved ingredients from the database and display here. Will have example ingredients

  const toggleListSelection = (category, id) => {
    
    const updatedLists = { ...groceryLists };
    const listIndex = updatedLists[category].findIndex(list => list.id === id);
    if (listIndex !== -1) {
      updatedLists[category][listIndex].selected = !updatedLists[category][listIndex].selected;
    }
    
 
  };

  const deleteList = (id) => {

  }


  return (
    <div className='grocery-mealmap-container'>
      <Header />

      <div className='grocery-lists-content'>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        <main className={`grocery-lists-main-content ${isSidebarOpen ? 'with-sidebar' : ''}`}>

        <div className='all-lists-title'><b>All Grocery Lists</b></div>


        <div className="tabs-grocery-lists">
          {Object.keys(groceryLists).map((category) => (
            <button
              key={category}
              className={`tab-grocery-lists ${activeTab === category ? 'active' : ''}`}
              onClick={() => setActiveTab(category)}
            >
              <b>{category}</b>
            </button>
          ))}
        </div>

        <div className='instruction-text'>
          <span className='view-recipe-title'><b>Click Grocery List to View</b></span>
          <div className='mark-list-complete'><Link><button className="text-white bg-gradient-to-r from-theme-green-light via-theme-green-DEFAULT to-theme-green-dark hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-theme-green-light dark:focus:ring-theme-green-dark font-bold rounded-lg text-base px-5 py-3 text-center">Mark List as Complete</button></Link></div>

        </div>


        <section className="lists-cards">
          {groceryLists[activeTab].map((grocerylist) => (
              <div key={grocerylist.id} className="list-card">
                <div className='grocery-list-image' style={{ backgroundImage: `url(${groceryIcons[activeTab]})` }}></div>
                <div className='bottom-list-label'>
                <input
                  type="checkbox"
                  id={`grocery-list-${grocerylist.id}`}
                  name={`grocery-list-${grocerylist.id}`}
                  checked={grocerylist.selected}
                  onChange={() => toggleListSelection(activeTab, grocerylist.id)}
                />
                <label htmlFor={`lists-${grocerylist.id}`}>
                  
                  <Link to={`/grocery-list-page/${grocerylist.id}`} style={{ textDecoration: 'none' }}>
                    <span className="grocery-list-name">{grocerylist.name}</span>
                  </Link>

                  <button className='delete-grocery-list' onClick = {deleteList(groceryList.id)}></button>
                  <span class="delete-tooltiptext">Delete List</span>
                </label>
                </div>
            </div>
          ))}
        </section>

        </main>
      </div>
      <BottomNavbar/>
  </div>
  )
}

export default AllGroceryLists;