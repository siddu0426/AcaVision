import React from "react";
import { Link } from "react-router-dom";
import { UserIcon, AcademicCapIcon } from "@heroicons/react/24/solid";

const RoleCard = ({ to, icon, title, description }) => (
  <Link 
    to={to} 
    className="border-2 border-gray-200 rounded-lg p-8 text-center hover:border-orange-500 hover:bg-orange-50 transition-all duration-300"
  >
    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
      {icon}
    </div>
    <h2 className="text-2xl font-bold text-black">{title}</h2>
    <p className="text-gray-600">{description}</p>
  </Link>
);

function ChooseRolePage(){
    return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Join as a Mentee or Mentor</h1>
        <p className="text-lg text-gray-700">Choose your path to get started.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        <RoleCard 
          to="/sign-up?role=mentee"
          icon={<UserIcon className="h-8 w-8 text-gray-800" />}
          title="I am a Mentee"
          description="Looking for guidance and support to achieve your learning goals."
        />
        <RoleCard 
          to="/sign-up?role=mentor"
          icon={<AcademicCapIcon className="h-8 w-8 text-gray-800" />}
          title="I am a Mentor"
          description="Ready to share your knowledge and guide the next generation."
        />
      </div>
    </div>
  );
}

export default ChooseRolePage;