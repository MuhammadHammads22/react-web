import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginReg from "./auth/LoginReg";
import ResetPassword from "./auth/ResetPassword";
import SendPasswordResetEmail from "./auth/SendPasswordResetEmail";
import PrivacyPolicy from "./auth/privacy_policy";
import TermsAndConditions from "./auth/terms&conditions.js";

import Layout from "./components/Layout.js";
import AuthLayout from "./components/authLayout.js";
import VerifyEmail from "./auth/verifyEmail.js";
import { useSelector } from "react-redux";
import ChangePassword from "./auth/ChangePassword.js";
import Settings from "./auth/settings.js";

// Fam Pages 
import FAMHome from "./fam/pages/home.js";
import FamHistory from "./fam/pages/history.js";
import FamSatisfied from "./fam/pages/satisfied.js";
import FamSaves from "./fam/pages/saves.js";
import FamFilter from "./fam/pages/filter.js";
import FamDetailView from "./fam/components/fam-detail-view.js"; 

//Org Pages
import OrgHome from "./org/pages/home.js";
import OrgFilters from "./org/pages/filter.js";
import OrgHistory from "./org/pages/history.js";
import OrgSaves from "./org/pages/saves.js";
import OrgSatisfied from "./org/pages/satisfied.js";
import OrgDetailView from "./org/components/org-detail-card.js";


//profile Pages: 
import ProfileLayout from "./components/profileLayout.js";
import ProfileDetail from "./profile/pages/profile.js";
import AllProfiles from "./profile/pages/allProfiles.js";
import AllOrgs from "./profile/pages/allOrgs.js";
import NearMe from "./profile/pages/near-me.js";
import MasjidMadrasa from "./profile/pages/masjid-madrasa.js";
import Following from "./profile/pages/following.js";
import Followers from "./profile/pages/followers.js";


import "./globals.css";

function App() {
  const { access_token } = useSelector(state => state.auth)
  return (  
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<AuthLayout />}>
            <Route path="policy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<TermsAndConditions />} />

            <Route path="login" element={!access_token ? <LoginReg /> : <Navigate to="/fam" />} />
            <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
            <Route path="user/reset/:id/:token" element={<ResetPassword />} />
            <Route path="user/verify/:token/" element={<VerifyEmail />} />
            <Route path="change_password" element={<ChangePassword />} />
            <Route path="/settings" element={<Settings />} />
          </Route>

          <Route path="/fam" element={access_token ? <Layout /> : <Navigate to="/login" />}>
            <Route index element={access_token ? <FAMHome /> : <Navigate to="/login" />} />
            <Route path="satisfied/" element={<FamSatisfied />} />
            <Route path="history/" element={<FamHistory />} />
            <Route path="saves/" element={<FamSaves />} />
            <Route path="filters/" element={<FamFilter />} />
            <Route path="detail/:slug" element={<FamDetailView />} />
          </Route>

          <Route path="/org" element={access_token ? <Layout /> : <Navigate to="/login" />}>
            <Route index element={access_token ? <OrgHome /> : <Navigate to="/login" />} />
            <Route path="filters/" element={<OrgFilters />} />
            <Route path="history/" element={<OrgHistory />} />
            <Route path="saves/" element={<OrgSaves />} />
            <Route path="satisfied/" element={<OrgSatisfied />} />
            <Route path="detail/:slug" element={<OrgDetailView />} />

          </Route>

          <Route path="/profiles" element={access_token ? <ProfileLayout /> : <Navigate to="/login" />}>
            <Route path=":username" element={<ProfileDetail />} />
            <Route index element={<AllProfiles />} />
            <Route path="organization" element={<AllOrgs />} />
            <Route path="masjid-madrasa" element={<MasjidMadrasa />} />
            <Route path=":username/near-me" element={<NearMe />} />
            <Route path=":username/followers" element={<Followers />} />
            <Route path=":username/following" element={<Following />} />
          </Route>

          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
