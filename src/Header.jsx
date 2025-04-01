import { UserContext } from "./contexts/User.jsx";
import {useContext} from "react";

function Header(){

    const {loggedInUser} = useContext(UserContext)
    return (<header>
        <h1>placeholder header</h1>
        <p>Welcome {loggedInUser}</p>
    </header>)
}

export default Header;
