
import { Outlet } from "react-router-dom";
import Navbar from "../mainPages/Navbar";
import Sidebar from "./sidebar";
import './assets/css/layout.css';

const SettingsLayout = () => {
  return (
    <div >
      <Navbar />
      {/* <div className='flex '>  */}
        
        <div className='sidebar'>
          <Sidebar />
        </div>

        <div className='content'> 
          <Outlet />
        </div>

      {/* </div> */}
    </div>
  );
};

export default SettingsLayout;