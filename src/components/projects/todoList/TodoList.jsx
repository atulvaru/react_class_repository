import { useState } from "react";
import { TiTick } from "react-icons/ti";
import { MdDeleteForever } from "react-icons/md";
import { useDarkMode } from "./DarkModeContext";

export const TodoList = ({ task, index, handleDeleteItems }) => {
  const { isDarkMode } = useDarkMode();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckTask = () => {
    setIsChecked(!isChecked);
  };

  return (
    <li
      key={index}
      className={`group flex items-center justify-between p-4 rounded-xl border transition-all duration-200 hover:shadow-md ${
        isDarkMode
          ? "bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-700 hover:to-slate-700 border-slate-600 hover:border-slate-500"
          : "bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 border-blue-100 hover:border-blue-300"
      }`}
    >
      <div className="flex items-center flex-1">
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-bold mr-4 flex-shrink-0">
          {index + 1}
        </span>
        <span
          className={`text-lg font-medium transition-all duration-300 ${
            isChecked
              ? isDarkMode ? "line-through text-slate-500" : "line-through text-gray-400"
              : isDarkMode ? "text-slate-100" : "text-gray-700"
          }`}
        >
          {task}
        </span>
      </div>
      <div className="flex gap-2 ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <button
          className={`text-white p-2.5 rounded-lg transition-all duration-200 transform hover:scale-110 active:scale-95 shadow-md hover:shadow-lg ${
            isChecked
              ? "bg-gradient-to-r from-blue-400 to-cyan-500 hover:from-blue-500 hover:to-cyan-600"
              : "bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600"
          }`}
          title={isChecked ? "Mark incomplete" : "Complete task"}
          onClick={handleCheckTask}
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
  );
};
