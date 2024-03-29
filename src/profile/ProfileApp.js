import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

//profile Pages: 
import ProfileLayout from "../layouts/profileLayout.js";
import ProfileDetail from "./pages/profile.js";
import AllProfiles from "./pages/allProfiles.js";
import AllOrgs from "./pages/allOrgs.js";
import NearMe from "./pages/near-me.js";
import MasjidMadrasa from "./pages/masjid-madrasa.js";
import Following from "./pages/following.js";
import Followers from "./pages/followers.js";


function ProfileApp() {
  const { access_token } = useSelector(state => state.auth)
  return (  
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/profiles" element={access_token ? <ProfileLayout /> : <Navigate to="/login" />}>
            <Route path=":username" element={<ProfileDetail />} />
            <Route index element={<AllProfiles />} />
            <Route path="organization" element={<AllOrgs />} />
            <Route path="masjid-madrasa" element={<MasjidMadrasa />} />
            <Route path=":username/near-me" element={<NearMe />} />
            <Route path=":username/followers" element={<Followers />} />
            <Route path=":username/following" element={<Following />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default ProfileApp;
