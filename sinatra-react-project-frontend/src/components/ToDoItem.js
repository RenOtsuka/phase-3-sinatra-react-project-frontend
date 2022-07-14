import React, {useState} from "react";
import EditItem from "./EditItem";

function ToDoItem({id, task, category, completed, onDeleteItem, onEditItem}){

    const [editToggle, setEditToggle] = useState(false);
    
    function deleteItem(){
        fetch(`http://localhost:9292/todos/${id}`, {
            method: "DELETE",
        });

        onDeleteItem(id);
    }

    function editItem(editedItem){
        setEditToggle(false);
        onEditItem(editedItem);
    }   

    return(
        <div className="ListItem">
            {editToggle ? (
            <EditItem 
                id={id} 
                task={task} 
                category={category} 
                completed={completed}
                editItem={editItem}/>
            ) : (
                <div className="body">
                    <p>{task}</p>
                    <p>{category}</p>
                    <p>{completed}</p>
                </div>
            )}
            <button onClick={editItem}>Edit</button>
            <button onClick={deleteItem}>Delete</button>
        </div>
    )
}

export default ToDoItem;