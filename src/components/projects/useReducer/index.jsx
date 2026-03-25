import { useReducer } from "react";

export const ReducerExample = () => {
  const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
      return state + 1;
    }
    if (action.type === "DECREMENT") {
      return state - 1;
    }
    if (action.type === "RESET") {
      return 0;
    }
    return state;
  };
  
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md transform transition-all duration-300 hover:shadow-2xl">
        {/* Counter Display */}
        <div className="text-center mb-8">
          <h1 className="text-6xl md:text-7xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            {count}
          </h1>
          <p className="text-gray-500 text-sm">Current Value</p>
        </div>

        {/* Button Container */}
        <div className="flex gap-4 justify-center">
          {/* Decrement Button */}
          <button
            onClick={() => dispatch({ type: "DECREMENT" })}
            className={`
              group
              relative
              px-6 
              py-3 
              rounded-xl 
              font-semibold 
              text-lg 
              transition-all 
              duration-300 
              ease-in-out
              transform 
              hover:scale-105 
              active:scale-95
              shadow-md
              hover:shadow-lg
              ${count <= 0 
                ? "bg-gray-300 cursor-not-allowed opacity-50 hover:scale-100" 
                : "bg-red-500 hover:bg-red-600 text-white"
              }
            `}
            disabled={count <= 0}
          >
            <span className="flex items-center gap-2">
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M20 12H4" 
                />
              </svg>
              Decrement
            </span>
          </button>

          {/* Increment Button */}
          <button
            onClick={() => dispatch({ type: "INCREMENT" })}
            className="
              group
              relative
              px-6 
              py-3 
              rounded-xl 
              font-semibold 
              text-lg 
              transition-all 
              duration-300 
              ease-in-out
              transform 
              hover:scale-105 
              active:scale-95
              shadow-md
              hover:shadow-lg
              bg-green-500 
              hover:bg-green-600 
              text-white
            "
          >
            <span className="flex items-center gap-2">
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 4v16m8-8H4" 
                />
              </svg>
              Increment
            </span>
          </button>
        </div>

        {/* Reset Button (Optional) */}
        <div className="mt-6 text-center">
          <button
            onClick={() => dispatch({ type: "RESET" })}
            className="
              text-sm
              px-4
              py-2
              rounded-lg
              text-gray-500
              hover:text-gray-700
              transition-colors
              duration-200
              border
              border-gray-300
              hover:border-gray-400
            "
          >
            Reset to Zero
          </button>
        </div>
      </div>
    </div>
  );
};