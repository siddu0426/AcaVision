import React from 'react';
import { FireIcon, CheckBadgeIcon, StarIcon } from '@heroicons/react/24/solid';
import { useUser } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';
import MenteeDashboard from '../components/dashboard/MenteeDashboard';
import MentorDashboard from '../components/dashboard/MentorDashboard';



const MentorDashBoard = ({ user }) => (
    <div>
        <h1 className="text-4xl font-bold text-black">Welcome, Mentor {user?.firstName}!</h1>
        {/* Add Mentor-specific components here */}
    </div>
);


// const StatCard = ({ icon, title, value, color }) => (
//     <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 flex items-center">
//     <div className={`w-12 h-12 rounded-full flex items-center justify-center ${color} mr-4`}>
//       {icon}
//     </div>
//     <div>
//       <p className="text-gray-600 font-semibold">{title}</p>
//       <p className="text-2xl font-bold text-black">{value}</p>
//     </div>
//   </div>
// );

function Dashboard(){
    const { isLoaded, isSignedIn, user } = useUser();

    

    if(!isLoaded || !isSignedIn){
      return null;
    }

     
     const userRole = user?.unsafeMetadata?.role;
     const onboardingComplete = user?.publicMetadata?.onboardingComplete;

     console.log("User role is:", userRole);
     

    if (userRole === 'mentee' && !onboardingComplete) {
      return <Navigate to="/onboarding" />;
    }

     return(
      <div className="bg-white min-h-screen p-8">
      <div className="container mx-auto">
        {userRole === 'mentor' ? (
          <MentorDashboard user={user} />
        ) : (
          <MenteeDashboard user={user} />
        )}
      </div>
    </div>
     );
}


export default Dashboard;