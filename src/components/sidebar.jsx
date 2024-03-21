// Sidebar.jsx
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";


const Sidebar = () => {

  const location = useLocation();
  const isOrgApp = location.pathname.startsWith("/org");
  const appPrefix = isOrgApp ? "/org": "/fam";
  
  const [darkMode, setDarkMode] = useState(null);

  useEffect(() => {
    if(window.matchMedia('(prefers-color-schema: dark)').matches){
      setDarkMode('dark');
    }else{
      setDarkMode('light');
    }
  }, [])


  useEffect(() => {
    if(darkMode){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode])


  return (
    <div className={`sidebar-dev ${darkMode}`}>
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
        <li className="text-xl py-4 my-2 hover:bg-slate-800 font-bold text-center text-yellow-300 bg-slate-700 rounded-lg">
          <button onClick={() => {
            setDarkMode(!darkMode)
          }} className="dark:bg-white">
            {!darkMode ? "Light" : "Dark"} Mode
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;