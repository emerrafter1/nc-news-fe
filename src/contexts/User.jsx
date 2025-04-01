
import {createContext, useState} from 'react'

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [loggedInUser, setLoggedInUser] = useState("happyamy2016")

    return <UserContext.Provider value={{loggedInUser, setLoggedInUser}}>{children}</UserContext.Provider>
}