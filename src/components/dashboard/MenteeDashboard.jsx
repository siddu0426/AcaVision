import React from 'react';
import { useUser } from '@clerk/clerk-react';
import ProgressDashboard from './ProgressDashboard';
import TaskList from '../tasks/TaskList';
import DomainSelector from './DomainSelector';

const QuestItem = ({ title, xp }) => (
  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
    <div>
      <p className="font-bold text-black">{title}</p>
      <p className="text-sm text-yellow-600">{xp} XP</p>
    </div>
    <button className="bg-orange-500 text-white font-semibold py-1 px-4 rounded-lg text-sm hover:bg-orange-600">
      Start
    </button>
  </div>
);

const AchievementBadge = ({ name }) => (
  <div className="flex flex-col items-center text-center p-3 bg-gray-100 rounded-lg">
    <div className="text-3xl">🏆</div>
    <p className="text-xs font-semibold mt-1">{name}</p>
  </div>
);

function MenteeDashboard(){
    const { user } = useUser();

      const quests = [
    { title: "Complete Chapter 1: Algebra Basics", xp: 100 },
    { title: "Solve 10 practice problems", xp: 50 },
    { title: "Watch a video on linear equations", xp: 25 },
  ];

    const achievements = [
    { name: "Week Streak" },
    { name: "First Quest" },
    { name: "Level 5" },
  ];

   return (
    <div>


      <h1 className="text-4xl font-bold text-black mb-2">
        Welcome, {user?.firstName}!
      </h1>
      <p className="text-gray-600 mb-8">
        Your personalized learning journey starts here. Let's get started!
      </p>

      <DomainSelector />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side: Progress Stats */}
        <div className="lg:col-span-2">
          <ProgressDashboard />
        </div>

        {/* Right Side: Quests and Achievements */}
        <div className="space-y-8">
          

          <TaskList />
          <div>
            <h3 className="text-xl font-bold mb-4">Recent Achievements</h3>
            <div className="grid grid-cols-3 gap-3">
              {achievements.map((a, i) => <AchievementBadge key={i} name={a.name} />)}
            </div>
          </div>
        </div>
      </div>


      <div>
        <div className="mt-7 w-5xl m-auto">
            <h3 className="text-2xl font-bold mb-4">Today's Quests</h3>
            <div className="space-y-3">
              {quests.map((q, i) => <QuestItem key={i} title={q.title} xp={q.xp} />)}
            </div>
          </div></div>
    </div>
  );
}

export default MenteeDashboard;