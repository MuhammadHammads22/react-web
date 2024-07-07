// Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaHome} from "react-icons/fa";
import './assets/css/sidebar.css';


const Sidebar = () => {

  return (
    <div className="bg-white h-full max-h-full fixed w-64 dark:bg-gray-700 overflow-y-auto ">
      <ul className="list-none p-2 ">
        
        <Link to='/settings/edit-user'>
          <li className="flex items-center hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg p-2 dark:text-white
          ">
            <FaHome />
            <p className="pl-5">Edit User</p>
          </li>
        </Link>

        <Link to='/settings/edit-profile'>
          <li className="flex items-center hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg p-2 dark:text-white">
            <FaHome />
            <p className="pl-5">Edit Profile</p>
          </li>
        </Link>

        <Link to='/settings/change_password'>
          <li className="flex items-center hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg p-2 dark:text-white">
            <FaHome />
            <p className="pl-5">Change Password</p>
          </li>
        </Link>

      </ul>
    </div>
  );
};

export default Sidebar;