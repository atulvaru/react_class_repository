import { useState } from "react";

// const users =[
//     {name: "Atul", age: 25},
//     {name: "Alice", age: 30},
//     {name: "Bob", age: 28},
//     {name: "Charlie", age: 22},
//     {name: "David", age: 35}
// ];

export const DerivedState = () => {
  const [users, setUsers] = useState([
    { name: "Atul", age: 25 },
    { name: "Alice", age: 30 },
    { name: "Bob", age: 28 },
    { name: "Charlie", age: 22 },
    { name: "David", age: 35 },
    { name: "amit", age: 35 },
  ]);
  return (
    <>
      <div>
        <h1 className="text-3xl mb-6">User List</h1>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.name} - {user.age} year old
            </li>
          ))}
        </ul>
        <p>Total users : {users.length}</p>
        <p>
          Average age :{" "}
          {users.reduce((sum, user) => sum + user.age, 0) / users.length || 0}
        </p>
      </div>
    </>
  );
};
