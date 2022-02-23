import react, { createContext, useState } from 'react'

export const DataContext = createContext()

const DataContexProvider = ({children}) =>{
    const [ formData, setFormData ] = useState({
        data:'',
        type:'POST'
    }) 
    const [paramData, setParamData] = useState([])
    const [HeaderData, setHeaderData] = useState([])
    return (
        <DataContext.Provider value={{
            formData,
            setFormData,
            paramData,
            setParamData,
            HeaderData,
            setHeaderData
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContexProvider