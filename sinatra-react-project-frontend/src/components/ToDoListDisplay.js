import React, {useState, useEffect} from "react";
import ToDoList from "./ToDoList";
import NewItem from "./NewItem";

function ToDoListDisplay(){
    const [toDoList, setToDoList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/todos")
        .then((r) => r.json())
        .then((data) => setToDoList(data))
        .catch(error => alert(error));
    },[])

    function addItem(itemObj){
        setToDoList([...toDoList, itemObj]);
    }

    function onDeleteItem(id){
        const newList = list.filter((item) => item.id !== id);
        setToDoList(newList);
    }

    function onEditItem(editedItemObj){
        const updateList = list.map( (item) => {
            if(item.id === editedItemObj.id){
                return editedItemObj;
            }
            else {
                return item;
            }
        });

        setToDoList(updateList);
    }

    return(
        <div className="ToDoList">
            <NewItem addItem={addItem}/>
            <ToDoList list={toDoList} onDeleteItem={onDeleteItem} onEditItem={onEditItem}/>
        </div>
    )
}

export default ToDoListDisplay;