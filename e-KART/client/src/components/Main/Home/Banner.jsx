
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
        width:'100%',
        height:300
    },
    main:{
        height:'100%',
        '& > div > button > svg':{
            fontSize:'2rem'
        }
    }
})

const Banner = ()=>{
    const classes = useStyles()
    return(
        <>
        <Carousel
        className={classes.main}
        autoPlay={true}
        indicators={false}
        interval={2000}
        animation='slide'
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        navButtonsProps={{style:{
            backgroundColor:'#ffffff',
            borderRadius:3,
            margin:0,
            height:100,
            color:'#000000'
        }}}
        navButtonsWrapperProps={{style:{
            top:-29
        }}}
        >
            {
                bannerData.map( images => (
                    <img src={images} alt="banner image"key={images}  className={classes.component}/>
                ) )
            }
        </Carousel>
        </>
    )
}

export default Banner