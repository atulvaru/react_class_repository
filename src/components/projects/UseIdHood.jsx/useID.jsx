import { useId } from "react";

export const UseId = () => {
//   const username = useId();
//   const password = useId();
//   const email = useId();

//   const handleOnSubmit = (e) => {
//     e.preventDefault();
//   };
//   return (
//     <form onSubmit={handleOnSubmit}>
//       <div>
//         <label htmlFor={username}>Username:</label>
//         <input
//           id={username}
//           type="text"
//           name="username"
//           placeholder="Enter your name"
//         />
//       </div>
//       <div>
//         <label htmlFor={password}>Password:</label>
//         <input
//           id={password}
//           type="password"
//           name="password"
//           placeholder="Enter your password"
//         />
//       </div>
//       <div>
//         <label htmlFor={email}>Email:</label>
//         <input
//           id={email}
//           type={email}
//           name="email"
//           placeholder="Enter your email"
//         />
//       </div>
//       <button>Submit</button>
//     </form>
//   );
const id = useId();

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        <label htmlFor={id+ "username"}>Username:</label>
        <input
          id={id+ "username"}
          type="text"
          name="username"
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label htmlFor={id+"password"}>Password:</label>
        <input
          id={id+"password"}
          type="password"
          name="password"
          placeholder="Enter your password"
        />
      </div>
      <div>
        <label htmlFor={id+"email"}>Email:</label>
        <input
          id={id+"email"}
          type="email"
          name="email"
          placeholder="Enter your email"
        />
      </div>
      <button>Submit</button>
    </form>
  );
};
