
import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./sidebar";
import styles from './Layout.module.css'; // Import CSS module

const Layout = () => {
  return (
    <div >
      <CssBaseline />
      <Navbar />
      <div className={styles.flex}> 
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.content}> 
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;