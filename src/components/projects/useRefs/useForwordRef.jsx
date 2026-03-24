import { useId, useRef } from "react";
import "./index.css"

export const ForwordRefDemo = () => {
  const username = useRef(null);
  const password = useRef(null);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, password.current.value);
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <BeforeReact19 label="username" type="text" ref={username} />
      <BeforeReact19 label="password" type= "password" ref={password} />
      <button>submit</button>
    </form>
  );
};

// const BeforeReact19 = forwardRef(({ label, type="text" }, ref) => {
//   const id = useId();

//   return (
//     <div>
//       <label htmlFor={id}>{label}</label>
//       <input
//         type={type}
//         id={id}
//         ref={ref}   // forward the ref to the actual DOM input
//       />
//     </div>
//   );
// });


// after react 19 
const BeforeReact19 = ({label,type,ref}) => {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        ref={ref}   // forward the ref to the actual DOM input
      />
    </div>
  );
};