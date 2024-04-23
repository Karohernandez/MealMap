import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useState} from 'react';

import Sidebar from './Sidebar';
import Header from './Header';
import './AllGroceryLists.css'


const AllGroceryLists = () => {
  const [groceryList, setGroceryList] = useState({ Planned: [], Completed: [] });
  const [activeTab, setActiveTab] = useState('Planned'); 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const response = await fetch('https://mealmap1.azurewebsites.net/api/recipe');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setGroceryList(data); // Expecting data to be an object with Planned and Completed lists
      } catch (error) {
        console.error('Error fetching lists:', error);
        // Handle the error accordingly
      }
    };

    fetchLists();
  }, []);

  

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // grab the saved ingredients from the database and display here. Will have example ingredients


  return (
    <div className='grocery-mealmap-container'>
      <Header />

      <div className='grocery-lists-content'>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        <main className={`grocery-lists-main-content ${isSidebarOpen ? 'with-sidebar' : ''}`}>

        <div className='all-lists-title'><b>All Grocery Lists</b></div>


        <div className="tabs-grocery-lists">
          {Object.keys(groceryList).map((category) => (
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
          {groceryList[activeTab].map((grocerylist) => (
              <div key={grocerylist.id} className="list-card">
                <div className='grocery-list-image'></div>
                <div className='bottom-list-label'>
                <input
                  type="checkbox"
                  id={`grocery-list-${grocerylist.id}`}
                  name={`grocery-list-${grocerylist.id}`}
                  checked={grocerylist.selected}
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