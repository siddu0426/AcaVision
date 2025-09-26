import React from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChartBarIcon } from "@heroicons/react/24/solid";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";


function Navbar(){
    const {isSignedIn} = useUser(); 
    const { signOut } = useClerk();
    const navigate = useNavigate();
    const location = useLocation();



    if (!isSignedIn || location.pathname === '/') {
       return null;
    }

    return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <nav className="container mx-auto px-8 py-4 flex justify-between items-center">
        
        {/* 1. App Logo and Name */}
        <Link to="/dashboard" className="flex items-center gap-2">
          <ChartBarIcon className="h-7 w-7 text-orange-500" />
          <span className="text-xl font-bold text-black">AcaVision</span>
        </Link>

        {/* 2. Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            to="/dashboard" 
            className="font-semibold text-gray-600 hover:text-orange-500 transition-colors"
          >
            Dashboard
          </Link>
          <Link
            to="/community" 
            className="font-semibold text-gray-600 hover:text-orange-500"
            >
            Community
          </Link>

          <Link 
            to="/profile" 
            className="font-semibold text-gray-600 hover:text-orange-500 transition-colors"
          >
            Profile
          </Link>
          <button
            onClick={() => signOut(() => navigate('/'))}
            className="font-semibold text-gray-600 hover:text-orange-500"
          >
            Logout
          </button>
          {/* Add more links like 'Quests' or 'Leaderboard' here later */}

        </div>

        {/* 3. User Profile Icon */}
        {/* <div className="flex items-center gap-4"> */}
           {/* This will later be a dropdown menu with a sign-out button from Clerk */}
          {/* <div className="w-10 h-10 bg-gray-300 rounded-full cursor-pointer"> */}
            {/* You can place a user's avatar image here */}
          {/* </div> */}
        {/* </div> */}

      </nav>
    </header>
  );
}

export default Navbar;