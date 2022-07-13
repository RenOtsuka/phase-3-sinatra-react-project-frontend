import React, {useState} from "react";

function ToDoItem({id, task, category, completed, onDeleteItem}){
    
    function deleteItem(){
        fetch(`http://localhost:9292/todos/${id}`, {
            method: "DELETE",
        });

        onDeleteItem(id);
    }

    return(
        <div className="ListItem">
            <p>{task}</p>
            <p>{category}</p>
            <p>{completed}</p>
            <button onClick={deleteItem}/>
        </div>
    )
}

export default ToDoItem;