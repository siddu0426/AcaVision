import React from "react";
import { ArrowTrendingUpIcon, CheckCircleIcon, TrophyIcon, FireIcon } from '@heroicons/react/24/outline';

const StatItem = ({ icon, value, label, color }) => (
  <div className="flex flex-col items-center text-center">
    <div className={`w-16 h-16 flex items-center justify-center rounded-full mb-2 ${color}`}>
      {icon}
    </div>
    <p className="text-3xl font-bold text-black">{value}</p>
    <p className="text-sm text-gray-600">{label}</p>
  </div>
);

const StreakDay = ({ day, completed }) => (
  <div className={`w-10 h-10 flex items-center justify-center rounded-full font-bold ${completed ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
    {day}
  </div>
);  

function ProgressDashboard(){
      const userData = {
        level: 1,
        completedQuests: 0,
        achievements: 0,
        currentStreak: 0,
        xp: 0,
        xpToNextLevel: 100,
        bestStreak: 0,
        streakProgress: [true, false, false, false, false, false, false], // Example for day 1
  };

  const xpPercentage = (userData.xp / userData.xpToNextLevel) * 100;

  return(
        <div className="bg-white border border-gray-200 rounded-lg p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-black mb-6">Progress Dashboard</h2>

      {/* Stats Icons */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <StatItem 
          icon={<ArrowTrendingUpIcon className="h-8 w-8 text-orange-600" />} 
          value={userData.level} 
          label="Current Level"
          color="bg-orange-100"
        />
        <StatItem 
          icon={<CheckCircleIcon className="h-8 w-8 text-blue-600" />} 
          value={userData.completedQuests} 
          label="Completed Quests"
          color="bg-blue-100"
        />
        <StatItem 
          icon={<TrophyIcon className="h-8 w-8 text-purple-600" />} 
          value={userData.achievements} 
          label="Achievements"
          color="bg-purple-100"
        />
        <StatItem 
          icon={<FireIcon className="h-8 w-8 text-red-600" />} 
          value={userData.currentStreak} 
          label="Current Streak"
          color="bg-red-100"
        />
      </div>

      {/* Level Progress */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-lg font-semibold text-black">Level Progress</h3>
          <p className="text-sm text-gray-600">{userData.xp}/{userData.xpToNextLevel} XP to Level {userData.level + 1}</p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div className="bg-orange-500 h-3 rounded-full" style={{ width: `${xpPercentage}%` }}></div>
        </div>
      </div>

      {/* Streak Progress */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-black">Streak Progress</h3>
          <p className="text-sm text-gray-600">Best: {userData.bestStreak} days</p>
        </div>
        <div className="flex justify-between items-center mb-2">
            {userData.streakProgress.map((completed, index) => (
                <StreakDay key={index} day={index + 1} completed={completed} />
            ))}
        </div>
        <p className="text-center text-xs text-gray-500">Daily quest streak (7 days for achievement)</p>
      </div>
    </div>
  );
}

export default ProgressDashboard;