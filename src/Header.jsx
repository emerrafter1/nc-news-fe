import { UserContext } from "./contexts/User.jsx";
import {useContext} from "react";
import { Link } from "react-router-dom";

function Header(){

    const {loggedInUser} = useContext(UserContext)
    return (<header>
        <Link to="/" id="home-link">NC News</Link>


        <div id="user-icon">
        <p>{loggedInUser.username}</p>
        <img src={loggedInUser.avatar_url} className = "user-icon-img"></img>
        </div>

    </header>)
}

export default Header;
