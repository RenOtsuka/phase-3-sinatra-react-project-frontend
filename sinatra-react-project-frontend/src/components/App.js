import React, { useState, useEffect } from "react";
import './App.css'
import {Route, Switch} from "react-router-dom";
import NavBar from "./NavBar";
import ToDoListDisplay from "./ToDoListDisplay";
import CategoryPage from "./CategoryPage";


function App() {

  const [categoryList, setCategoryList] = useState([]);
  const [toDoList, setToDoList] = useState([]);



  useEffect(() => {
    fetch(`http://localhost:9292/categories`)
    .then((r) => r.json())
    .then((data) => setCategoryList(data))
    .catch(error => alert(error));
  },[]);


  useEffect(() => {
        fetch("http://localhost:9292/todos")
        .then((r) => r.json())
        .then((data) => setToDoList(data))
        .catch(error => alert(error));
  },[]);


  return (
    <div className="App">
      <NavBar/> 
      <Switch>
        <Route exact path="/todos"><ToDoListDisplay categoryList={categoryList} toDoList={toDoList} setToDoList={setToDoList}/></Route>
        <Route exact path="/categories"><CategoryPage categoryList={categoryList} setCategoryList={setCategoryList} toDoList={toDoList}/></Route>
      </Switch>     
      {/* <ToDoListDisplay categoryList={categoryList} toDoList={toDoList} setToDoList={setToDoList}/>
      <CategoryPage categoryList={categoryList} setCategoryList={setCategoryList} toDoList={toDoList}/> */}

    </div>
  );
}

export default App;
