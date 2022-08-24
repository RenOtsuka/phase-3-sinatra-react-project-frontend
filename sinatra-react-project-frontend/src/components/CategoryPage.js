import React from "react"
import NewCategory from "./NewCategory";
import CategoryRender from "./CategoryRender";

function CategoryPage({categoryList, setCategoryList, toDoList}){

    function addCat(itemObj){
        setCategoryList([...categoryList, itemObj]);
    }

    return(
        <div className="CategoryDisplay">
            <header>
            <br/>
            <h1>Category List</h1>
            <div className="SubHeader">
                <h3>Category</h3>
            </div>
            </header>
            <NewCategory addCat={addCat}/>
            <CategoryRender list={categoryList} toDoList={toDoList}/>
        </div>
    )

}

export default CategoryPage;