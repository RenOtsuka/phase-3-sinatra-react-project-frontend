import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({list}){
    toDoList = list.map( item => (
        <ToDoItem
        key={item.id}
        id={item.id}
        task={item.task}
        category_id={item.category_id}
        completed={item.completed}
        onDeleteItem={onDeleteItem}
        />
    ))
}

export default ToDoList;