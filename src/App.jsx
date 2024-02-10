import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginReg from "./pages/auth/LoginReg";
import ResetPassword from "./pages/auth/ResetPassword";
import SendPasswordResetEmail from "./pages/auth/SendPasswordResetEmail";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/privacy_policy";
import TermsAndConditions from "./pages/terms&conditions";
import Dashboard from "./pages/Dashboard.jsx";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import VerifyEmail from "./pages/auth/verifyEmail.jsx";
import { useSelector } from "react-redux";
function App() {
  const { access_token } = useSelector(state => state.auth)
  return (  
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="policy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<TermsAndConditions />} />

            <Route path="login" element={!access_token ? <LoginReg /> : <Navigate to="/dashboard" />} />
            <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
            <Route path="user/reset/:id/:token" element={<ResetPassword />} />
            <Route path="user/verify/:token/" element={<VerifyEmail />} />
          </Route>

          <Route path="/dashboard" element={access_token ? <Dashboard /> : <Navigate to="/login" />} />

          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />

          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
