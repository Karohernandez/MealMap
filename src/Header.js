import React from 'react';
import './Header.css';


const Header = () => {
  return (
    <nav className="flex justify-between items-center text-gray-900 py-11 px-5 w-[100%] relative">
      <div className="font-serif text-3xl ml-20 font-bold">MealMap</div>
      
      <div className='flex justify-between items-center'>
        <div className="user-logo"></div>
        <div className="font-sans text-lg mr-10 px-9">User</div>

      </div>
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-500 mx-20"></div>
  </nav>

  );
};

export default Header;