import React, { useState } from "react";

function NewItem({addItem}){

    const [taskName, setTaskName] = useState("");
    const [itemCategory, setCategory] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        fetch(`http://localhost:9292/todos`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                task: taskName,
                category : itemCategory,
                completed: false,
            })
        })
        .then(r => r.json())
        .then(data => addItem(data))
        .catch(error => alert(error));
        
    }

    return(
        <form className="newItem" onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter task desciption..." value={taskName} onChange={(e) => setTaskName(e.target.value)}/>         
            <input type="text" placeholder="Enter category..." value={category} onChange={(e) => setCategory(e.target.value)}/>  
            <button type="submit">Submit</button>          
        </form>
    )
}

export default NewItem;