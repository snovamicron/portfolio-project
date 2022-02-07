import React, { useState, useContext, useEffect } from 'react'
import { Grid } from 'semantic-ui-react'
import Header from './Header'
import SearchMenu from './Search.jsx'
import Conversation from './Conversation'
import UserProvider from '../../context/UserProvider'
import { AccountContext  } from '../../context/AccountProvider'



const Menu = ({ setVisible }) => {
    const [ text, setText ] = useState('')
    const { accountData , socket } = useContext( AccountContext )
    useEffect(()=>{
        socket.current.emit('addUser', accountData.googleId)
    },[accountData.googleId])

    return (
        <>
            <Grid style={{ margin: 0, height: '100%' }}>
                <Grid.Row style={{ height: '10%', backgroundColor: '#8E05C2' }}>
                    <Header setVisible={setVisible} />
                </Grid.Row>
                <Grid.Row className='menuHeader'>
                    <SearchMenu setText={setText}/>
                </Grid.Row>
                <Grid.Row className='menuBody'>
                    <UserProvider>
                        <Conversation text={text}/>
                    </UserProvider>
                </Grid.Row>
            </Grid>
        </>
    )
}

export default Menu
