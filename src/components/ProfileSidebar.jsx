// Sidebar.jsx
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.module.css";


const ProfileSidebar = () => {
  return (
    <div className="sidebar-dev">
      <ul className="list-none p-4">
        <Link to='/profiles'>
          <li className="text-xl py-4 my-2 hover:bg-slate-800 font-bold text-center text-yellow-300 bg-slate-700 rounded-lg">
            Porfiles
          </li>
        </Link>

        <Link to='/profiles/masjid-madrasa'>
          <li className="text-xl py-4 my-2 hover:bg-slate-800 font-bold text-center text-yellow-300 bg-slate-700 rounded-lg">
            Masjids and Madrasa
          </li>
        </Link>

        <Link to='/profiles/organization'>
          <li className="text-xl py-4 my-2 hover:bg-slate-800 font-bold text-center text-yellow-300 bg-slate-700 rounded-lg">
            Organization
          </li>
        </Link>

        <Link to='/profiles/near-me'>
          <li className="text-xl py-4 my-2 hover:bg-slate-800 font-bold text-center text-yellow-300 bg-slate-700 rounded-lg">
            Near Me
          </li>
        </Link>

        
        <Link to='/profiles/following'>
          <li className="text-xl py-4 my-2 hover:bg-slate-800 font-bold text-center text-yellow-300 bg-slate-700 rounded-lg">
            Following
          </li>
        </Link>

        <Link to='/profiles/followers'>
          <li className="text-xl py-4 my-2 hover:bg-slate-800 font-bold text-center text-yellow-300 bg-slate-700 rounded-lg">
            Followers
          </li>
        </Link>

      </ul>

    </div>
  );
};

export default ProfileSidebar;