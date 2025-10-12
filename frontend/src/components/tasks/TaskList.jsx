import React, { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";

function TaskList(){
    const [tasks, setTasks] = useState([
    { id: 1, text: 'Complete Chapter 1: Algebra Basics', completed: true },
    { id: 2, text: 'Solve 10 practice problems', completed: false },
    { id: 3, text: 'Watch a video on linear equations', completed: false },
  ]);

  const [newTaskText, setNewTaskText] = useState('');

  const handleAddTask = (e) =>{
    e.preventDefault();
    if (newTaskText.trim() === '') return;

    const newTask = {
      id: Date.now(), // Simple unique ID
      text: newTaskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setNewTaskText('');
  };

    const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

    const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

    return (
    <div>
      <h3 className="text-xl font-bold mb-4">Your Tasks</h3>
      {/* Form to add a new task */}
      <form onSubmit={handleAddTask} className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          placeholder="Add a new task..."
          className="flex-grow p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-600"
        >
          Add
        </button>
      </form>

      {/* List of tasks */}
      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleTask(task.id)}
                className="h-5 w-5 rounded text-orange-500 focus:ring-orange-500 cursor-pointer"
              />
              <span className={`font-semibold ${task.completed ? 'line-through text-gray-500' : 'text-black'}`}>
                {task.text}
              </span>
            </div>
            <button onClick={() => handleDeleteTask(task.id)} className="text-gray-400 hover:text-red-500">
              <TrashIcon className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );

}

export default TaskList;