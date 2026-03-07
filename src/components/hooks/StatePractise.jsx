// 🧠 Best Practice Exercise Order

import { useState } from "react";

// Do them in this order:

// 1️⃣ Counter
// 2️⃣ Show/Hide Text
// 3️⃣ Like Button
// 4️⃣ Input Display
// 5️⃣ Character Counter
// 6️⃣ Dark Mode
// 7️⃣ Password Toggle
// 8️⃣ Todo List
// 9️⃣ Click Tracker 

// 9️⃣ Click Tracker

export const StatePractise = () => {
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);
    const [countC, setCountC] = useState(0);

    return (
        <>
        <h1 className="text-center text-4xl md:text-4xl sm:text-3xl mb-10 text-slate-50">Click Tracker</h1>
        <div className="flex justify-center space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setCountA(countA + 1)}>
                Button A: {countA}
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => setCountB(countB + 1)}>
                Button B: {countB}
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => setCountC(countC + 1)}>
                Button C: {countC}
            </button>
        </div>
        </>
    )

}

// 8️⃣ Todo List
// export const StatePractise = () => {
//   const [task, setTask] = useState("");
//   const [tasks, setTasks] = useState([]);
//   const handleTodoChange = (event) => {
//     setTask(event.target.value);
//   };
//   const handleAddTodo = () => {
//     if (task.trim() !== "") {
//       setTasks([...tasks, task]);
//       setTask("");
//     }
//   };
//   return (
//     <>
//       <div>
//         <input
//           type="text"
//           value={task}
//           onChange={handleTodoChange}
//           onKeyDown={(event) => {
//             if (event.key === "Enter") {
//               handleAddTodo();
//             }
//           }}
//           placeholder="Enter a task..."
//         />
//         <button
//           onClick={handleAddTodo}
//         >
//           Add Task
//         </button>
//         <ul>
//           {tasks.map((t, index) => (
//             <li key={index}>{t}</li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// 7️⃣ Password Toggle
// export const StatePractise = () => {
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//   const togglePasswordVisibility = () => {
//     setIsPasswordVisible(!isPasswordVisible);
//   };
//   return (
//     <>
//       <input
//         type={isPasswordVisible ? "text" : "password"}
//         placeholder="Enter your password"
//       />
//       <button
//         onClick={togglePasswordVisibility}
//         className="ml-2 px-4 py-2 rounded bg-blue-500 text-white"
//       >
//         {isPasswordVisible ? "Hide" : "Show"} Password
//       </button>
//     </>
//   );
// };

// 6️⃣ Dark Mode
// export const StatePractise = () => {
//   const [IsDardMode, setIsDarkMode] = useState(false);
//   const toggleDarkMode = () => {
//     setIsDarkMode(!IsDardMode);
//   };
//   return (
//     <>
//       <section className={`min-h-screen flex flex-col items-center justify-center ${IsDardMode ? "bg-gray-900" : "bg-gray-100"}`}>
//         <h1
//           className={`text-center text-4xl md:text-4xl sm:text-3xl mb-10 ${IsDardMode ? "text-white" : "text-black"}`}
//         >
//           {IsDardMode ? "Dark Mode is ON " : "Light Mode is ON "}
//         </h1>

//         <button onClick={toggleDarkMode} className={`px-4 py-2 rounded ${IsDardMode ? "bg-yellow-500 text-black" : "bg-gray-800 text-white"}`}>
//           Toggle Dark Mode
//         </button>
//       </section>
//     </>
//   );
// };

// 5️⃣ Character Counter
// export const StatePractise = () =>{
//     const [text, setText]= useState("");
//     const handleChange = (event) => {
//         setText(event.target.value);
//     }
//     return (
//         <>
//         <textarea
//             value={text}
//             onChange={handleChange}
//             placeholder="Type something..."
//             className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <p className="mt-2 text-lg">Character Count: {text.length}</p>
//         </>
//     )
// }

//  // 1️⃣ Counter
// export const StatePractise = () => {
//     const [count, setCount] = useState(0);
//     const handleClickInc = () => {
//         setCount(count + 1);
//     };
//     const handleClickDec = () => {
//         setCount(count - 1);
//     };
//     const handleClickReset = () => {
//         setCount(0);
//     };
//   return (
//     <>
//       <h1 className="text-center text-4xl md:text-4xl sm:text-3xl mb-10 text-slate-50">
//         {count}
//       </h1>
//       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClickInc}>
//         Increase
//       </button>
//       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClickDec}>
//         Decrease
//       </button>
//       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClickReset}>
//         Reset
//       </button>
//     </>
//   );
// };

// 2️⃣ Show/Hide Text

// export const StatePractise = () => {
//   const [isVisible, setIsVisible] = useState(true);
//   const toggleVisibility = () => {
//     setIsVisible(!isVisible);
//   };
//   return (
//     <>
//       {isVisible && <p>This text is visible!</p>}
//       <button
//         onClick={toggleVisibility}
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//       >
//         {isVisible ? "Hide" : "Show"} Text
//       </button>
//     </>
//   );
// };

// 3️⃣ Like Button
// export const StatePractise = () => {
//     const [likes, setlikes] = useState(0);
//     const handleLike = () =>{
//         setlikes(likes+1);
//     }

//     return (
//         <>
//         <h1 className="text-center text-4xl md:text-4xl sm:text-3xl mb-10 text-slate-50">
//          Likes: {likes}
//         </h1>
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleLike}>
//          Like
//        </button>
//        </>
//     );
// }

// 4️⃣ Input Display
// export const StatePractise = () => {
//     const [inputValue, setInputValue] = useState("");
//     const handleInputChange = (event) => {
//         setInputValue(event.target.value);
//     }
//     return (
//         <>
//         <input
//             type="text"
//             value={inputValue}
//             onChange={handleInputChange}
//             placeholder="Enter text here..."
//             className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <p className="mt-2 text-lg">You entered: {inputValue}</p>
//         </>
//     )
// }
