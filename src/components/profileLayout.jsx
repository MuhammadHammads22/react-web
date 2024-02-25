
import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import ProfileSidebar from "./ProfileSidebar";
import styles from './Layout.module.css'; // Import CSS module

const ProfileLayout = () => {
  return (
    <div >
      <CssBaseline />
      <Navbar />
      <div className={styles.flex}> 
        <div className={styles.sidebar}>
          <ProfileSidebar />
        </div>
        <div className={styles.content}> 
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;