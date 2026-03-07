import { useState } from "react";

export const MiniToggle = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <>
      <div
        className={`w-[6rem] h-[3rem] mx-auto rounded-full flex items-center cursor-pointer border-2 border-gray-400 px-1 transition-colors duration-300 
            ${isOn ? "bg-green-500" : "bg-gray-300"}`}
        onClick={() => setIsOn(!isOn)}
      >
        <div
          className={`w-[2.5rem] h-[2.5rem] bg-white rounded-full flex items-center border-2 border-gray-400 justify-center text-black font-semibold transform transition-transform duration-300 ${
            isOn ? "translate-x-12" : "translate-x-0"
          }`}
        >
          {isOn ? "ON" : "OFF"}
        </div>
      </div>
    </>
  );
};
