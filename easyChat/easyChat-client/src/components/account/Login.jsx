import React, { useContext } from 'react'
import { Grid, List } from 'semantic-ui-react'
import GoogleLogin from 'react-google-login'
import { AccountContext } from '../../context/AccountProvider'
import { joinChat } from '../../services/api'

const Login = () => {
    const qrCode = 'https://react.rocks/images/converted/qrcode.jpg'
    const {setAccountData} = useContext(AccountContext)

    const loginSuccess = async (response) => {
        setAccountData(response.profileObj)
        const res = await joinChat(response.profileObj)
        console.log(res);

    }
    const loginFail = (error) => {
        console.log('some erroe ocured while login ');
        console.log(error);
    }
    return (
        <>
                <div className='navStyle'></div>
                <div className='containerStyleLogin'>
                    <Grid style={{ height: '100%' }}>
                        <Grid.Row>
                            <Grid.Column width={10} style={{ padding: 0 }}>
                                <p className='headingStyle'>To use WassApp on your computer:</p>
                                <List ordered relaxed='very'>
                                    <List.Item className='liStyle'>open WassApp on your phone</List.Item>
                                    <List.Item className='liStyle'>tap menu or setting and select linked device</List.Item>
                                    <List.Item className='liStyle'>point your phone to this screen to capture the code</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column textAlign='center' width={6} style={{ padding: 0 }}>
                                <img style={{ width: '80%' }} src={qrCode} alt="qr" />
                                <GoogleLogin
                                    clientId={process.env.REACT_APP_CLIENT_ID}
                                    buttonText="Login"
                                    onSuccess={loginSuccess}
                                    onFailure={loginFail}
                                    isSignedIn={true}
                                    cookiePolicy={'single_host_origin'}
                                />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row></Grid.Row>
                    </Grid>
                </div>
        </>
    )
}

export default Login


