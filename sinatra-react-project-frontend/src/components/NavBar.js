import { Link } from "react-router-dom";

function NavBar(){
    return(
        <div className="NavBar">
            <li><Link exact to="/">Home</Link></li>
            <li><Link exact to="/todos">To Do List</Link></li>
            <li><Link exact to="/categories">Categories</Link></li>
        </div>
    );
}

export default NavBar;