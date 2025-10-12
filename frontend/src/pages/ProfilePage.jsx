import React from "react";
import { useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
 
function ProfilePage(){

  const { isLoaded, user } = useUser();

  if(!isLoaded){
    return null;  
  }

    return (
    <div className="bg-white min-h-screen p-8">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold text-black mb-8">Your Profile</h1>
        
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
          <div className="flex items-center mb-6">
            {/* Profile Picture Placeholder */}
            <img src="{user.profileImageUrl}" alt="Profile" className="w-24 h-24 rounded-full mr-6" />
            {/* <div className="w-24 h-24 bg-gray-300 rounded-full mr-6"></div> */}
            <div>
              <h2 className="text-2xl font-bold">{user.fullName}</h2>
              <p className="text-gray-600">{user.primaryEmailAddress.emailAddress}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-gray-500">Level</label>
              <p className="text-lg font-bold text-orange-500">Level 15</p>
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-500">Experience Points</label>
              <p className="text-lg font-bold">2,450 / 3,000 XP</p>
              {/* XP Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                <div className="bg-orange-500 h-2.5 rounded-full" style={{width: '81%'}}></div>
              </div>
            </div>
          </div>
          
            <Link to="/profile/manage">
            <button className="mt-8 bg-black text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-800 cursor-pointer">
            Edit Profile
            </button>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;