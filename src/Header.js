import React from 'react';
import './Header.css';


const Header = () => {
  return (
    <nav className="flex justify-between items-center text-gray-900 py-11 px-5 w-[100%] relative">
      <div className="meal-map-header">MealMap</div>
      
      <div className='flex justify-between items-center'>
        <div className="user-logo"></div>
        <div className="user-name">Johnny</div>

      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-black mx-20" style={{ height: '1px' }}></div>
  </nav>

  );
};

export default Header;