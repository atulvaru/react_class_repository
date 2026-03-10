
import { useDarkMode } from "./DarkModeContext";

export const TodoHeader = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <section className={`mb-8 sm:mb-12 rounded-2xl p-5 sm:p-8 transition-all duration-300 ${
      isDarkMode
        ? "bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-700"
        : "bg-gradient-to-br from-blue-50/80 to-indigo-50/80 border border-blue-200"
    }`}>
      {/* Top Section: Title + Toggle Button */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
        <div className="flex-1 text-center sm:text-left w-full sm:w-auto">
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
            <span className="text-3xl sm:text-4xl animate-bounce">✅</span>
            <h2 className={`text-3xl sm:text-5xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${
              isDarkMode
                ? "from-blue-400 via-indigo-400 to-purple-400"
                : "from-blue-600 via-indigo-600 to-purple-600"
            }`}>
              My Tasks
            </h2>
          </div>
          <div className={`h-1.5 w-32 sm:w-40 bg-gradient-to-r rounded-full mb-3 mx-auto sm:mx-0 ${
            isDarkMode
              ? "from-blue-400 to-purple-400"
              : "from-blue-500 to-purple-500"
          }`}></div>
          <p className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${
            isDarkMode ? "text-slate-300" : "text-gray-600"
          }`}>
            📌 Organize • 🎯 Focus • ✨ Achieve
          </p>
        </div>

        {/* Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className={`px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl min-h-14 sm:min-h-12 flex items-center justify-center sm:justify-start gap-2 border-2 whitespace-nowrap ${
            isDarkMode
              ? "bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white border-slate-500 shadow-slate-900/50"
              : "bg-gradient-to-r from-yellow-300 to-orange-400 hover:from-yellow-400 hover:to-orange-500 text-white border-yellow-400 shadow-yellow-300/50"
          }`}
        >
          <span className="text-xl sm:text-2xl">{isDarkMode ? "🌙" : "☀️"}</span>
          <span className="text-sm sm:text-base font-semibold">{isDarkMode ? "Dark" : "Light"}</span>
        </button>
      </div>

      {/* Bottom Section: Subtitle */}
      <div className="mt-4 sm:mt-5 pt-4 sm:pt-5 border-t border-opacity-30"
           style={{ borderColor: isDarkMode ? 'rgb(71, 85, 105, 0.3)' : 'rgb(59, 130, 246, 0.2)' }}>
        <p className={`text-xs sm:text-sm text-center sm:text-left transition-colors duration-300 font-medium tracking-wide ${
          isDarkMode ? "text-slate-400" : "text-gray-600"
        }`}>
          🚀 Stay organized and boost your productivity today!
        </p>
      </div>
    </section>
  );
};
