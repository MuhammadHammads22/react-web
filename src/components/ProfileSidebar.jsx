import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.module.css";


const ProfileSidebar = () => {

    <div className="sidebar-dev">
      <ul className="list-none p-4">
        <Link to="/profiles">
          <li className="text-xl py-4 my-2 hover:bg-slate-800 font-bold text-center text-yellow-300 bg-slate-700 rounded-lg">
            Profiles
          </li>
        </Link>

        <Link to="/profiles/Organization">
          <li className="text-xl py-4 my-2 hover:bg-slate-800 font-bold text-center text-yellow-300 bg-slate-700 rounded-lg">
            Organizations
          </li>
        </Link>

        <Link to='profiles/M&M'>
          <li className="text-xl py-4 my-2 hover:bg-slate-800 font-bold text-center text-yellow-300 bg-slate-700 rounded-lg">
            Masjid and Madrasa
          </li>
        </Link>
      </ul>

    </div>
};

export default ProfileSidebar;