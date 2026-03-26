/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useCallback, useState } from "react";

const Button = memo(({ onClick, children }) => {
  console.log(`Rendering Button: ${children}`);
  return (
    <button
      onClick={onClick}
      className="
        px-6 py-2 rounded-xl font-semibold text-white
        transition-all duration-300 transform
        hover:scale-105 active:scale-95
        shadow-md hover:shadow-lg
        bg-blue-500 hover:bg-blue-600
      "
    >
      {children}
    </button>
  );
});

export default function UseCallBackFunction() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    console.log("Increase inside");
    setCount((prevCount) => prevCount + 1);
  }, []);

  const decrement = useCallback(() => {
    console.log("decrease inside");
    setCount((prevCount) => prevCount - 1);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center space-y-6">
        
        {/* Counter */}
        <h1 className="text-5xl font-bold text-gray-800">{count}</h1>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <Button onClick={increment}>Increment</Button>
          <Button onClick={decrement}>Decrement</Button>
        </div>

      </div>
    </div>
  );
}