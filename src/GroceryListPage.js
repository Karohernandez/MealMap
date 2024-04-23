import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import './GroceryListPage.css';
import Sidebar from './Sidebar';
import Header from './Header';

const fetchListById = async (id) => {
  try {
    const response = await fetch(`https://mealmap1.azurewebsites.net/api/recipe`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching list', error);
    // Handle the error according to your application's needs
    return null;
  }
};



const GroceryListPage = () => {
  const { listId } = useParams();
  const [listDetails, setListDetails] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const getListDetails = async () => {
      const details = await fetchListById(listId);
      if (details) {
        setListDetails(details);
      }
      //setSelectedIngredients(details.ingredients.map(() => false));
    };
    getListDetails();
  }, [listId]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (!listDetails) return <div>Loading list details...</div>;

  return (
    <div className='list-mealmap-container'> 
      <Header />

      <div className="tab-list"><span className="tab-list-title">Grocery List Info</span></div>

      <div className='list-content'>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        <main className={`list-main-content ${isSidebarOpen ? 'with-sidebar' : ''}`}>

          <div className='items'>
            <div className="single-list-name"><b>{listDetails.name}</b></div>

            <div className='grocery-items-title'>
              <span className='items-title'><b>Items: </b></span>
            </div>

            <ul className="items-list"> 
            {listDetails.items.map((ingredient, index) => (
              <li key={index}>
                <label className="single-item">
                  {ingredient.Quantity} {ingredient.Unit} of {ingredient.Name}
                </label>
              </li>
            ))}
            </ul>
          </div> 
          </main>

      </div>
    </div>
  )
};

export default GroceryListPage;