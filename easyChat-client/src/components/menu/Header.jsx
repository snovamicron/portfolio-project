import React, { useContext } from 'react'
import { Dropdown, Icon } from 'semantic-ui-react'
import { AccountContext } from '../../context/AccountProvider'
import { ConversationContext } from '../../context/ConversationProvider'
import { GoogleLogout } from 'react-google-login'

const Header = ({setVisible}) => {
    const { accountData, setAccountData, socket } = useContext(AccountContext)
    const { setRoomChat } = useContext(ConversationContext)
    const socketDataClear = () =>{
        socket.current.emit('clearUser', accountData.googleId)
    }
    const logout = ()=>{
        socketDataClear()
        setAccountData()
        setRoomChat({})
        console.clear()
    }

    return (
        <>
            <div className='chatBoxNavigation'>
                <img referrerPolicy='no-referrer' onClick={()=> setVisible(true)} className='chatBoxNavigationAvtar' src={accountData.imageUrl} alt="img" />
                <Dropdown
                    icon='server'
                    floating
                    button
                    className='icon chatBoxNavigationBtn'
                >
                    <Dropdown.Menu direction='left' >
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={()=> setVisible(true)} icon='user' text='profile' />
                        <Dropdown.Item>
                            <GoogleLogout
                            render={renderProps => (
                                <div  onClick={renderProps.onClick} disabled={renderProps.disabled} >
                                    <Icon name='log out' /> log out
                                </div>
                            )}
                                clientId={process.env.REACT_APP_CLIENT_ID}
                                buttonText="Logout"
                                onLogoutSuccess={logout}
                            >
                            </GoogleLogout>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </>
    )
}

export default Header
