import React, { createContext, useState} from 'react'

export const SideBarVisibleContext = createContext()

const SideBarVisibleProvider = (props) => {
    const [ visible, setVisible ] = useState(false)
    return (
        <SideBarVisibleContext.Provider value={{
            visible,
            setVisible
        }}>
            {props.children}
        </SideBarVisibleContext.Provider>
    )
}

export default SideBarVisibleProvider
