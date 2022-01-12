import React, { useContext } from 'react'
import { Dropdown, Icon } from 'semantic-ui-react'
import { AccountContext } from '../../context/AccountProvider'
import { SideBarVisibleContext } from '../../context/SideBarVisibleProvider'
import { GoogleLogout } from 'react-google-login'

const Header = () => {
    const { accountData, setAccountData } = useContext(AccountContext)
    const { visible, setVisible } = useContext(SideBarVisibleContext)
    const logout = ()=>{
        setAccountData(null)
    }
    return (
        <>
            <div className='chatBoxNavigation'>
                <img onClick={()=> visible?setVisible(false):setVisible(true)} className='chatBoxNavigationAvtar' src={accountData.imageUrl} alt="img" />
                <Dropdown
                    icon='server'
                    floating
                    button
                    className='icon chatBoxNavigationBtn'
                >
                    <Dropdown.Menu >
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={()=> visible?setVisible(false):setVisible(true)} icon='user' text='profile' />
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
