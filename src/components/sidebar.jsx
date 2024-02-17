// Sidebar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.module.css";


const Sidebar = () => {
  
  const location = useLocation();
  const isOrgApp = location.pathname.startsWith("/org");
  const appPrefix = isOrgApp ? "/org": "/fam";
  
  return (
    <div className="sidebar">
      <ul className="list-none p-4">
        <li>
          <Link to={`${appPrefix}`}>Home</Link>
        </li>
        <li>
          <Link to={`${appPrefix}/satisfied`}>Satisfied People</Link>
        </li>
        <li>
          <Link to={`${appPrefix}/saves`}>Save Posts</Link>
        </li>
        <li>
          <Link to={`${appPrefix}/history`}>History</Link>
        </li>
        <li>
          <Link to={`${appPrefix}/filters`}>Filter Posts</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;