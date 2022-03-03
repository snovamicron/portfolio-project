
//MUI components
import { Box, Typography } from '@mui/material'
import Bulb from '@mui/icons-material/LightbulbOutlined';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    component:{
        height:'70vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
        bottom:'30px'
    },
    centerBox:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        padding:'20px'
    },
    icon:{
        fontSize:'8rem !important',
        color:'#e0e0e0'
    },
    text:{
        fontSize:'1.375rem !important',
        color:'#80868b'
    }
})


const EmptyScreen = ()=>{
    const classes = useStyles()
    return (
        <>
        <Box className={classes.component}>
            <Box className={classes.centerBox}>
            <Bulb className={classes.icon}/>
            <Typography className={classes.text}>Notes you add appear here</Typography>
            </Box>
        </Box>
        </>
    )
}



export default EmptyScreen