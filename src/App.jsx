import React from "react";
import { Routes, Route, useNavigate} from 'react-router-dom'
import { SignedIn, SignedOut, ClerkProvider, RedirectToSignIn } from "@clerk/clerk-react";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import ProfilePage from "./pages/ProfilePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Navbar from "./components/layout/Navbar";
import ManageProfilePage from "./pages/ManageProfilePage";
import ChooseRolePage from "./pages/ChooseRolePage";
import OnboardingPage from "./pages/OnboardingPage";
import DomainPage from "./pages/DomainPage";
import CommunityPage from "./pages/CommunityPage";
import PostDetailPage from "./pages/PostDetailPage";

function App(){
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/choose-role" element={<ChooseRolePage />} />
          <Route path="/sign-in/*" element={<SignInPage />} />
          <Route path="/sign-up/*" element={<SignUpPage />} />
          <Route path="/onboarding" element={ 
            <>
           <SignedIn><OnboardingPage /></SignedIn>
           <SignedOut><RedirectToSignIn /></SignedOut>
            </> 
          }
           />

          {/* These routes are protected */}
           <Route path="/community" element={<SignedIn><CommunityPage /></SignedIn>} />
           <Route path="/community/post/:postId" element={<SignedIn><PostDetailPage /></SignedIn>} />
          <Route
          path="/domain/:domainName" 
          element={
            <>
            <SignedIn><DomainPage /></SignedIn>
            <SignedOut><RedirectToSignIn /></SignedOut>
            </>
          }
          />


          <Route
            path="/dashboard"
            element={
              <>
                <SignedIn>
                  <Dashboard />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <SignedIn>
                  <ProfilePage />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />
          <Route 
          path="/profile/manage"
          element={
            <>
            <SignedIn><ManageProfilePage /></SignedIn>
            <SignedOut><RedirectToSignIn /></SignedOut>
            </>
          }
          />
        </Routes>
      </main>
      </>
  );
}



export default App;