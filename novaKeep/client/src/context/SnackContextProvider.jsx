import { createContext, useState } from "react"; 

export const SnackContext = createContext()

const SnackContextProvider = ({ children })=>{

    const [snackopen, setSnackopen] = useState(false)
    const [msg, setMsg] = useState({
        payload:'',
        severity:''
    })

    return (
        <SnackContext.Provider value={{
            snackopen,
            setSnackopen,
            msg,
            setMsg
        }}>
            { children }
        </SnackContext.Provider>
    )
}


export default SnackContextProvider