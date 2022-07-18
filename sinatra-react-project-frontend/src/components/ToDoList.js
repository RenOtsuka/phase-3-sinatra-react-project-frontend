import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({list, onDeleteItem, onEditItem}){
    const toDoList = list.map( item => (
        <ToDoItem
        key={item.id}
        id={item.id}
        task={item.task}
        category={item.category_name}
        completed={item.completed}
        onDeleteItem={onDeleteItem}
        onEditItem={onEditItem}
        />
    ))
    return (
        <ul className="toDoList">{toDoList}</ul>
    )
}

export default ToDoList;