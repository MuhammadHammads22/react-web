import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Layout from "../layouts/Layout.js";
import { useSelector } from "react-redux";

// Fam Pages 
import FAMHome from "./pages/home.js";
import FamHistory from "./pages/history.js";
import FamSatisfied from "./pages/satisfied.js";
import FamSaves from "./pages/saves.js";
import FamFilter from "./pages/filter.js";
import FamDetailView from "./components/fam-detail-view.js"; 


function FamApp() {
  const { access_token } = useSelector(state => state.auth)
  return (  
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/fam" element={access_token ? <Layout /> : <Navigate to="/login" />}>
            <Route index element={access_token ? <FAMHome /> : <Navigate to="/login" />} />
            <Route path="satisfied/" element={<FamSatisfied />} />
            <Route path="history/" element={<FamHistory />} />
            <Route path="saves/" element={<FamSaves />} />
            <Route path="filters/" element={<FamFilter />} />
            <Route path="detail/:slug" element={<FamDetailView />} />
          </Route>

          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default FamApp;
