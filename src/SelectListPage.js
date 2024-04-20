import React, { useState, useEffect } from 'react';
import './SelectListPage.css';
import Sidebar from './Sidebar';
import Header from './Header';
import BottomNavbar from './BottomNav';



const SelectListPage = ({ ingredientsToAdd }) => {
  const [shoppingLists, setShoppingLists] = useState([]);
  const [selectedList, setSelectedList] = useState('');
  const [newListName, setNewListName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch the existing shopping lists from the backend
    fetch('/api/all-grocery-list-page')
      .then(response => response.json())
      .then(data => setShoppingLists(data))
      .catch(error => console.error('Error:', error));
  }, []);

  const handleAddIngredients = () => {
    const listId = selectedList || newListName; // Use the selected list or the new list name
    const payload = { listId, ingredientsToAdd };

    fetch('/api/all-grocery-list-page', { // This URL will be your backend endpoint for adding ingredients to a list
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    .then(response => response.json())
    .then(data => {
      setMessage('Ingredients were added successfully!');
      // Here you could redirect or perform other actions as needed
    })
    .catch(error => {
      setMessage('Failed to add ingredients. Please try again.');
      console.error('Error:', error);
    });
  };

  const handleListSelection = (event) => {
    setSelectedList(event.target.value);
  };

  const handleNewListNameChange = (event) => {
    setNewListName(event.target.value);
  };

  return (
    <div className='select-list-mealmap-container'>
      <Header/>

      <div className="tab-select-list"><span className="tab-select-title">Select a Shopping List</span></div>

      <div className='select-list-content'>

        <Sidebar/>

        <main className='main-select-content'>

        <div className='select-lists'>
          <span>Existing Grocery Lists</span>
          {shoppingLists.map((list) => (
            <div key={list.id}>
              <input
                type="radio"
                id={list.id}
                name="shoppingList"
                value={list.id}
                onChange={handleListSelection}
                checked={selectedList === list.id}
              />
              <label htmlFor={list.id}>{list.name}</label>
            </div>
          ))}
        </div>

        <div className='new-lists'>
          <input
            type="radio"
            id="new-list"
            name="shoppingList"
            value="new"
            onChange={() => setSelectedList('new')}
            checked={selectedList === 'new'}
          />
          <label className="new-lists-name" htmlFor="new-list">Create New List</label>
          {selectedList === 'new' && (
            <input
              type="text"
              value={newListName}
              onChange={handleNewListNameChange}
              placeholder="Enter new list name"
            />
          )}
        </div>

        </main>

        <button className="add-to-list-button"onClick={handleAddIngredients}>Add Ingredients</button> {/*will redirect back to ingredient */}
        {message && <p>{message}</p>}
      </div>
      <BottomNavbar/>
    </div>
  );
};

export default SelectListPage;
