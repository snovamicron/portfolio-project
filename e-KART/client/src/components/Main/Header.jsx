

// components
import SearchBar from './Header/SearchBar'

// MUI components
import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    Button,
    Badge
} from '@mui/material'
import { makeStyles } from '@mui/styles'

// MUI icons 
import CartIcon from '@mui/icons-material/ShoppingCart';


const useStyles = makeStyles({
    appbar:{
        height:51,
        boxShadow:'none !important',
        backgroundColor:'#2874f0 !important'
    },
    logoBox:{
        display:'flex',
        flexDirection:'column',
        marginLeft: 150
    },
    logo:{
        width:75
    },
    iconBox:{
        display:'flex',
        '& > *':{
            fontSize:'11px !important',
            fontStyle:'italic'
        },
        margin:'none !important'
    },
    option:{
        display:'flex',
        width:'25%',
        justifyContent:'space-evenly',
        alignItems:'center',
        marginLeft:'auto',
        marginRight:'55px'
    },
    loginButton:{
        backgroundColor:'#ffffff !important',
        color:'#2874f0 !important',
        textTransform:'none !important',
        boxShadow:'none !important',
        borderRadius:'1.5px !important',
        padding:'2px 40px !important',
        fontSize:'0.95rem !important',
        fontWeight:'500 !important'
    },
    cartButton:{
        fontSize:'0.95rem !important',
        display:'flex',
        alignItems:'center'
    }
})



const Header = ()=>{
    const classes = useStyles()
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png'
    const iconURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png'

     function SimpleBadge() {
        return (
          <Badge badgeContent={4} color="error" style={{marginRight:8}}>
            <CartIcon/>
          </Badge>
        );
      }
    return(
        <>
            <AppBar className={classes.appbar}>
                <Toolbar style={{minHeight: 51}}>
                    <Box className={classes.logoBox}>
                    <img className={classes.logo} src={logoURL} alt='logo text' />
                    <Box className={classes.iconBox}>
                        <Typography>Explore Pluse</Typography><img style={{height:10}} src={iconURL} alt='plse icon'/>
                    </Box>
                    </Box>
                    <SearchBar/>
                    <Box className={classes.option}>
                        <Button variant='contained' size='small' className={classes.loginButton}>Login</Button>
                        <Typography style={{fontSize:'0.95rem'}}>More</Typography>
                        <Typography className={classes.cartButton}>
                        <SimpleBadge/>
                        Cart
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header