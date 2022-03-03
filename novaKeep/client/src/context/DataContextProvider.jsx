

import { createContext, useState } from 'react'

export const DataContext = createContext()

const DataContextProvider = ({children})=> {
    const [notes, addNotes] = useState([])
    const [archive, setArchive] = useState([])
    const [deleted, setDeleted] = useState([])

    const [tunnel, setTunnel] = useState({ Note: true, Archive: false, Deleted: false})
    
    const [searchData, setSearchData] = useState('')
    
    return (
        <DataContext.Provider value= {{
            notes,
            addNotes,
            archive,
            setArchive,
            deleted,
            setDeleted,
            tunnel,
            setTunnel,
            searchData,
            setSearchData
        }}>
            {children}
        </DataContext.Provider>
    )
}


export default DataContextProvider