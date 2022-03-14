

// components
import SearchBar from './Header/SearchBar'

// MUI components
import {
    AppBar,
    Toolbar,
    Box,
    Typography
} from '@mui/material'
import { makeStyles } from '@mui/styles'

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
    }
})



const Header = ()=>{
    const classes = useStyles()
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png'
    const iconURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png'
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
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header