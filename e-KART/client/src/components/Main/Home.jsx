import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

// actions
import SetProductsAction from '../../Redux/actions/SetProductsAction'

// MUI components
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'

// components
import Banner from './Home/Banner'
import NavBar from './Home/NavBar'
import Slide from './Home/Slide'

const useStyles = makeStyles({
    banner:{
        height:'auto',
        padding:'15px 10px',
        backgroundColor:'#f2f2f2',
        paddingBottom: 0,
    },
    component:{
        backgroundColor:'#f2f2f2',
        display:'flex',
        flexDirection:'row'
        ,alignItems:'center'
    },
    subComponent:{
        width:'100%'
    }
})


const Home = ()=>{
    const classes = useStyles()
    const adURL = "https://rukminim2.flixcart.com/flap/464/708/image/2af118ba18955d4c.jpg?q=70"
    const { products } = useSelector(state => state.SetProducts)
    
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(SetProductsAction())
    },[])
    return (
        <>
        <NavBar/>
        <Box className={classes.banner}>
        <Banner/>
        </Box>

        <Box className={classes.component}>
        <Box style={{width:'84%'}}>
        <Slide deal={true} heading='Deal of the day'/>
        </Box>
        <Box style={{marginTop:5}}>
            <img style={{height:338, boxShadow:'0 2px 4px 0 rgb(0 0 0 / 23%)'}} src={adURL} alt='ad' />
        </Box>
        </Box>
        <Box className={classes.component}>
        <Box className={classes.subComponent}>
        <Slide deal={false} products={products} heading='Deal of the day'/>
        <Slide deal={false} products={products} heading='Deal of the day'/>
        <Slide deal={false} products={products} heading='Deal of the day'/>
        <Slide deal={false} products={products} heading='Deal of the day'/>
        </Box>
        </Box>
        
        </>
    )
}

export default Home