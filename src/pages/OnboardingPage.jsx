import React, { useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const subjects = ["Mathematics", "Science", "History", "Programming", "Literature"];

function OnboardingPage(){
    const { isLoaded, user } = useUser();
    const navigate = useNavigate();
    const [selectedSubject, setSelectedSubject] = useState(null);

    const handleFinish = async () => {

    if (!isLoaded || !user) {
      console.error("User data is not available yet.");
      return;
    }
    if (!selectedSubject) {
      alert("Please select a subject!");
      return;
    }

    try{

      await user.update({
        unsafeMetadata: {
          ...user.publicMetadata,
          subject: selectedSubject,
          onboardingComplete: true,
        },
      });

      navigate('/dashboard');   
    } catch (error) {
      console.error("Error updating user metadata", error);
    }
};

 return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-2">Just a few more steps...</h1>
        <p className="text-lg text-gray-700 mb-8">Let's personalize your learning experience.</p>

        <div className="w-full">
          <h2 className="text-xl font-semibold mb-4">What is your primary subject of interest?</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {subjects.map((subject) => (
              <button 
                key={subject} 
                onClick={() => setSelectedSubject(subject)}
                className={`py-2 px-6 rounded-lg font-semibold border-2 transition-all ${selectedSubject === subject ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-black border-gray-300'}`}
              >
                {subject}
              </button>
            ))}
          </div>

          <button 
            onClick={handleFinish}
            className="bg-black text-white font-bold py-3 px-12 rounded-lg text-lg hover:bg-gray-800 disabled:bg-gray-400"
            disabled={!selectedSubject}
          >
            Finish Setup
          </button>
        </div>
      </div>
    </div>
  );    
}

export default OnboardingPage;