
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import  './assets/css/layout.css'; 

const AuthLayout = () => {
  return (
    <div >
      <Navbar />
      <div className='flex'> 
        <div className='content'> 
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;