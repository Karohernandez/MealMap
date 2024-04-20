import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import MainPage from './MainPage';
import RecipePage from './RecipePage';
import AddRecipe from './AddRecipe';
import EditRecipe from './EditRecipe';
import GroceryListPage from './GroceryListPage';
import About from './About';
import LoginPage from './LoginPage';
import AllGroceryLists from './AllGroceryLists';
import SelectListPage from './SelectListPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route path="/" element={<MainPage />} />
        <Route path="/add-recipe-page" element={<AddRecipe />} />
        <Route path="/user-recipe-page/:recipeId" element={<RecipePage />} /> 
        <Route path="/edit-recipe-page" element={<EditRecipe />} />
        <Route path="/all-grocery-list-page" element={<AllGroceryLists/>} />
        <Route path="/grocery-list-page/:listId" element={<GroceryListPage/>} />
        <Route path="/select-list-page/:selectedIngredients" element={<SelectListPage/>} />
        <Route path="/about-page" element={<About/>} />

      </Routes>
    </Router>
  );
}

export default App;
