import React, { useContext } from 'react'
import Login from './account/Login'
import { AccountContext } from '../context/AccountProvider'
import ChatBox from './ChatBox'
import ConversationProvider from '../context/ConversationProvider'

const Messanger = () => {
    const {accountData} = useContext(AccountContext)
    return (
        <>
            <div style={{backgroundColor:'#000000'}}>
                <ConversationProvider>
                {accountData ? <ChatBox/> : <Login/>}
                </ConversationProvider>
            </div>

        </>
    )
}

export default Messanger
