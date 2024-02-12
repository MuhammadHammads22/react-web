import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginReg from "./auth/LoginReg";
import ResetPassword from "./auth/ResetPassword";
import SendPasswordResetEmail from "./auth/SendPasswordResetEmail";
import PrivacyPolicy from "./auth/privacy_policy";
import TermsAndConditions from "./auth/terms&conditions.jsx";
import Dashboard from "./fam/Dashboard.jsx";
import Home from "./fam/Home";
import Layout from "./components/Layout.jsx";
import VerifyEmail from "./auth/verifyEmail.jsx";
import { useSelector } from "react-redux";
import ChangePassword from "./auth/ChangePassword.jsx";

function App() {
  const { access_token } = useSelector(state => state.auth)
  return (  
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route path="policy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<TermsAndConditions />} />

            <Route path="login" element={!access_token ? <LoginReg /> : <Navigate to="/fam/dashboard" />} />
            <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
            <Route path="user/reset/:id/:token" element={<ResetPassword />} />
            <Route path="user/verify/:token/" element={<VerifyEmail />} />
            <Route path="change_password" element={<ChangePassword />} />

          </Route>

          <Route path="/fam" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="dashboard" element={access_token ? <Dashboard /> : <Navigate to="/login" />} />
          </Route>

          <Route path="/org" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="dashboard" element={access_token ? <Dashboard /> : <Navigate to="/login" />} />
          </Route>

          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
