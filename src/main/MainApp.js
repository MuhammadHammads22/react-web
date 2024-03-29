import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import AuthCard from "./authPages/card.js";
import ResetPassword from "./authPages/ResetPassword.js";
import SendPasswordResetEmail from "./authPages/SendPasswordResetEmail.js";
import PrivacyPolicy from "./policyPages/privacy_policy.js";
import TermsAndConditions from "./policyPages/terms&conditions.js";
import ChangePassword from "./authPages/ChangePassword.js";
import Settings from "./settings.js";
import VerifyEmail from "./authPages/verifyEmail.js";

import AuthLayout from "../layouts/authLayout.js";


function MainApp() {
  const { access_token } = useSelector(state => state.auth)
  return (  
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<AuthLayout />}>
            <Route path="policy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<TermsAndConditions />} />
            <Route path="login" element={!access_token ? <AuthCard /> : <Navigate to="/fam" />} />
            <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
            <Route path="user/reset/:id/:token" element={<ResetPassword />} />
            <Route path="user/verify/:token/" element={<VerifyEmail />} />
            <Route path="change_password" element={<ChangePassword />} />
            <Route path="/settings" element={<Settings />} />
          </Route>

          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default MainApp;
