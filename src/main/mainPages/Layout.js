
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./sidebar";
import './assets/css/layout.css';

const PostLayout = () => {
  return (
    <div >
      <Navbar />
      <div className='flex '> 
        
        <div className='sidebar'>
          <Sidebar />
        </div>

        <div className='content'> 
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default PostLayout;