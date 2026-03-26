import { useMemo, useState } from "react";

const ExpensiveComponent = () => {
  const sum = () => {
    console.log("Calculating sum....");
    let i = 0;
    for (i = 0; i <= 100; i++) {
      i = i + 1;
    }
    return i;
  };

  const total = useMemo(() => {
    return sum();
  }, []);

  return <p>sum: {total}</p>;
};

export const MemoParentComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <ExpensiveComponent />
      <button onClick={() => setCount(count + 1)}>Re-render Parent</button>
      <p>Parent re-render : {count}</p>
    </div>
  );
};
