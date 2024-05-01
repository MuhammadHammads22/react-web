import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthCard from "./main/authPages/card.js";
import ResetPassword from "./main/authPages/ResetPassword.js";
import SendPasswordResetEmail from "./main/authPages/SendPasswordResetEmail.js";
import PrivacyPolicy from "./main/policyPages/privacy_policy.js";
import TermsAndConditions from "./main/policyPages/terms&conditions.js";

import PostLayout from "./main/mainPages/Layout.js";
import AuthLayout from "./main/mainPages/authLayout.js";
import VerifyEmail from "./main/authPages/verifyEmail.js";
import { useSelector } from "react-redux";
import ChangePassword from "./main/authPages/ChangePassword.js";
import Settings from "./main/settings.js";

//Post pages 
import PostHome from "./post/pages/home.js";
import PostHistory from "./post/pages/history.js";
import PostSatisfied from "./post/pages/satisfied.js";
import PostSaves from "./post/pages/saves.js";
import PostFilter from "./post/pages/filter.js";
import SearchResults from "./post/pages/search-results.js";
import PostDetailView from "./post/components/post-detail-view.js"; 
import CreatePost from "./post/pages/create-post.js";



//profile Pages: 
import ProfileLayout from "./profile/layout/profileLayout.js";
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

          <Route path="/auth" element={<AuthLayout />}>
            <Route path="policy/" element={<PrivacyPolicy />} />
            <Route path="terms/" element={<TermsAndConditions />} />

            <Route path="login/" element={!access_token ? <AuthCard /> : <Navigate to="/" />} />
            <Route path="sendpasswordresetemail/" element={<SendPasswordResetEmail />} />
            <Route path="user/reset/:id/:token/" element={<ResetPassword />} />
            <Route path="user/verify/:token/" element={<VerifyEmail />} />
            <Route path="change_password/" element={<ChangePassword />} />
            <Route path="settings/" element={<Settings />} />
          </Route>          

          <Route path="/" element={access_token ? <PostLayout /> : <Navigate to="/auth/login" />}>
            <Route index element={access_token ? <PostHome /> : <Navigate to="/auth/login" />} />
            <Route path="satisfied/" element={<PostSatisfied />} />
            <Route path="history/" element={<PostHistory />} />
            <Route path="saves/" element={<PostSaves />} />
            <Route path="filter" element={<PostFilter />} />
            <Route path="detail/:slug" element={<PostDetailView />} />
            <Route path="create/" element={<CreatePost />} />
            <Route path="search" element={<SearchResults />} />
          </Route>

          <Route path="/profiles" element={access_token ? <ProfileLayout /> : <Navigate to="/auth/login" />}>
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
