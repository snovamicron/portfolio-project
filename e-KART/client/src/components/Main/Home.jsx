

// MUI components
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'

// components
import Banner from './Home/Banner'
import NavBar from './Home/NavBar'

const useStyles = makeStyles({
    component:{
        height:300,
        padding:'15px 10px',
        backgroundColor:'#f2f2f2'
    }
})


const Home = ()=>{
    const classes = useStyles()
    return (
        <>
        <NavBar/>
        <Box className={classes.component}>
        <Banner/>
        </Box>
        </>
    )
}

export default Home