import { useState } from "react";

export const LiftingState = () => {
  const [count, setCount] = useState("");
  return (
    <>
      <h2>Lifting State Example</h2>
      <InputComponent count={count} setCount={setCount} />
      <OutputComponent count={count} />
    </>
  );
};
const InputComponent = ({ count, setCount }) => {
  return (
    <>
      <input
        type="text"
        value={count}
        onChange={(e) => setCount(e.target.value)}
        className="border p-2 mb-4"
        placeholder="Type something..."
      />
    </>
  );
};

const OutputComponent = ({ count }) => {
  return (
    <>
      <p>This is the output: {count}</p>
    </>
  );
};
