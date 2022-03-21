import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from 'react-countdown'

// MUI components
import { makeStyles } from '@mui/styles'
import { Divider } from '@mui/material'

// for development need to delete
import { products } from "../../../constants/ConstData"
import { Box, Button, Typography } from "@mui/material";


const useStyles = makeStyles({
    productImage: {
        height: 180,
    },
    container: {
        backgroundColor: '#fff',
        padding: '5px 15px'
    },
    dealBox: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: 60
    },
    dealText: {
        fontSize: '22px !important',
        fontWeight: '600 !important '
    },
    button: {
        marginLeft: 'auto !important',
        borderRadius: '2px !important',
        backgroundColor: '#2874f0 !important'
    },
    text: {
        fontSize: '14px !important',
        margin: '2px 0'
    },
    productBox: {
        padding: '10px 5px',
        textAlign: 'center'
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

    return <span style={{ color: '#7f7f7f', fontWeight: '500' }}> {hours} : {minutes} : {seconds} Left</span>
};
const Slide = ({ deal, heading }) => {
    const classes = useStyles()
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    return (
        <>
            <Box className={classes.container}>
                <Box className={classes.dealBox}>
                    <Typography className={classes.dealText}>{heading}</Typography>
                    {
                        deal &&
                        <>
                            <img src={timerURL} alt="timer logo" style={{ margin: '0 5px', height: '35px' }} />
                            <Countdown renderer={renderer} date={Date.now() + 5.04e+7} />
                        </>
                    }
                    <Button variant="contained" className={classes.button}>view all</Button>
                </Box>
                <Divider variant="fullWidth" />
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
                        products.map(ele => (
                            <Box key={ele.id} className={classes.productBox} >
                                <img src={ele.url} className={classes.productImage} />
                                <Typography className={classes.text} style={{ fontWeight: 600, color: '#272727' }}>{ele.title.shortTitle}</Typography>
                                <Typography className={classes.text} style={{ color: 'green' }}>{ele.discount}</Typography>
                                <Typography className={classes.text} style={{ color: '#272727', opacity: '.6' }}>{ele.tagline}</Typography>
                            </Box>
                        ))
                    }
                </Carousel>
            </Box>
        </>
    )
}

export default Slide