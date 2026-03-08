import { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import { MdDeleteForever } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";

export const Todo = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [currentDate, setCurrentDate] = useState("");

  const handleNewTask = (value) => {
    setNewTask(value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!newTask) {
      alert("Please enter a task");
      return;
    }
    if (tasks.includes(newTask)) {
      setNewTask("");
      alert("Task Already Exists");
      return;
    }
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setNewTask("");
    // not repeating tasks in the list
  };

  useEffect(() => {
    setInterval(() => {
      const now = new Date();
      const currentDate = now.toLocaleDateString();
      const currentTime = now.toLocaleTimeString();
      setCurrentDate(`${currentDate} - ${currentTime}`);
    }, 1000);
  }, []);

  const handleDeleteItems = (task) => {
    const updatedTasks = tasks.filter((curElem) => curElem !== task);
    setTasks(updatedTasks);
  };

  const handleClearAllItems = () => {
    setTasks([]);
  };
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header Section */}
          <section className="mb-8 text-center">
            <div className="inline-block">
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                My Tasks
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
            </div>
            <p className="text-gray-500 mt-3 text-sm">
              Stay organized and boost your productivity
            </p>
          </section>
          <section className="mb-8">
            <div className="bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 rounded-2xl p-8 shadow-lg shadow-blue-200 border border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-center gap-4">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl shadow-lg animate-pulse">
                  📅
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <p className="text-sm font-semibold text-indigo-600 mb-1 uppercase tracking-wider">
                    📍 Today's Schedule
                  </p>
                  <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    🕐 {currentDate}
                  </h3>
                </div>
              </div>
              <div className="mt-4 flex justify-center gap-3 text-sm font-medium text-gray-700">
                <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-blue-200">
                  ✨ Stay Productive
                </span>
                <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-indigo-200">
                  🎯 Complete Tasks
                </span>
              </div>
            </div>
          </section>
          {/* Add Task Form */}
          <section className="bg-white rounded-2xl shadow-lg shadow-blue-100 p-6 sm:p-8 mb-8 border border-blue-100 hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              ➕ Add New Task
            </h4>
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
          </section>

          {/* Tasks List */}
          <section className="bg-white rounded-2xl shadow-lg shadow-blue-100 p-6 sm:p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full mr-3"></span>
              Tasks ({tasks.length})
            </h3>

            {tasks.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">
                  No tasks yet. Add one to get started! 🚀
                </p>
              </div>
            ) : (
              <ul className="space-y-3">
                {tasks.map((task, index) => (
                  <li
                    key={index}
                    className="group flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 rounded-xl border border-blue-100 hover:border-blue-300 transition-all duration-200 hover:shadow-md"
                  >
                    <div className="flex items-center flex-1">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-bold mr-4 flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-gray-700 font-medium text-lg">
                        {task}
                      </span>
                    </div>
                    <div className="flex gap-2 ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <button
                        className="bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white p-2.5 rounded-lg transition-all duration-200 transform hover:scale-110 active:scale-95 shadow-md hover:shadow-lg"
                        title="Complete task"
                      >
                        <TiTick size={18} />
                      </button>
                      <button
                        className="bg-gradient-to-r from-red-400 to-rose-500 hover:from-red-500 hover:to-rose-600 text-white p-2.5 rounded-lg transition-all duration-200 transform hover:scale-110 active:scale-95 shadow-md hover:shadow-lg"
                        title="Delete task"
                        onClick={() => handleDeleteItems(task)}
                      >
                        <MdDeleteForever size={18} />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>
          {tasks.length > 0 && (
            <section className="mt-8 flex justify-center">
              <button
                className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-xl hover:shadow-2xl shadow-red-400/50 hover:shadow-red-500/70 uppercase tracking-widest text-lg"
                onClick={handleClearAllItems}
              >
                🗑️ Clear All Tasks
              </button>
            </section>
          )}

          {/* Footer Stats */}
          {tasks.length > 0 && (
            <div className="mt-8">
              <div className="bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 rounded-2xl p-6 border-2 border-blue-300 shadow-lg">
                <p className="text-center text-lg font-bold text-gray-800">
                  📊 You have{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {tasks.length}
                  </span>{" "}
                  task{tasks.length !== 1 ? "s" : ""} to complete today! 💪
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
