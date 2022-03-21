

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
    }
})

const InfoForm = ({setOpen}) => {
    const classes = useStyles()
    return (
        <>
            <Box component='form' className={classes.form}>
                <TextField className={classes.info} type='text' variant="standard" label='Enter Name' />
                <TextField className={classes.info} type='text' variant="standard" label='Enter Email' />
                <TextField className={classes.info} type='password' variant="standard" label='Enter Password' />
                <Box className={classes.buttonBox}>
                    <Typography style={{ fontSize: '0.689rem' }} >By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                    <Button className={classes.button} style={{ backgroundColor: '#fb641b', boxShadow: 'none' }} variant='contained'>Sing in</Button>
                    <Typography style={{ color: '#7f7f7f', fontSize: '.795rem' }}>OR</Typography>
                    <Button onClick={()=> setOpen({login: true, singin: false})} className={classes.button} style={{ backgroundColor: '#fff', color: '#2874f0' }} variant='contained'>Login</Button>
                </Box>
            </Box>
        </>
    )
}

export default InfoForm