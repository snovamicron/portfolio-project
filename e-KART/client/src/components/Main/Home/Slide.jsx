import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from 'react-countdown'

// MUI components
import { makeStyles } from '@mui/styles'

// for development need to delete
import { products } from "../../../constants/ConstData"
import { Box, Typography } from "@mui/material";


const useStyles = makeStyles({
    productImage:{
        height: 180
    },
    container:{
        backgroundColor:'#fff',
        padding:'10px 15px'
    },
    dealBox:{
        display:'flex'
    }
})

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const renderer = ({ hours, minutes, seconds }) => {
    
      return <span> {hours} : {minutes} : {seconds} Left</span>
  };
const Slide = ()=>{
    const classes = useStyles()
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    return(
        <>
        <Box className={classes.container}>
           <Box className={classes.dealBox}>
           <Typography>Deal of The Day</Typography>
           <img src={timerURL} alt="" />
           <Countdown renderer={renderer} date={Date.now() + 5.04e+7}/>
           </Box>
        <Carousel 
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        >
            {
                products.map( ele => (
                    <img src={ele.url} key={ele.id} className={classes.productImage} />
                ))
            }
        </Carousel>
        </Box>
        </>
    )
}

export default Slide