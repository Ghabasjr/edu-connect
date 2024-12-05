import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import WelcomePage from "./Pages/WelcomePage/WelcomePage";
import SignUp2 from "./Pages/SignUp2/SignUp2";
import EmailVerification from "./Pages/EmailVerification/EmailVerification";
import SubjectCategory from "./Pages/SubjectCategory/SubjectCategory";
import ProfileSetup from "./Pages/ProfileSetup/ProfileSetup";
import DashBoard from "./Components/DashBoard/DashBoard";
import EditProfile from "./Pages/EditProfile/EditProfile";
import PostPage from "./Pages/PostPage/PostPage";

import { useEffect } from "react";

export default function App() {
  const initGoogleApi = () => {
    gapi.load("auth2", () => {
      gapi.auth2.init({
        client_id: "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com", // Replace with your Google Client ID
      });
    });
  };

  useEffect(() => {
    initGoogleApi();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<WelcomePage />} />
        <Route path="/sign-up2" element={<SignUp2 />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/email-verification" element={<EmailVerification />} />
        <Route path="/subject-category" element={<SubjectCategory />} />
        <Route path="/profile-setup" element={<ProfileSetup />} />
        <Route path="/dash-board" element={<DashBoard />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/post-page" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}
