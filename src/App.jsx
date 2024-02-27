import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginReg from "./auth/LoginReg";
import ResetPassword from "./auth/ResetPassword";
import SendPasswordResetEmail from "./auth/SendPasswordResetEmail";
import PrivacyPolicy from "./auth/privacy_policy";
import TermsAndConditions from "./auth/terms&conditions.jsx";

import Layout from "./components/Layout.jsx";
import AuthLayout from "./components/authLayout.jsx";
import VerifyEmail from "./auth/verifyEmail.jsx";
import { useSelector } from "react-redux";
import ChangePassword from "./auth/ChangePassword.jsx";
import Settings from "./auth/settings.jsx";

// Fam Pages 
import FAMHome from "./fam/pages/home.jsx";
import FamHistory from "./fam/pages/history.jsx";
import FamSatisfied from "./fam/pages/satisfied.jsx";
import FamSaves from "./fam/pages/saves.jsx";
import FamFilter from "./fam/pages/filter.jsx";

//Org Pages
import OrgHome from "./org/pages/home.jsx";
import OrgFilters from "./org/pages/filter.jsx";
import OrgHistory from "./org/pages/history.jsx";
import OrgSaves from "./org/pages/saves.jsx";
import OrgSatisfied from "./org/pages/satisfied.jsx";

//profile Pages: 
import ProfileLayout from "./components/profileLayout.jsx";
import ProfileDetail from "./profile/pages/profile.jsx";
import AllProfiles from "./profile/pages/allProfiles.jsx";
import AllOrgs from "./profile/pages/allOrgs.jsx";
import NearMe from "./profile/pages/near-me.jsx";
import MasjidMadrasa from "./profile/pages/masjid-madrasa.jsx";
import Following from "./profile/pages/following.jsx";
import Followers from "./profile/pages/followers.jsx";


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
          </Route>

          <Route path="/org" element={access_token ? <Layout /> : <Navigate to="/login" />}>
            <Route index element={access_token ? <OrgHome /> : <Navigate to="/login" />} />
            <Route path="filters/" element={<OrgFilters />} />
            <Route path="history/" element={<OrgHistory />} />
            <Route path="saves/" element={<OrgSaves />} />
            <Route path="satisfied/" element={<OrgSatisfied />} />
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
