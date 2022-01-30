import React, { createContext, useState, useRef, useEffect } from 'react'
import { io } from 'socket.io-client'

export const AccountContext = createContext()

const AccountProvider = (porps) => {

    const [accountData, setAccountData] = useState()
    const [activeUsers, setActiveUsers] = useState([])
    const [messages, setMessages] = useState([])
    
    const socket = useRef(null)

    useEffect(() => {
        socket.current = io('http://localhost:5000')
    }, []);


    return (
        <AccountContext.Provider value={{
            accountData,
            setAccountData,
            socket,
            activeUsers,
            setActiveUsers,
            messages,
            setMessages
        }}>
            {porps.children}
        </AccountContext.Provider>
    )
}

export default AccountProvider
