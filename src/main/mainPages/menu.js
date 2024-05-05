import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import LogoutButton from '../authPages/Logout_btn.js';
import Switcher from "./darkmode.js";
import { Link } from 'react-router-dom';

export default function AccountMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <button
        className="relative z-10 p-2 rounded-md shadow-sm"
        onClick={handleMenu}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <CgProfile className="w-8 h-8 text-gray-400" /> 
      </button>

      <div
        className={`absolute right-0 origin-top-right mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${
          isOpen ? 'block' : 'hidden'
        } dark:bg-gray-700`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="account-menu"
      >
        <Link to="/profiles/abuubaida01" className="block px-4 py-2 hover:bg-gray-100 text-gray-700 dark:bg-slate-700 dark:hover:bg-gray-600 dark:text-white"> {/* Improved text contrast */}
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-gray-200"></div>
            <span className="ml-3">Profile</span>
          </div>
        </Link>
        <div className="border-t border-gray-200"></div>
        <NavLink to="/settings" className="block px-4 py-2 hover:bg-gray-100 text-gray-700  dark:bg-slate-700 dark:hover:bg-gray-600 dark:text-white"> {/* Consistent text color */}
          <span className="flex items-center">
            <i className="fas fa-cog text-gray-400 mr-3"></i> Settings
          </span>
        </NavLink>
        
        <div className="block px-4 py-2 hover:bg-gray-100 text-gray-700  dark:bg-slate-700 dark:hover:bg-gray-600 dark:text-white"> 
          <span className="flex items-center">
            <i className="fas fa-moon text-blue-400 mr-3"></i>
            <Switcher />
          </span>
        </div>
        <div className="border-t border-gray-200"></div>
        <div className="block px-4 py-2 hover:bg-gray-100 text-gray-700  dark:bg-slate-700 dark:hover:bg-gray-600 dark:text-white"> 
          <span className="flex items-center">
            <i className="fas fa-sign-out-alt text-gray-400 mr-3"></i>
            <LogoutButton />
          </span>
        </div>
        
      </div>
    </div>
  );
}
