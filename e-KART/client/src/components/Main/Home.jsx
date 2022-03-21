

// MUI components
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'

// components
import Banner from './Home/Banner'
import NavBar from './Home/NavBar'
import Slide from './Home/Slide'

const useStyles = makeStyles({
    component:{
        height:'auto',
        padding:'15px 10px',
        backgroundColor:'#f2f2f2',
        paddingBottom: 0
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
        <Box className={classes.component}>
        <Slide deal={true} heading='Deal of the day'/>
        </Box>
        <Box className={classes.component}>
        <Slide deal={false} heading='Best Deals'/>
        </Box>
        <Box className={classes.component}>
        <Slide deal={false} heading='Best Deals'/>
        </Box>
        <Box className={classes.component}>
        <Slide deal={false} heading='Best Deals'/>
        </Box>
        <Box className={classes.component}>
        <Slide deal={false} heading='Best Deals'/>
        </Box>
        </>
    )
}

export default Home