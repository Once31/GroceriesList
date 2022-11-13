import React from "react";
import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty</p>
      )}
    </main>
  );
};

export default Content;

//to pass parameter anonymous fun is used

//useState hook :

// import React from "react";
// import { useState } from "react";

// const Content = () => {
//   const [name, setName] = useState("Ajay"); // default state
//   const [count, setCount] = useState(0);

//   const handleNameChange = () => {
//     const name = ["Ajay", "Krishna", "Jayesh"];
//     const int = Math.floor(Math.random() * 3);
//     setName(name[int]);
//   };

//   const handleClick = () => {
//     console.log(count);
//   };
//   const handleClick2 = () => {
//     setCount(count + 1);
//     setCount(count + 1);
//     setCount(count + 1);
//     console.log(count);
//   };

//   const handleClick3 = () => {
//     console.log(`second count ${count}`);
//   };

//   return (
//     <main>
//       <p onDoubleClick={handleClick}>Hello {name}!</p>
//       {/* <p onDoubleClick={handleClick}>Hello {handleNameChange()}!</p> */}
//       <button onClick={handleNameChange}>Change Name</button>
//       <button onClick={handleClick2}>Click it</button>
//       <button onClick={handleClick3}>Click it</button>
//     </main>
//   );
// };

// export default Content;

//to pass parameter anonymous fun is used

//useState hook :
