import React, { useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { mockMentorData } from '../../data/mentorData';

// Reusable card for a pending mentee request
const MenteeRequestCard = ({ request, onAccept, onDecline }) => (
  <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg">
    <img src={request.imageUrl} alt={request.name} className="w-16 h-16 rounded-full" />
    <div className="flex-grow">
      <h4 className="font-bold text-black">{request.name}</h4>
      <p className="text-sm text-gray-600">{request.goal}</p>
    </div>
    <div className="flex flex-col gap-2">
      <button onClick={() => onAccept(request)} className="bg-green-500 text-white text-sm font-semibold py-1 px-4 rounded-lg hover:bg-green-600">Accept</button>
      <button onClick={() => onDecline(request.id)} className="bg-red-500 text-white text-sm font-semibold py-1 px-4 rounded-lg hover:bg-red-600">Decline</button>
    </div>
  </div>
);

// Reusable card for a current mentee
const MenteeCard = ({ mentee }) => (
  <div className="p-4 bg-white border border-gray-200 rounded-lg">
    <div className="flex items-center gap-4">
      <img src={mentee.imageUrl} alt={mentee.name} className="w-14 h-14 rounded-full" />
      <div>
        <h4 className="font-bold text-black">{mentee.name}</h4>
        <p className="text-sm text-orange-600 font-semibold">{mentee.domain}</p>
      </div>
    </div>
    <div className="mt-4">
      <p className="text-xs text-gray-500 mb-1">Progress</p>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: `${mentee.progress}%` }}></div>
      </div>
    </div>
  </div>
);

function MentorDashboard(){
    const { user } = useUser();
    const [requests, setRequests] = useState(mockMentorData.menteeRequests);
    const [mentees, setMentees] = useState(mockMentorData.currentMentees);

    const handleAccept = (request) =>{
        setMentees([...mentees, { ...request, domain: 'New Mentee', progress: 0 }]);
        setRequests(requests.filter(r => r.id !== request.id));
    };

    const handleDecline = (requestId) => {
        setRequests(requests.filter(r => r.id !== requestId));
    };

     return (
    <div>
      <h1 className="text-4xl font-bold text-black mb-2">
        Mentor Dashboard
      </h1>
      <p className="text-gray-600 mb-8">
        Welcome back, {user?.firstName}! Here's your summary.
      </p>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side: Pending Requests */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-2xl font-bold text-black">Mentee Requests ({requests.length})</h2>
          {requests.length > 0 ? (
            requests.map(req => <MenteeRequestCard key={req.id} request={req} onAccept={handleAccept} onDecline={handleDecline} />)
          ) : (
            <p className="text-gray-500 p-4 bg-gray-50 rounded-lg">No new mentee requests.</p>
          )}
        </div>

        {/* Right Side: Current Mentees */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-black">My Mentees ({mentees.length})</h2>
          {mentees.map(mentee => <MenteeCard key={mentee.id} mentee={mentee} />)}
        </div>
      </div>
    </div>
  );
}

export default MentorDashboard;