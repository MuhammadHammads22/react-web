import React from 'react';
import { NavLink } from 'react-router-dom';
import AccountMenu from './menu';
import { GrAdd } from "react-icons/gr";
import { getToken } from '../../storage/LocalStorageService';
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuLogIn } from "react-icons/lu";
import SearchBar from './search-bar';


const Navbar = () => {
  const { access_token } = getToken();

  return (
    <nav className="bg-white fixed top-0 w-full z-10 dark:bg-gray-700">
      <div className="container flex justify-between items-center m-1">
        <div className="flex items-center">
          <NavLink to="/" className="text-2xl text-dark font-bold dark:text-white">AddaZakat</NavLink>
        </div>
        {access_token && (
          <SearchBar />
        )}
        
        {access_token ? (
        <ul className="flex space-x-4">
          
          <li>
            <NavLink to="/create" className="text-white hover:text-gray-200 flex mt-2 items-center">
            <GrAdd className="w-8 h-8" />
            </NavLink>
          </li>


          <li>
            <NavLink to="/" className="text-white hover:text-gray-200 flex mt-2 items-center">
            <IoMdNotificationsOutline className="w-8 h-8" />
            </NavLink>
          </li>
          <li>
              <AccountMenu />
          </li>
        </ul>
        ) : (
        <ul className="flex space-x-4">
          <li>
            <NavLink to="/auth/login" className="text-white hover:text-gray-200 flex mt-2 items-center">
            <LuLogIn className="w-7 h-7" />
            </NavLink>
          </li>
        </ul>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
