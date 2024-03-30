import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Layout from "../layouts/Layout.js";
import { useSelector } from "react-redux";

// Fam Pages 
import PostHome from "./pages/home.js";
import PostHistory from "./pages/history.js";
import PostSatisfied from "./pages/satisfied.js";
import PostSaves from "./pages/saves.js";
import PostFilter from "./pages/filter.js";
import PostDetailView from "./components/fam-detail-view.js"; 


function PostApp() {
  const { access_token } = useSelector(state => state.auth)
  return (  
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/post" element={access_token ? <Layout /> : <Navigate to="/login" />}>
            <Route index element={access_token ? <PostHome /> : <Navigate to="/login" />} />
            <Route path="satisfied/" element={<PostSatisfied />} />
            <Route path="history/" element={<PostHistory />} />
            <Route path="saves/" element={<PostSaves />} />
            <Route path="filters/" element={<PostFilter />} />
            <Route path="detail/:slug" element={<PostDetailView />} />
          </Route>

          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default PostApp;
