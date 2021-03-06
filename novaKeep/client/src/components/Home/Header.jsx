import { useContext } from 'react';
import { Link } from 'react-router-dom'
import './Header.css'

// context
import { DataContext } from '../../context/DataContextProvider';

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
import { styled } from '@mui/material/styles';


const useStyles = makeStyles({
    component: {
        backgroundColor: '#ffffff !important',
        boxShadow: 'none !important',
        borderBottom: '1px solid #cfcfcf'
    },
    menuIcon: {
        color: '#5f5f5f'
    },
    search: {
        margin: '0 auto !important',
        width: '43%',
    },
    header:{
        zIndex:1201,
        position:'relative'
    }
})

const Heading = styled(Typography)`
        color: #5f6368 ;
        font-size: 1rem
`
const Heading2 = styled(Typography)`
        color: #5f6368 ;
        font-size: 1rem;
        cursor:pointer  
`


const SearchAppBar = ({ setOpen, open }) => {
    const { searchData, setSearchData, token, setToken } = useContext(DataContext)
    const classes = useStyles()
    const logo = {
        height: '1.8rem',
        borderRadius: '4px',
        margin: '0 10px',
    }
    const handleClicke = ()=>{
        open ? setOpen(false):setOpen(true)
    }
    const onSearchChange = (e)=>{
        setSearchData(e.target.value)
    }

    const onLogOut = ()=>{
        localStorage.removeItem('token')
        setToken('')
    }
    
    return (
        <Box className={classes.header}>
            <AppBar position='static' className={classes.component}>
                <Toolbar>
                    <IconButton onClick={() => handleClicke()}>
                        <MenuIcon className={classes.menuIcon} />
                    </IconButton>
                    <img src='logo.png' alt='logo' style={logo} />
                    <Heading>
                        Note Down
                    </Heading>
                    <TextField
                        placeholder='Search...'
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchOutlinedIcon />
                                </InputAdornment>
                            ),
                            style: {
                                backgroundColor: '#f1f3f4',
                            }
                        }}
                        variant='outlined'
                        size='small'
                        className={classes.search}
                        onChange={onSearchChange}
                        value={searchData}
                    />
                       {!token && <Link to='singin' style={{textDecoration:'none'}} ><Heading2 className='link'  mr={3}>Sing in</Heading2></Link>}
                       {!token && <Link to='login' style={{textDecoration:'none'}} ><Heading2 className='link'  mr={3}>Log in</Heading2></Link>}
                        {token && <Heading2 className='link' onClick={onLogOut}  mr={3}>Log out</Heading2>}
                </Toolbar>
            </AppBar>
        </Box>
    )
}


export default SearchAppBar