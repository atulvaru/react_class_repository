import { useState } from "react";
export const State = () => {

    const [counter, setCounter] = useState(0);

    const handleIncrement = () =>{
        setCounter(counter + 1);
        console.log(counter);
    }
  return (
    <>
      <section className="">
        <h1>{ counter}</h1>
        <button
          className="btn btn-primary text-white bg-blue-500 hover:bg-blue-600"
          onClick={handleIncrement}
        >
          Increase
        </button>
      </section>
    </>
  );
};
