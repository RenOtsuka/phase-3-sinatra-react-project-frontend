import React, {useState} from "react";
import EditItem from "./EditItem";

function ToDoItem({id, task, category_id, categoryObj, onDeleteItem, onEditItem}){

    const [editToggle, setEditToggle] = useState(false);
    
    function deleteItem(){
        fetch(`http://localhost:9292/todos/${id}`, {
            method: "DELETE",
        });
        onDeleteItem(id);
    }

    function handleEditItem(editedItem){
        setEditToggle(false);
        onEditItem(editedItem);
    }   

    function toggle(){
        setEditToggle((editToggle) => !editToggle)
    }

    return(
        <div className="ListItem">
            {editToggle ? (
            <EditItem 
                id={id} 
                task={task}
                category_id={category_id}
            
                editItem={handleEditItem}/>
            ) : (
                <div className="body">
                    <p>{task}</p>
                    <p>{categoryObj.name}</p>
                    <br/>
                    <button className="editButton" onClick={toggle}>Edit</button>
                    <button className="deleteButton" onClick={deleteItem}>Delete</button>
                    <hr/>
                </div> 
                
            )}
            
        </div>
    )
}

export default ToDoItem;