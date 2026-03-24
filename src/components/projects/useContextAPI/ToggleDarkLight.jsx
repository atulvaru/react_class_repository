
import { ToggleCustom } from "./ToggleCustom";

export const ToggleDarkLight = () => {
  const { theme, handleOnClick } = ToggleCustom();

  return (
    <div className={`
      min-h-screen 
      transition-all 
      duration-300 
      ease-in-out
      ${theme === "dark" 
        ? "bg-gradient-to-br from-blue-950 via-blue-900 to-gray-900 text-amber-50" 
        : "bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 text-gray-900"
      }
    `}>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Main Content */}
          <div className="space-y-4">
            <h1 className={`
              text-5xl 
              md:text-7xl 
              font-bold 
              tracking-tight 
              animate-fade-in
              ${theme === "dark" 
                ? "bg-gradient-to-r from-amber-200 to-yellow-200 bg-clip-text text-transparent" 
                : "bg-gradient-to-r from-blue-800 to-indigo-800 bg-clip-text text-transparent"
              }
            `}>
              Welcome
            </h1>
            
            <h2 className={`
              text-2xl 
              md:text-3xl 
              font-medium 
              opacity-90
              ${theme === "dark" ? "text-amber-100" : "text-gray-700"}
            `}>
              Theme Toggle Demo
            </h2>
            
            <p className="text-lg opacity-80 mt-4">
              {theme === "dark" 
                ? "🌙 You're in dark mode - easier on the eyes!" 
                : "☀️ You're in light mode - bright and clean!"
              }
            </p>
          </div>

          {/* Toggle Button */}
          <button
            onClick={handleOnClick}
            className={`
              group
              relative
              px-8 
              py-4 
              rounded-full 
              font-semibold 
              text-lg 
              transition-all 
              duration-300 
              ease-in-out
              transform 
              hover:scale-105 
              active:scale-95
              shadow-lg
              ${theme === "dark" 
                ? "bg-amber-500 hover:bg-amber-400 text-gray-900 shadow-amber-500/30" 
                : "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/30"
              }
            `}
          >
            <span className="flex items-center gap-2">
              {theme === "dark" ? (
                <>
                  <span>🌞</span>
                  <span>Switch to Light Mode</span>
                </>
              ) : (
                <>
                  <span>🌙</span>
                  <span>Switch to Dark Mode</span>
                </>
              )}
            </span>
          </button>

          {/* Additional Content */}
          <div className={`
            mt-12 
            p-6 
            rounded-2xl 
            backdrop-blur-sm 
            transition-all 
            duration-300
            ${theme === "dark" 
              ? "bg-blue-900/50 border border-blue-800" 
              : "bg-white/80 border border-amber-200 shadow-lg"
            }
          `}>
            <p className="text-sm opacity-75">
              Current Theme: <span className="font-semibold">{theme === "dark" ? "Dark Mode" : "Light Mode"}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};