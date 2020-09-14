import React from "react";
import logo from "./logo.svg";
import "./App.css";
var arr = ["kale","jason",]
function App() {
  return arr.map((element) => {
    return (
      <div>
        <h2>{element}</h2>
      </div>
    )
  })
}

export default App;
