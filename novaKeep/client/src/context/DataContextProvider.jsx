

import { createContext, useState } from 'react'

export const DataContext = createContext()

const DataContextProvider = ({children})=> {
    const [notes, addNotes] = useState([])
    const [archive, setArchive] = useState([])
    const [deleted, setDeleted] = useState([])
    const [userData, setUserData] = useState({})
    console.log(userData)
    const [token, setToken] = useState(localStorage.getItem('token'))

    
    const [searchData, setSearchData] = useState('')
    
    return (
        <DataContext.Provider value= {{
            token,
            setToken,
            userData,
            setUserData,
            notes,
            addNotes,
            archive,
            setArchive,
            deleted,
            setDeleted,
            searchData,
            setSearchData
        }}>
            {children}
        </DataContext.Provider>
    )
}


export default DataContextProvider