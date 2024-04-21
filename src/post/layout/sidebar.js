// Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";


const Sidebar = () => {

  return (
    <div className={`sidebar-dev`}>
      <ul className="list-none p-4">
        <Link to='/'>
          <li className="text-xl py-4 my-2 hover:bg-slate-800 font-bold text-center text-yellow-300">
            Home
          </li>
        </Link>
        <Link to='/satisfied'>
          <li className="text-xl py-4 my-2 hover:bg-slate-800 font-bold text-center text-yellow-300">
            Satisfied People
          </li>
        </Link>
        <Link to='/saves'>
          <li className="text-xl py-4 my-2 hover:bg-slate-800 font-bold text-center text-yellow-300">
            Save Posts
          </li>
        </Link>
        <Link to='/history'>
          <li className="text-xl py-4 my-2 hover:bg-slate-800 font-bold text-center text-yellow-300">
            History
          </li>
        </Link>
        <Link to='/filter'>
          <li className="text-xl py-4 my-2 hover:bg-slate-800 font-bold text-center text-yellow-300">
            Filter Posts
          </li>
        </Link>

      </ul>
    </div>
  );
};

export default Sidebar;