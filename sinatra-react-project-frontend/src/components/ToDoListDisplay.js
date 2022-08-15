import React, {useState, useEffect} from "react";
import ToDoList from "./ToDoList";
import NewItem from "./NewItem";
import Header from "./Header";

function ToDoListDisplay({categoryList}){
    const [toDoList, setToDoList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/todos")
        .then((r) => r.json())
        .then((data) => setToDoList(data))
        .catch(error => alert(error));
       
    },[]);

    function addItem(itemObj){
        setToDoList([...toDoList, itemObj]);
    }

    function onDeleteItem(id){
        const newList = toDoList.filter((item) => item.id !== id);
        setToDoList(newList);
    }

    function onEditItem(editedItemObj){
        const updateList = toDoList.map( (item) => {
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
        <div className="ToDoListDisplay">
            <Header/>
            <NewItem addItem={addItem} categoryList={categoryList}/>
            <br/>
            <ToDoList list={toDoList} onDeleteItem={onDeleteItem} onEditItem={onEditItem}/>
        </div>
    )
}

export default ToDoListDisplay;