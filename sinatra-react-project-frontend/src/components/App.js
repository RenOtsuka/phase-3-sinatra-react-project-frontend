import React from "react"
import './App.css'
import Header from "./Header";
import ToDoListDisplay from "./ToDoListDisplay";

function App() {
  return (
    <div className="App">
      <Header/>
      <ToDoListDisplay/>
    </div>
  );
}

export default App;
