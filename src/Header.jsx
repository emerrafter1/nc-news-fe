import { UserContext } from "./contexts/User.jsx";
import {useContext} from "react";
import { Link } from "react-router-dom";
import logo from "./assets/tnlogo.png"

function Header(){

    const {loggedInUser} = useContext(UserContext)
    return (<header>
        <Link to="/" id="home-link"><img src={logo} className="logo"/></Link>


        <div id="user-icon">
        <p>{loggedInUser.username}</p>
        <img src={loggedInUser.avatar_url} className = "user-icon-img"></img>
        </div>

    </header>)
}

export default Header;
