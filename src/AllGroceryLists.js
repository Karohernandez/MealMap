import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useState} from 'react';

import Sidebar from './Sidebar';
import Header from './Header';
import './AllGroceryLists.css'


const AllGroceryLists = () => {
  const [groceryList, setGroceryList] = useState([]);
  const [activeTab, setActiveTab] = useState('Planned'); 


  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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


        <section className="lists-cards">
          {groceryLists[activeTab].map((grocerylist) => (
              <div key={grocerylist.id} className="list-card">
                <div className='grocery-list-image'></div>
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
                </label>
                </div>
            </div>
          ))}
        </section>

        <div>
          <button className='delete-grocery-list'></button>
        </div>

        </main>
      </div>
  </div>
  )
}

export default AllGroceryLists;