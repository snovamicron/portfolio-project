
// MUI components
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    IconButton,
    TextField,
    InputAdornment
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { makeStyles } from '@mui/styles'


const useStyles = makeStyles({
    component: {
        // backgroundColor: '#000000 !important'
    },
    menuIcon: {
        color: '#ffffff'
    }
})



const Header = () => {
    const classes = useStyles()
    const logo = {
        height: '30px',
        borderRadius: '4px',
        margin: '0 10px'
    }
    return (
        <Box>
            <AppBar position='static' className={classes.component}>
                <Toolbar>
                    <IconButton >
                        <MenuIcon className={classes.menuIcon} />
                    </IconButton>
                    <img src='logo.png' alt='logo' style={logo} />
                    <Typography>
                        Note Down
                    </Typography>
                    <TextField
                        placeholder='search'
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchOutlinedIcon />
                                </InputAdornment>
                            ),
                        }}
                        variant='outlined'
                        size='small'
                    />
                </Toolbar>
            </AppBar>
        </Box>
    )
}


export default Header