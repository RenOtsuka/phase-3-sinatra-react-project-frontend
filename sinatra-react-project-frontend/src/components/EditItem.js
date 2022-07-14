import React, { useState } from "react";


function EditItem({id, task, category, completed, editItem}){

    const [editTask, setEditTask] = useState(task);
    const [editCategory, setEditCategory] = useState(category);
    const [editStatus, setEditStatus] = useState(completed);

    function handleEdit(e){
        e.preventDefault();

        fetch(`http://localhost:9292/todos/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
              },
              body: JSON.stringify({
                task: editTask,
                category: editCategory,
                completed: editStatus,
              }),
        })
        .then(r => r.json())
        .then(data => editItem(data))
        .catch(error => alert(error));
    }

    return(
        <form className="editItem" onSubmit={handleEdit}>
            <input type="text" placeholder="Edit task desciption..." value={editTask} onChange={(e) => setEditTask(e.target.value)}/>         
            <input type="text" placeholder="Edit category..." value={editCategory} onChange={(e) => setEditCategory(e.target.value)}/>  
            <input type="checkbox" value={editStatus} onChange={(e) => setEditStatus(e.target.checked)}/>  
            <button type="submit">Submit</button>          
        </form>
    )

}

export default EditItem;