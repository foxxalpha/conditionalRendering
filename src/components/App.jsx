import React from "react";
import Form from "./Login";

var isLoggedIn = false;

// function renderConditionally() {
//   if (isLoggedIn) {
//     return <h1>Hello</h1>;
//   } else {
//     return <Form />;
//   }
// }

function App() {
  return (
    <div className="container">{isLoggedIn ? <h1>Hello</h1> : <Form />}</div>
  );
}

export default App;
