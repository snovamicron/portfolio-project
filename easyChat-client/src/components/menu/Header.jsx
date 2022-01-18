import React, { useContext } from 'react'
import { Dropdown, Icon } from 'semantic-ui-react'
import { AccountContext } from '../../context/AccountProvider'
import { SideBarVisibleContext } from '../../context/SideBarVisibleProvider'
import { GoogleLogout } from 'react-google-login'

const Header = () => {
    const { accountData, setAccountData } = useContext(AccountContext)
    const { visible, setVisible, data, setData } = useContext(SideBarVisibleContext)
    const logout = ()=>{
        setAccountData(null)
        console.clear()
    }
    const handleSideBar = () => {
        visible?setVisible(false):setVisible(true);
        // data?setData(accountData):setData({})
    }
    return (
        <>
            <div className='chatBoxNavigation'>
                <img onClick={()=> handleSideBar()} className='chatBoxNavigationAvtar' src={accountData.imageUrl} alt="img" />
                <Dropdown
                    icon='server'
                    floating
                    button
                    className='icon chatBoxNavigationBtn'
                >
                    <Dropdown.Menu direction='left' >
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={()=> handleSideBar()} icon='user' text='profile' />
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
