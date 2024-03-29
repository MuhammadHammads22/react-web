import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout.js";
import { useSelector } from "react-redux";

//Org Pages
import OrgHome from "./pages/home.js";
import OrgFilters from "./pages/filter.js";
import OrgHistory from "./pages/history.js";
import OrgSaves from "./pages/saves.js";
import OrgSatisfied from "./pages/satisfied.js";
import OrgDetailView from "./components/org-detail-card.js";


function OrgApp() {
  const { access_token } = useSelector(state => state.auth)
  return (  
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/org" element={access_token ? <Layout /> : <Navigate to="/login" />}>
            <Route index element={access_token ? <OrgHome /> : <Navigate to="/login" />} />
            <Route path="filters/" element={<OrgFilters />} />
            <Route path="history/" element={<OrgHistory />} />
            <Route path="saves/" element={<OrgSaves />} />
            <Route path="satisfied/" element={<OrgSatisfied />} />
            <Route path="detail/:slug" element={<OrgDetailView />} />

          </Route>

          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default OrgApp;
