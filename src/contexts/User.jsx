
import {createContext, useState} from 'react'

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [loggedInUser, setLoggedInUser] = useState({
        username: "happyamy2016",
        name: "Amy Happy",
        avatar_url: "https://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729"
        })

    return <UserContext.Provider value={{loggedInUser, setLoggedInUser}}>{children}</UserContext.Provider>
}