import React, { useState, createContext } from 'react'

export const ConversationContext = createContext()

const ConversationProvider = ({children}) => {
    const [ roomChat, setRoomChat ] = useState({})
    return (
        <ConversationContext.Provider value={{
            roomChat,
            setRoomChat
        }}>
            {children}
        </ConversationContext.Provider>
    )
}

export default ConversationProvider
