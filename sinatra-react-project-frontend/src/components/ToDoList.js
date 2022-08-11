import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({list, onDeleteItem, onEditItem}){

    // console.log(list)

    const toDoList = list.map( item => (
        <ToDoItem
        key={item.id}
        id={item.id}
        task={item.task}
        category_id={item.category_id}
        categoryObj={item.category}
        onDeleteItem={onDeleteItem}
        onEditItem={onEditItem}
        />
    ))
    return (
        <ul className="toDoList">{toDoList}</ul>
    )
}

export default ToDoList;