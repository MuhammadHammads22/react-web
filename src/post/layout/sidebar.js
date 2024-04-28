// Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { FaHome, FaUserCheck, FaSave, FaHistory, FaFilter } from "react-icons/fa";


const Sidebar = () => {

  return (
    <div className="bg-white h-full max-h-full fixed w-64 dark:bg-gray-700">
      <ul className="list-none p-2 ">
        <Link to='/'>
          <li className="flex items-center hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg p-2 dark:text-white">
            <FaHome />
            <p className="pl-5">Home</p>
          </li>
        </Link>
        <Link to='/satisfied'>
          <li className="flex items-center hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg p-2 dark:text-white">
            <FaUserCheck />
            <p className="pl-5">Satisfied People</p>
          </li>
        </Link>
        <Link to='/saves'>
          <li className="flex items-center hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg p-2 dark:text-white">
            <FaSave />
            <p className="pl-5">Save Posts</p>
          </li>
        </Link>
        <Link to='/history'>
          <li className="flex items-center hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg p-2 dark:text-white">
              <FaHistory /> 
              <p className="pl-5">History</p>
          </li>
        </Link>
        <Link to='/filter'>
          <li className="flex items-center hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg p-2 dark:text-white">
            <FaFilter />
            <p className="pl-5">Filter Posts</p>
          </li>
        </Link>

        <hr className='p-2 border-t-2 border-slate-500'/>
        
        <Link to='/'>
          <li className="flex items-center hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg p-2 dark:text-white">
            <FaHome />
            <p className="pl-5">Followings</p>
          </li>
        </Link>
        <Link to='/satisfied'>
          <li className="flex items-center hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg p-2 dark:text-white">
            <FaUserCheck />
            <p className="pl-5">Followers</p>
          </li>
        </Link>
        <Link to='/saves'>
          <li className="flex items-center hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg p-2 dark:text-white">
            <FaSave />
            <p className="pl-5">Like</p>
          </li>
        </Link>


      </ul>
    </div>
  );
};

export default Sidebar;