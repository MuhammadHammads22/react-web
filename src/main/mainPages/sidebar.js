// Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUserCheck, FaSave, FaHistory, FaFilter } from "react-icons/fa";
import FilterPost from "./filterPost";

const Sidebar = () => {

  return (
    <div className="bg-white h-full max-h-full fixed w-64 dark:bg-gray-700 overflow-y-auto mt-12">
      <ul className="list-none p-2 ">
        
        <Link to='/'>
          <li className="flex items-center hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg p-2 dark:text-white">
            <FaHome />
            <p className="pl-5">Home</p>
          </li>
        </Link>

        <Link to='/saves'>
          <li className="flex items-center hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg p-2 dark:text-white">
            <FaSave />
            <p className="pl-5">Saved Posts</p>
          </li>
        </Link>

        {/* <Link to='/satisfied'>
          <li className="flex items-center hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg p-2 dark:text-white">
            <FaUserCheck />
            <p className="pl-5">Satisfied People</p>
          </li>
        </Link>
         */}
        
        <FilterPost className='w-full'/>

        <hr className='p-2 border-t-2 border-slate-500'/>
        <p className='text-md p-2 dark:text-white font-bold'>History</p>
        {/* <Link to='/'>
          <li className="flex items-center hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg p-2 dark:text-white">
            <FaHome />
            <p className="pl-5">Visited Posts</p>
          </li>
        </Link> */}

        

        <Link to='/'>
          <li className="flex items-center hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg p-2 dark:text-white">
            <FaHome />
            <p className="pl-5">Upvoted Posts</p>
          </li>
        </Link>

        <Link to='/donated'>
          <li className="flex items-center hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg p-2 dark:text-white">
            <FaUserCheck />
            <p className="pl-5">Supported Posts</p>
          </li>
        </Link>
        
        <Link to='/saves'>
          <li className="flex items-center hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg p-2 dark:text-white">
            <FaSave />
            <p className="pl-5">Commented Posts</p>
          </li>
        </Link>

        {/* <Link to='/reported'>
          <li className="flex items-center hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg p-2 dark:text-white">
            <FaSave />
            <p className="pl-5">Reported Posts</p>
          </li>
        </Link> */}


      </ul>
    </div>
  );
};

export default Sidebar;