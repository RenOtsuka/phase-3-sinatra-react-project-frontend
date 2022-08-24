import React, {useState, useEffect} from "react";

function CategoryItem({id, name, toDoList}){

    const [categoryToggle, setCategoryToggle] = useState(false);
    const [itemList, setItemList] = useState([]);

    useEffect( () => {
        fetch(`http://localhost:9292/categories/${id}`)
        .then((r) => r.json())
        .then((data) => setItemList(data))
        .catch(error => alert(error));
    },[id, toDoList]);

    function toggle(){
        setCategoryToggle((categoryToggle) => !categoryToggle);
    }

    const catList = itemList.map((item) => 
         <p id={item.id}>{item.task}</p>
        )

    return(
        <div className="body">

            <button id={id} onClick={toggle}>{name}</button>
            <br/>
            {categoryToggle ? (
                catList
            ) : ( 
                null
            )}
            <hr/>
        </div>
    )
}

export default CategoryItem;