import React, { useContext } from 'react'
import { Grid, List } from 'semantic-ui-react'
import GoogleLogin from 'react-google-login'
import { AccontContext } from '../../context/AccountProvider'

const Login = () => {
    const qrCode = 'https://react.rocks/images/converted/qrcode.jpg'
    const styles = {
        backgroundStyle: {
            backgroundColor: 'black'
        },
        navStyle: {
            width: '100vw',
            height: '222px',
            backgroundColor: '#00bfa5'
        },
        containerStyle: {
            // border:'2px solid black',
            borderRadius: '3px',
            position: 'relative',
            top: '-90px',
            height: '100vh',
            width: '58vw',
            margin: '0 auto',
            backgroundColor: 'white',
            boxShadow: '1px 1px 25px 0px black -1px -1px 25px 0px black',
            padding: '60px'
        },
        headingStyle: {
            fontSize: '2rem',
            fontWeight: 100,
            marginBottom: '52px'
        },
        liStyle: {
            fontSize: '1.5rem',
            fontWeight: 100
        }
    }

    const {accountData, setAccountData} = useContext(AccontContext)

    const loginSuccess = (response) => {
        console.log('successfully loged in ');
        console.log(response);
        setAccountData(response)
    }
    const loginFail = (error) => {
        console.log('some erroe ocured while login ');
        console.log(error);
    }
    return (
        <>
            <div style={styles.backgroundStyle}>
                <div style={styles.navStyle}></div>
                <div style={styles.containerStyle}>
                    <Grid style={{ height: '100%' }}>
                        <Grid.Row>
                            <Grid.Column width={10} style={{ padding: 0 }}>
                                <p style={styles.headingStyle}>To use WassApp on your computer:</p>
                                <List ordered relaxed='very'>
                                    <List.Item style={styles.liStyle}>open WassApp on your phone</List.Item>
                                    <List.Item style={styles.liStyle}>tap menu or setting and select linked device</List.Item>
                                    <List.Item style={styles.liStyle}>point your phone to this screen to capture the code</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column textAlign='center' width={6} style={{ padding: 0 }}>
                                <img style={{ height: '35vh' }} src={qrCode} alt="qr" />
                                <GoogleLogin
                                    clientId="244543431504-7h9ss1c76lka6lqilo4mnl6utt8an9r0.apps.googleusercontent.com"
                                    buttonText="Login"
                                    onSuccess={loginSuccess}
                                    onFailure={loginFail}
                                    cookiePolicy={'single_host_origin'}
                                />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row></Grid.Row>
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default Login


