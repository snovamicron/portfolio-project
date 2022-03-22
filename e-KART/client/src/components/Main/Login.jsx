

// MUI components
import { 
    Dialog,
    Box,
    Typography,
    IconButton,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import CloseIcon from '@mui/icons-material/Close';

// components

import InfoForm from './Login/InfoForm'

const useStyles = makeStyles({
    container:{
        height:'72vh',
        width:'43vw',
        borderRadius:10,
        display:'flex',
    },
    leftWraper:{
        width:'40%',
        backgroundColor:'#2874f0',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center'
    },
    rightWraper:{
        width:'60%',
        padding:'20px 35px 10px 35px',
        boxSizing:'border-box'

    },
    text:{
        marginTop:45,
        padding:'0 30px'
    },
    emptyImage:{
        // border:'2px solid #000',
        width:'89%',
        marginBottom:'57px'
    },
    loginText:{
        fontSize:'1.598rem !important',
        marginBottom:'10px !important',
        fontWeight:'600 !important',
        color:'#fff'
    },
    iconButton:{
        position:'absolute !important',
        top:0,
        left:620,
        width:40
    }
})
 
const Login = ({ open, setOpen }) => {
    const classes = useStyles()
    return (
        <>
            <Dialog  open={open.login} maxWidth='md' onClose={()=> setOpen({...open, login:false})}>
                <IconButton className={classes.iconButton}>
                    <CloseIcon onClick={()=> setOpen({...open, login:false})}/>
                </IconButton>
               <Box className={classes.container}>
               <Box className={classes.leftWraper}>
                       <Box className={classes.text}>
                       <Typography className={classes.loginText}>Login</Typography>
                       <Typography style={{fontSize:'1.1rem', color:'#fff'}}>Get access to your Orders, Wishlist and Recommendations</Typography>
                       </Box>
                       <img className={classes.emptyImage} src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png' alt="" />
               </Box>
                <Box className={classes.rightWraper}>
                    <InfoForm setOpen={setOpen}/>
                </Box>
               </Box>
            </Dialog>
        </>
    )
}


export default Login