import { useRef } from "react";
import "./index.css"

export const LearnUseRef = () => {
  const username = useRef(null);
  const password = useRef(null);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, password.current.value);
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        placeholder="username"
        id="username"
        ref={username}
      />
      <input
        type="password"
        placeholder="password"
        id="password"
        ref={password}
      />
      <button>Submit</button>
    </form>
  );
};
