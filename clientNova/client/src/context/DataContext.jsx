import { createContext, useState } from 'react'

export const DataContext = createContext()

const DataContexProvider = ({children}) =>{
    const [ formData, setFormData ] = useState({
        url:'',
        type:'POST'
    }) 
    const [paramData, setParamData] = useState([])
    const [headerData, setHeaderData] = useState([])
    const [jsonText, setJsonText] = useState('')
    return (
        <DataContext.Provider value={{
            formData,
            setFormData,
            paramData,
            setParamData,
            headerData,
            setHeaderData,
            jsonText,
            setJsonText
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContexProvider