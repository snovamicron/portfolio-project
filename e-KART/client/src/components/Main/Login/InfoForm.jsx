import { useState, useContext } from 'react'


// API
import { login_user } from '../../../services/AllUserApi'

// context
import { UserData } from '../../../context/UserContext'


// MUI components
import {
    Box,
    Button,
    TextField,
    Typography
} from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    form: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    info: {
        marginTop: '30px !important',
        '& > div:hover':{
            borderBottom:'none !important'
        }
    },
    buttonBox: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 40,
        justifyContent: 'space-between',
        height: '40%',
        alignItems: 'center'
    },
    button: {
        height: '50px !important',
        borderRadius: '2px !important',
        textTransform: 'none !important',
        width: '100%',
        fontWeight: '600 !important'
    },
    error:{
        fontSize:'10px !important',
        color:'red'
    }
})

const InfoForm = ({ setOpen }) => {
    const classes = useStyles()
    const { setJwt } = useContext(UserData)
    const [data, setData] = useState({
        email:'',
        password:''
    })
    const [error, setError] = useState(false)
    const onTextChange = (e)=>{
        setData({ ...data, [e.target.name]: e.target.value})
    }
    const onLoginClick = async ()=>{
        try {
            const response = await login_user(data)
        localStorage.setItem('token', response.data.token)
        setJwt(response.data.token)
        setData({
            email:'',
            password:''
        })
        if(response.status === 200){
            setOpen({login: false, singin: false})
        }
        } catch (error) {
            setError(true)
        }
    }
    return (
        <>
            <Box component='form' className={classes.form}>
                <TextField className={classes.info} value={data.email} onChange={(e)=> onTextChange(e)} name='email' type='email' variant="standard" label='Enter Email' />
                <TextField className={classes.info} value={data.password} onChange={(e)=> onTextChange(e)} name='password' type='password' variant="standard" label='Enter Password' />
                {error && <Typography className={classes.error}>Wrong email or password</Typography>}
                <Box className={classes.buttonBox}>
                    <Typography style={{ fontSize: '0.689rem' }} >By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>

                    <Button onClick={()=> onLoginClick()} className={classes.button} style={{ backgroundColor: '#fb641b', boxShadow: 'none' }} variant='contained'>Login</Button>

                    <Typography style={{ color: '#7f7f7f', fontSize: '.795rem' }}>OR</Typography>
                    
                    <Button onClick={()=> setOpen({login: false, singin: true})} className={classes.button} style={{ backgroundColor: '#fff', color: '#2874f0' }} variant='contained'>Sing in</Button>
                </Box>
            </Box>
        </>
    )
}

export default InfoForm