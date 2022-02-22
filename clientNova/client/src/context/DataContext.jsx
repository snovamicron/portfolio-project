import react, { createContext, useState } from 'react'

export const DataContext = createContext()

const DataContexProvider = ({children}) =>{
    const [ formData, setFormData ] = useState({
        data:'',
        type:'POST'
    }) 
    return (
        <DataContext.Provider value={{
            formData,
            setFormData
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContexProvider