// Sidebar.jsx
import React, { useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";


const Sidebar = () => {

  const location = useLocation();
  const isOrgApp = location.pathname.startsWith("/org");
  const appPrefix = isOrgApp ? "/org": "/post";
  

  return (
    <div className={`sidebar-dev`}>
      <ul className="list-none p-4">
        <Link to={`${appPrefix}`}>
          <li className="text-xl py-4 my-2 hover:bg-slate-800 font-bold text-center text-yellow-300">
            Home
          </li>
        </Link>
        <Link to={`${appPrefix}/satisfied`}>
          <li className="text-xl py-4 my-2 hover:bg-slate-800 font-bold text-center text-yellow-300">
            Satisfied People
          </li>
        </Link>
        <Link to={`${appPrefix}/saves`}>
          <li className="text-xl py-4 my-2 hover:bg-slate-800 font-bold text-center text-yellow-300">
            Save Posts
          </li>
        </Link>
        <Link to={`${appPrefix}/history`}>
          <li className="text-xl py-4 my-2 hover:bg-slate-800 font-bold text-center text-yellow-300">
            History
          </li>
        </Link>
        <Link to={`${appPrefix}/filters`}>
          <li className="text-xl py-4 my-2 hover:bg-slate-800 font-bold text-center text-yellow-300">
            Filter Posts
          </li>
        </Link>

      </ul>
    </div>
  );
};

export default Sidebar;