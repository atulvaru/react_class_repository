import { useState } from "react";
// 🧠 Best Practice Exercise Order
// 1️⃣ Counter
// 2️⃣ Show/Hide Text
// 3️⃣ Like Button
// 4️⃣ Input Display
// 5️⃣ Character Counter
// 6️⃣ Dark Mode
// 7️⃣ Password Toggle
// 8️⃣ Todo List
// 9️⃣ Click Tracker


// 1️⃣ Counter
export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      {" "}
      <h1 className="text-3xl mb-6">{count}</h1>{" "}
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-4 py-2 m-1 rounded"
      >
        {" "}
        Increase{" "}
      </button>{" "}
      <button
        onClick={() => setCount(count - 1)}
        className="bg-blue-500 text-white px-4 py-2 m-1 rounded"
      >
        {" "}
        Decrease{" "}
      </button>{" "}
      <button
        onClick={() => setCount(0)}
        className="bg-blue-500 text-white px-4 py-2 m-1 rounded"
      >
        {" "}
        Reset{" "}
      </button>{" "}
    </>
  );
};
// 2️⃣ Show/Hide Text
export const ShowHideText = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      {" "}
      {isVisible && <p>This text is visible!</p>}{" "}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {" "}
        {isVisible ? "Hide" : "Show"} Text{" "}
      </button>{" "}
    </>
  );
}; // 3️⃣ Like Button
export const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  return (
    <>
      {" "}
      <h1 className="text-2xl mb-4">Likes: {likes}</h1>{" "}
      <button
        onClick={() => setLikes(likes + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {" "}
        Like{" "}
      </button>{" "}
    </>
  );
}; // 4️⃣ Input Display
export const InputDisplay = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      {" "}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter text..."
        className="border px-4 py-2 rounded"
      />{" "}
      <p className="mt-2">You entered: {inputValue}</p>{" "}
    </>
  );
}; // 5️⃣ Character Counter
export const CharacterCounter = () => {
  const [text, setText] = useState("");
  return (
    <>
      {" "}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border px-4 py-2 rounded"
        placeholder="Type something..."
      />{" "}
      <p className="mt-2">Characters: {text.length}</p>{" "}
    </>
  );
}; // 6️⃣ Dark Mode
export const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <section
      className={`min-h-screen flex flex-col items-center justify-center ${isDarkMode ? "bg-gray-900" : "bg-gray-100"}`}
    >
      {" "}
      <h1
        className={`text-3xl mb-6 ${isDarkMode ? "text-white" : "text-black"}`}
      >
        {" "}
        {isDarkMode ? "Dark Mode ON" : "Light Mode ON"}{" "}
      </h1>{" "}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        {" "}
        Toggle Mode{" "}
      </button>{" "}
    </section>
  );
}; // 7️⃣ Password Toggle
export const PasswordToggle = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      {" "}
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter password"
        className="border px-4 py-2 rounded"
      />{" "}
      <button
        onClick={() => setShowPassword(!showPassword)}
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        {" "}
        {showPassword ? "Hide" : "Show"}{" "}
      </button>{" "}
    </>
  );
}; // 8️⃣ Todo List
export const TodoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };
  return (
    <>
      {" "}
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task..."
        className="border px-4 py-2 rounded"
      />{" "}
      <button
        onClick={addTask}
        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        {" "}
        Add{" "}
      </button>{" "}
      <ul className="mt-4">
        {" "}
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}{" "}
      </ul>{" "}
    </>
  );
}; // 9️⃣ Click Tracker
export const ClickTracker = () => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const [countC, setCountC] = useState(0);
  return (
    <>
      <h1 className="text-3xl mb-6">Click Tracker</h1>
      <div className="flex gap-4">
        <button
          onClick={() => setCountA(countA + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {" "}
          Button A: {countA}{" "}
        </button>
        <button
          onClick={() => setCountB(countB + 1)}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          {" "}
          Button B: {countB}{" "}
        </button>
        <button
          onClick={() => setCountC(countC + 1)}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          {" "}
          Button C: {countC}{" "}
        </button>
      </div>{" "}
    </>
  );
};
