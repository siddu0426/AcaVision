import React from "react";
import { Link } from "react-router-dom";
import { BoltIcon, ChartBarIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const FeatureCard = ({ icon, title, children }) => (
  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
    <div className="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400">{children}</p>
  </div>
);

const StepCard = ({ number, title, children }) => (
  <div className="text-center">
    <div className="w-16 h-16 bg-gray-800 border-2 border-orange-500 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
      {number}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400">{children}</p>
  </div>
);


function LandingPage(){
    return (
    <div className="bg-black text-white">
      {/* --- Hero Section --- */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center p-8 bg-cover bg-center" style={{backgroundImage: "url('/hero-bg.svg')"}}>
        {/* You can create a subtle SVG background and place it in your /public folder */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-down">
          Turn Your Study Grind <br/> into a Grand Adventure
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 animate-fade-in-up">
          Stop just studying. Start conquering. Our AI-powered quests transform your learning tasks into exciting challenges, helping you stay motivated and rewarded.
        </p>
        <Link 
          to="/choose-role"
          className="bg-orange-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-orange-600 transition-transform hover:scale-105 duration-300"
        >
          Get Started for Free
        </Link>
      </section>

      {/* --- Features Section --- */}
      <section className="py-20 px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Everything You Need to Succeed</h2>
            <p className="text-gray-400 mt-2">AcaVision is more than just a to-do list.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard icon={<BoltIcon className="w-6 h-6"/>} title="AI-Powered Quests">
              Our smart AI analyzes your goals and generates personalized tasks to keep you challenged.
            </FeatureCard>
            <FeatureCard icon={<ChartBarIcon className="w-6 h-6"/>} title="Track Your Progress">
              Visualize your growth with XP, streaks, and achievements. See how far you've come.
            </FeatureCard>
            <FeatureCard icon={<AcademicCapIcon className="w-6 h-6"/>} title="Connect with Mentors">
              Find experienced mentors in your domain and get the guidance you need to excel.
            </FeatureCard>
            <FeatureCard icon={<UserGroupIcon className="w-6 h-6"/>} title="Role-Based Paths">
              Whether you're a mentee seeking knowledge or a mentor sharing it, we have a path for you.
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* --- App Preview Section --- */}
      <section className="py-20 px-8 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">An Interface You'll Love</h2>
          <div className="bg-gray-800 p-4 rounded-xl border border-gray-700 inline-block">
                      </div>
        </div>
      </section>
      
      {/* --- How It Works Section --- */}
      <section className="py-20 px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Get Started in 3 Easy Steps</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <StepCard number="1" title="Create Your Account">
              Sign up as a mentee or mentor and tell us about your learning goals.
            </StepCard>
            <StepCard number="2" title="Receive Your Quests">
              Our AI will generate personalized tasks and domains to guide your learning path.
            </StepCard>
            <StepCard number="3" title="Conquer & Grow">
              Complete tasks, earn XP, and connect with mentors to accelerate your growth.
            </StepCard>
          </div>
        </div>
      </section>
      
      {/* --- Footer --- */}
      <footer className="py-8 px-8 border-t border-gray-800">
        <div className="container mx-auto text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} AcaVision. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;