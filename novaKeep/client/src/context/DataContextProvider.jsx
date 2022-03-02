

import { createContext, useState } from 'react'

export const DataContext = createContext()

const DataContextProvider = ({children})=> {
    const [notes, addNotes] = useState([])
    const [archive, setArchive] = useState([])
    const [deleted, setDeleted] = useState([])
    
    return (
        <DataContext.Provider value= {{
            notes,
            addNotes,
            archive,
            setArchive,
            deleted,
            setDeleted
        }}>
            {children}
        </DataContext.Provider>
    )
}


export default DataContextProvider