import { useDarkMode } from "./DarkModeContext";

export const TodoForm = ({ newTask, handleNewTask, handleOnSubmit }) => {
  const { isDarkMode } = useDarkMode();
  return (
    <section className={`rounded-2xl shadow-lg p-6 sm:p-8 mb-8 border hover:shadow-xl transition-shadow duration-300 ${
      isDarkMode
        ? "bg-slate-800 shadow-slate-900 border-slate-700"
        : "bg-white shadow-blue-100 border-blue-100"
    }`}>
      <h4 className={`text-xl font-bold mb-4 flex items-center gap-2 ${
        isDarkMode ? "text-white" : "text-gray-800"
      }`}>
        ➕ Add New Task
      </h4>
      <form onSubmit={handleOnSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="text"
            value={newTask}
            onChange={(e) => handleNewTask(e.target.value)}
            placeholder="Add a new task..."
            className={`w-full px-5 py-3 border-2 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
              isDarkMode
                ? "bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                : "bg-white border-gray-200 text-gray-700 placeholder-gray-400"
            }`}
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
  );
};
