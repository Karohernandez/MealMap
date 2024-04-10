import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import './GroceryListPage.css';
import Sidebar from './Sidebar';
import Header from './Header';


const fetchListById = async (id) => {
  const lists = {
    "1": { name: "Grocery List 1", items: ["1 egg", "1 1/4 cup of milk", "1 1/2 cup of flour", "3 1/2 tbsp baking soda", "3 tbsp butter", "1 tbsp white sugar"] },
    "2": { name: "Grocery List 2", items: ["4 large eggs", "2 green onions", "1 tbsp olive oil", "1/2 cup shredded cheese", "1/2 avocado", "4 tortillas"] },
    "3": {name: "Grocery List 3", items: ["1 cup greek yogurt", "3 strawberries", "1/4 cup granola"]}
  };

  return lists[id]; 
};


const GroceryListPage = () => {
  const { listId } = useParams();
  const [listDetails, setListDetails] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const getListDetails = async () => {
      const details = await fetchListById(listId);
      setListDetails(details);
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

      <div className="tab-list"><span className="tab-list-title">Recipe Info</span></div>

      <div className='list-content'>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        <main className={`list-main-content ${isSidebarOpen ? 'with-sidebar' : ''}`}>

          <div className='items'>
            <div className="single-list-name"><b>{listDetails.name}</b></div>

            <div className='grocery-items-title'>
              <span className='items-title'><b>Items: </b></span>
            </div>

            <ul className="items-list"> 
            {listDetails.items.map((item, index) => (
              <li key={index}>
                <label className="single-item" htmlFor={`single-item-${index}`}>{item}</label>
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