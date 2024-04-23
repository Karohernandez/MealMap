

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './MainPage.css';
// import Sidebar from './Sidebar';
// import Header from './Header';

// const MainPage = () => {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//     const [activeTab, setActiveTab] = useState('Breakfast');
//     const [recipes, setRecipes] = useState([]);

//     // Fetch recipes when the component mounts or when activeTab changes
//     useEffect(() => {
//         const fetchRecipesByType = async () => {
//           const mealType = activeTab.toLowerCase(); // Ensure this is lowercase to match your working backend URL
//           const url = `https://mealmap1.azurewebsites.net/api/recipe/type/${mealType}`;
//             console.log(url);
//           try {
//             const response = await fetch(url);
//             if (!response.ok) {
//               throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             const data = await response.json();
//             setRecipes(data);
//           } catch (error) {
//             console.error("Failed to fetch recipes:", error);
//           }
//         };
      
//         fetchRecipesByType();
//       }, [activeTab]);
      

//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     };

//     const toggleRecipeSelection = (id) => {
//         const updatedRecipes = recipes.map((recipe) => {
//             if (recipe.id === id) {
//                 return { ...recipe, selected: !recipe.selected };
//             }
//             return recipe;
//         });
//         setRecipes(updatedRecipes);
//     };

//     const deleteRecipe = (id) => {
//         // Implement the delete logic here, possibly making an API call to delete a recipe
//         console.log('Deleting recipe with id:', id);
//         // Call to API would go here
//     };

//     return (
//         <div className="mealmap-container">
//             <Header />
//             <div className='content'>
//                 <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

//                 <main className={`main-content ${isSidebarOpen ? 'with-sidebar' : ''}`}>
//                     <div className='all-recipes-title'><b>All Recipes</b></div>

//                     <div className="tabs">
//                         {['Breakfast', 'Lunch', 'Dinner', 'Snack'].map((category) => (
//                             <button
//                                 key={category}
//                                 className={`tab ${activeTab === category ? 'active' : ''}`}
//                                 onClick={() => setActiveTab(category)}
//                             >
//                                 <b>{category}</b>
//                             </button>
//                         ))}
//                     </div>

//                     <section className="recipe-cards">
//                         {recipes.map((recipe) => (
//                             <div key={recipe.id} className="card">
//                                 <div className='recipe-image'>
//                                     {/* Placeholder for recipe image */}
//                                 </div>
//                                 <div className='bottom-label'>
//                                     <input
//                                         type="checkbox"
//                                         id={`recipe-${recipe.id}`}
//                                         name={`recipe-${recipe.id}`}
//                                         checked={recipe.selected || false}
//                                         onChange={() => toggleRecipeSelection(recipe.id)}
//                                     />
//                                     <label htmlFor={`recipe-${recipe.id}`}>
//                                         <Link to={`/user-recipe-page/${recipe.id}`} style={{ textDecoration: 'none' }}>
//                                             <span className="recipe-name">{recipe.name}</span>
//                                         </Link>
//                                         <button className='delete-recipe' onClick={() => deleteRecipe(recipe.id)}>X</button>
//                                         <span className="delete-tooltiptext">Delete Recipe</span>
//                                     </label>
//                                 </div>
//                             </div>
//                         ))}
//                     </section>
//                 </main>
//             </div>
//         </div>
//     );
// };

// export default MainPage;




import React, { useState, useEffect } from 'react';
import './MainPage.css';
import Sidebar from './Sidebar'; // Verify correct path
import Header from './Header'; // Verify correct path

const MainPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('Breakfast');
    const [recipes, setRecipes] = useState({ Breakfast: [], Lunch: [], Dinner: [], Snack: [] });
    const [openRecipeId, setOpenRecipeId] = useState(null);

    useEffect(() => {
        const fetchRecipesByType = async () => {
            try {
                const response = await fetch(`https://mealmap1.azurewebsites.net/api/recipe/type/${activeTab.toLowerCase()}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setRecipes(prev => ({ ...prev, [activeTab]: data })); // Safely updating only the relevant meal type
            } catch (error) {
                console.error("Failed to fetch recipes:", error);
            }
        };

        fetchRecipesByType();
    }, [activeTab]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleRecipeClick = (recipeId) => {
        setOpenRecipeId(openRecipeId === recipeId ? null : recipeId);
    };

    return (
        <div className="mealmap-container">
            <Header />
            <div className='content'>
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                <main className={`main-content ${isSidebarOpen ? 'with-sidebar' : ''}`}>
                    <div className='all-recipes-title'><b>All Recipes</b></div>
                    <div className="tabs">
                        {Object.keys(recipes).map((category) => (
                            <button
                                key={category}
                                className={`tab ${activeTab === category ? 'active' : ''}`}
                                onClick={() => setActiveTab(category)}
                            >
                                <b>{category}</b>
                            </button>
                        ))}
                    </div>
                    <section className="recipe-cards">
                        {recipes[activeTab]?.map((recipe) => (
                            <div
                                key={recipe.id}
                                className={`card ${openRecipeId === recipe.id ? 'active' : ''}`}
                                onClick={() => handleRecipeClick(recipe.id)}
                            >
                                <div className='recipe-image'>
                                    {/* Placeholder for recipe image */}
                                </div>
                                <div className='recipe-name'>{recipe.name}</div>
                                {openRecipeId === recipe.id && (
                                    <ul className="recipe-ingredients">
                                        {recipe.ingredients.map((ingredient, index) => (
                                            <li key={index}>
                                                {`${ingredient.name}: ${ingredient.quantity} ${ingredient.unit}`}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </section>
                </main>
            </div>
        </div>
    );
};

export default MainPage;