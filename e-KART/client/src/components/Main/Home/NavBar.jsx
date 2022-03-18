
// MUI components
import { Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

// constants data
import { navData } from '../../../constants/ConstData'

const useStyles = makeStyles({
    container:{
        display:'flex',
        justifyContent:'space-around',
        margin:'auto',
        width:'85%',
        marginTop:'60px'
    },
    image:{
        width:'60px'
    }
})

const NavBar = ()=>{
    const classes = useStyles()
    return(
        <>
            <Box className={classes.container}>
                {
                    navData.map(ele => (
                        <Box key={ele.url} style={{textAlign:'center'}}>
                            <img src={ele.url} className={classes.image} alt="navImage" />
                            <Typography style={{fontSize:'0.895rem', fontWeight:500}}>{ele.text}</Typography>
                        </Box>
                    ))
                }
            </Box>
        </>
    )
}

export default NavBar