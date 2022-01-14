import React, { useContext } from 'react'
import Login from './account/Login'
import { AccountContext } from '../context/AccountProvider'
import ChatBox from './ChatBox'

const Messanger = () => {
    const {accountData} = useContext(AccountContext)
    return (
        <>
            <div style={{backgroundColor:'#000000'}}>
                {accountData ? <ChatBox/> : <Login/>}
            </div>

        </>
    )
}

export default Messanger
