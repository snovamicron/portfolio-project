import { createContext, useState } from "react";

export const UserData = createContext()

export default function UserDataProvider ({ children }) {
    const [data, setData] = useState({})
    const [jwt, setJwt] = useState('')
    return(
        <UserData.Provider value={{
            data,
            setData,
            jwt,
            setJwt
        }}>
            {children}
        </UserData.Provider>
    )
}

