import React from "react";
import CategoryItem from "./CategoryItem";


function CategoryRender({list, toDoList}){

    const categoryRender = list.map( item => (
        <CategoryItem
        key={item.id}
        id={item.id}
        name={item.name}
        toDoList={toDoList}
        />
    ))
    return (
        <ul className="CategoryRender">{categoryRender}</ul>
    )
}

export default CategoryRender;