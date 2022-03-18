
// MUI components
import Carousel from 'react-material-ui-carousel'
import { 
    Box
} from '@mui/material'
import { makeStyles } from '@mui/styles'

// constants data
import { bannerData } from '../../../constants/ConstData'

const useStyles = makeStyles({
    component:{
        border:'2px solid black',
        width:'100%'
        // height:'260px'
    }
})

const Banner = ()=>{
    const classes = useStyles()
    return(
        <>
        <Carousel  className={classes.component} >
            {
                bannerData.map( images => (
                    <img src={images} alt="banner image"key={images}/>
                ) )
            }
        </Carousel>
        </>
    )
}

export default Banner