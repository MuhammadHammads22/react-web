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
    <nav className="bg-white top-0 flex items-center justify-between w-full fixed z-50 dark:bg-gray-700">
      {/* <div className="container flex justify-between items-center m-1"> */}
        <div className="flex items-center m-2">
          <NavLink to="/" className="text-2xl text-dark font-bold dark:text-white">AddaZakat</NavLink>
        </div>
        {access_token && (
          <SearchBar className='text-slate-950'/>  
        )}
        
        {access_token ? (
        <ul className="flex space-x-4">
          
          <li>
            <NavLink to="/create" className="text-white hover:text-gray-200 flex mt-2 items-center ">
            <GrAdd className="w-8 h-8 text-slate-950 dark:text-white" />
            </NavLink>
          </li>


          {/* <li>
            <NavLink to="/" className="text-white hover:text-gray-200 flex mt-2 items-center">
            <IoMdNotificationsOutline className="w-8 h-8 text-slate-950 dark:text-white" />
            </NavLink>
          </li> */}
          <li>
              <AccountMenu className='text-slate-950' />
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

      {/* </div> */}
    </nav>
  );
};

export default Navbar;
