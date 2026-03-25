import { useState } from "react";
import Counts  from "./MemoCount";

export const ReactMemo = () => {
  const [count, setCount] = useState(0);
  return <section>
    <div>
        {count}
    </div>
    <button onClick={()=> setCount(count+1)}>Increase</button>
    <Counts/>
  </section>;
};
