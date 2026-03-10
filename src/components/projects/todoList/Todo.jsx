import { useState } from "react";
import { TodoDate } from "./TodoDate";
import { TodoHeader } from "./TodoHeader";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { DarkModeProvider, useDarkMode } from "./DarkModeContext";
import { setLocalStorageTodoData , getTodoLocalStorageData} from "./TodoLocalStorage";

const TodoContent = () => {
  const { isDarkMode } = useDarkMode();
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState(() => getTodoLocalStorageData());

  // Update localStorage whenever tasks change
  setLocalStorageTodoData(tasks);
  

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

  const handleDeleteItems = (task) => {
    const updatedTasks = tasks.filter((curElem) => curElem !== task);
    setTasks(updatedTasks);
  };

  const handleClearAllItems = () => {
    setTasks([]);
  };
  return (
    <>
      <div className={`min-h-screen transition-colors duration-300 py-8 px-4 sm:px-6 lg:px-8 ${
        isDarkMode
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
          : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
      }`}>
        <div className="max-w-2xl mx-auto">
          <TodoHeader />
          <TodoDate />
          {/* Add Task Form */}
          <TodoForm
            newTask={newTask}
            handleNewTask={handleNewTask}
            handleOnSubmit={handleOnSubmit}
          />

          {/* Tasks List */}
          <section className={`rounded-2xl shadow-lg p-6 sm:p-8 border transition-all duration-300 ${
            isDarkMode
              ? "bg-slate-800 shadow-slate-900 border-slate-700"
              : "bg-white shadow-blue-100 border-blue-100"
          }`}>
            <h3 className={`text-2xl font-bold mb-6 flex items-center ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}>
              <span className="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full mr-3"></span>
              Tasks ({tasks.length})
            </h3>

            {tasks.length === 0 ? (
              <div className="text-center py-12">
                <p className={`text-lg ${
                  isDarkMode ? "text-slate-400" : "text-gray-400"
                }`}>
                  No tasks yet. Add one to get started! 🚀
                </p>
              </div>
            ) : (
              <ul className="space-y-3">
                {tasks.map((task, index) => (
                  <TodoList
                    key={index}
                    task={task}
                    index={index}
                    handleDeleteItems={handleDeleteItems}
                  />
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
              <div className={`bg-gradient-to-r rounded-2xl p-6 border-2 shadow-lg ${
                isDarkMode
                  ? "from-slate-800 via-slate-700 to-slate-800 border-slate-600"
                  : "from-blue-100 via-indigo-100 to-purple-100 border-blue-300"
              }`}>
                <p className={`text-center text-lg font-bold ${
                  isDarkMode ? "text-slate-100" : "text-gray-800"
                }`}>
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

export const Todo = () => {
  return (
    <DarkModeProvider>
      <TodoContent />
    </DarkModeProvider>
  );
};
