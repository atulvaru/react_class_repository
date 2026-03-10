import { useState, useEffect } from "react";
import { useDarkMode } from "./DarkModeContext";

export const TodoDate = () => {
  const { isDarkMode } = useDarkMode();
  const [currentDate, setCurrentDate] = useState("");
  useEffect(() => {
    setInterval(() => {
      const now = new Date();
      const currentDate = now.toLocaleDateString();
      const currentTime = now.toLocaleTimeString();
      setCurrentDate(`${currentDate} - ${currentTime}`);
    }, 1000);
  }, []);
  return (
    <section className="mb-6 sm:mb-8">
      <div className={`bg-gradient-to-r rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg border hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
        isDarkMode
          ? "from-slate-800 via-slate-700 to-slate-800 shadow-slate-900 border-slate-700"
          : "from-blue-100 via-indigo-100 to-purple-100 shadow-blue-200 border-blue-200"
      }`}>
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 sm:gap-4 md:gap-6">
          <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl shadow-lg animate-pulse flex-shrink-0">
            📅
          </div>
          <div className="flex-1 text-center sm:text-left w-full">
            <p className={`text-xs sm:text-sm font-semibold mb-1 uppercase tracking-wider ${
              isDarkMode ? "text-indigo-400" : "text-indigo-600"
            }`}>
              📍 Today's Schedule
            </p>
            <h3 className={`text-xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent break-words ${
              isDarkMode
                ? "from-blue-400 via-indigo-400 to-purple-400"
                : "from-blue-600 via-indigo-600 to-purple-600"
            }`}>
              🕐 {currentDate}
            </h3>
          </div>
        </div>
        <div className={`hidden sm:flex mt-4 sm:mt-5 md:mt-6 flex-col sm:flex-row justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium ${
          isDarkMode ? "text-slate-300" : "text-gray-700"
        }`}>
          <span className={`px-3 sm:px-4 py-2 rounded-full shadow-sm border text-center ${
            isDarkMode
              ? "bg-slate-700 border-slate-600"
              : "bg-white border-blue-200"
          }`}>
            ✨ Stay Productive
          </span>
          <span className={`px-3 sm:px-4 py-2 rounded-full shadow-sm border text-center ${
            isDarkMode
              ? "bg-slate-700 border-slate-600"
              : "bg-white border-indigo-200"
          }`}>
            🎯 Complete Tasks
          </span>
        </div>
      </div>
    </section>
  );
};
