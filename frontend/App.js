import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './MainPage';

import AddRecipe from './AddRecipe';
import RecipePage from './RecipePage'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/second-page" element={<AddRecipe />} />
        <Route path="/user-recipe-page/:recipeId" element={<RecipePage />} /> 
        {/* ...other routes */}
      </Routes>
    </Router>
  );
}

export default App;
