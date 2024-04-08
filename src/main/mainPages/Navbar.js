import React from 'react';
import { NavLink } from 'react-router-dom';
import AccountMenu from './menu';
import { GrAdd } from "react-icons/gr";
import { getToken } from '../../storage/LocalStorageService';

const Navbar = () => {
  const { access_token } = getToken();

  return (
    <nav className="bg-gray-800 fixed top-0 w-full z-10">
      <div className="container flex justify-between items-center m-1">
        <div className="flex items-center">
          <NavLink to="/post" className="text-xl text-white font-bold">AddaZakat</NavLink>
        </div>
        <ul className="flex space-x-4">
          <li>
            <NavLink to="/post/create" className="text-white hover:text-gray-200 flex mt-2 items-center">
            <GrAdd className="w-6 h-6" /> Create Post
            </NavLink>
          </li>
          
          {access_token ? (
            <li>
              <AccountMenu />
            </li>
          ) : (
            <li>
              <NavLink to="/login" className="text-white hover:text-gray-200 px-3 py-2 rounded-md transition duration-300 bg-gray-700">
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
