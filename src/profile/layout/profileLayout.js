import { Outlet } from "react-router-dom";
import Navbar from "../../main/mainPages/Navbar";
import ProfileSidebar from "./sidebar";
import './layout.css'; // Import CSS module

const ProfileLayout = () => {
  return (
    <div >
      <Navbar />
      <div className='flex'> 
        {/* <div className='sidebar'>
          <ProfileSidebar /> 
        </div> */}
        <div className='content'> 
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;