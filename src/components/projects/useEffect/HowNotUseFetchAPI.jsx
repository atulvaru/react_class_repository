// import { useState } from "react";
// export const NotUseFetch = () => {

//     // using this method continuously memory using  
//   const [Data, setData] = useState([]);
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => res.json())
//     // .then((data) => console.log(data))
//     .then((data) => setData(data))
//     .catch((error) => console.log(error));
//   return (
//     <>
//       <div>
//         {" "}
//         Data:
//         {Data.map((curElem) => {
//           return <li key={curElem.id}>{curElem.title}</li>;
//         })}
//       </div>
//     </>
//   );
// };

// export default NotUseFetch;
