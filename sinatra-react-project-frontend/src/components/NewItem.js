import React, { useState} from "react";

function NewItem({addItem, categoryList}){

    const [taskName, setTaskName] = useState("");
    const [categoryId, setCategoryId] = useState(0);

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
                category_id: categoryId
            })
        })
        .then(r => r.json())
        .then(data => addItem(data))
        .catch(error => alert(error));
        
    }

    const categoryOptions = categoryList.map((category) => 
        <option key={category.id} value={category.id}>{category.name}</option>
    )

    return(
        <form className="newItem" onSubmit={handleSubmit}>
            <input type="text" id="task" placeholder="Enter task desciption..." value={taskName} onChange={(e) => setTaskName(e.target.value)}/>         
            <label> Choose a category: </label>      
            <select id="categories" onChange={(e) => setCategoryId(e.target.value)}>
                <option value={0}>Select An Option</option>
                {categoryOptions}
            </select>     
            <button type="submit">Submit</button>        
        </form>
    )
}

export default NewItem;