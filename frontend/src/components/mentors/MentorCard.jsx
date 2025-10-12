import React from "react";

function MentorCard({ mentor }) {
  return (
    <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
      <img 
        src={mentor.imageUrl} 
        alt={mentor.name} 
        className="w-20 h-20 rounded-full object-cover"
      />
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-black">{mentor.name}</h3>
        <p className="text-gray-600">{mentor.experience}</p>
      </div>
      <button className="bg-orange-500 text-white font-semibold py-2 px-5 rounded-lg hover:bg-orange-600">
        Connect
      </button>
    </div>
  );
}

export default MentorCard;