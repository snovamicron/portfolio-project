import React, { createContext, useState} from 'react'

export const SideBarVisibleContext = createContext()

const SideBarVisibleProvider = (props) => {
    const [ visible, setVisible ] = useState(false)
    const [ data, setData ] = useState({})
    return (
        <SideBarVisibleContext.Provider value={{
            visible,
            setVisible, 
            data,
            setData
        }}>
            {props.children}
        </SideBarVisibleContext.Provider>
    )
}

export default SideBarVisibleProvider
