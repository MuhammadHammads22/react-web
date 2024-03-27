
import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import  './layout.css'; // Import CSS module

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