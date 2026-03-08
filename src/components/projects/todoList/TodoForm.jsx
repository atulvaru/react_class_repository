import React, { useState } from "react";
export const TodoForm = () => {
     const [newTask, setNewTask] = useState("");
    const handleNewTask = (value) => {
        setNewTask(value);
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <form onSubmit={handleOnSubmit} className="space-y-4">
      <div className="relative">
        <input
          type="text"
          value={newTask}
          onChange={(e) => handleNewTask(e.target.value)}
          placeholder="Add a new task..."
          className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 text-gray-700 placeholder-gray-400"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
      >
        ✨ Add Task
      </button>
    </form>
  );
};
