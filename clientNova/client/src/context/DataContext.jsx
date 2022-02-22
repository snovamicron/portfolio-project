import react, { createContext, useState } from 'react'

export const DataContext = createContext()

const DataContexProvider = ({children}) =>{
    const [ formData, setFormData ] = useState('POST') 
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