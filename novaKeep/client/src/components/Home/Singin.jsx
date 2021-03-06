import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

//API
import { sing_up } from '../../Services/AuthApi'

//context
import { SnackContext } from '../../context/SnackContextProvider'
import { DataContext } from '../../context/DataContextProvider'

//MUI components
import {
    Card,
    CardContent,
    CardActions,
    TextField,
    Box,
    Button,
    CircularProgress as BufferGif
} from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '80vh',
    },
    card: {
        minWidth: '40%',
        boxShadow: '0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%) !important'
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        padding: '10px !important',
        backgroundColor: 'rgb(241, 243, 244)'
    },
    textField: {
        margin: "5px !important",
        backgroundColor: '#ffffff',
    }
})

const Singin = () => {
    const navigate = useNavigate()
    const classes = useStyles()
    const { setSnackopen, setMsg } = useContext(SnackContext)
    const { setToken } = useContext(DataContext)
    const [fromData, getFromData] = useState({
        name: '',
        username: '',
        email: '',
        password: ''
    })
    const [load, setLoad] = useState(false)

    const onDataChange = (e) => {
        getFromData({ ...fromData, [e.target.name]: e.target.value })
    }
    const onSubmit = async () => {
        if (fromData.username.length === 0) {
            setSnackopen(true)
            setMsg({ payload: 'Give a username', severity: 'error' })
        } else if (fromData.username.length < 3) {
            setSnackopen(true)
            setMsg({ payload: 'Username is too short', severity: 'warning' })
        } else if (fromData.name.length === 0) {
            setSnackopen(true)
            setMsg({ payload: 'Give a Name', severity: 'error' })
        } else if (fromData.name.length < 3) {
            setSnackopen(true)
            setMsg({ payload: 'Name is too short', severity: 'warning' })
        } else if (fromData.password.length === 0) {
            setSnackopen(true)
            setMsg({ payload: 'Give a Password', severity: 'error' })
        } else if (fromData.password.length < 5) {
            setSnackopen(true)
            setMsg({ payload: 'Short password use minimum 5 characters', severity: 'warning' })
        } else if (fromData.email.length === 0 || !fromData.email.includes('@')) {
            setSnackopen(true)
            setMsg({ payload: 'Give an Email', severity: 'error' })
        } else {
            setLoad(true)
            const response = await sing_up({ payload: fromData })
            localStorage.setItem('token', response.data.token)
            setToken(response.data.token)
            navigate('/')
            setLoad(false)
        }



    }
    return (
        <>
            <Box className={classes.container}>
                {load && <BufferGif color='success' />}
                {
                    !load && <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <TextField onChange={onDataChange} name='username' placeholder='Enter a username' label="username" size='small' className={classes.textField} />
                        <TextField onChange={onDataChange} name='name' placeholder='Use minimum 3 characters' label='name' size='small' className={classes.textField} />
                        <TextField onChange={onDataChange} name='email' placeholder='Enter your email' label='email' size='small' className={classes.textField} />
                        <TextField onChange={onDataChange} name='password' type='password' placeholder='Create a strong password (min 5 char)' label='password' size='small' className={classes.textField} />
                    </CardContent>
                    <CardActions className={classes.cardContent}>
                        <Button onClick={onSubmit} variant="contained" color='success'> Submit </Button>
                    </CardActions>
                </Card>
                }
            </Box>
        </>
    )
}

export default Singin