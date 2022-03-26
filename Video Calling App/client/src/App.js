

// MUI components
import { Typography, AppBar, Box } from '@mui/material'
import { makeStyles } from '@mui/styles'

// components
import Notification from "./components/Notification"
import Option from "./components/Option"
import VideoPlayer from "./components/VideoPlayer"

const useStyles = makeStyles({
  appBar:{
    position:'initial',
    boxShadow:'none',
    width:'30vw',
    margin:'auto',
    backgroundColor:'#fff',
    color:'#000',
    textAlign:'center',
    marginTop:70,
    marginBottom:30,
    borderRadius:20
  },
  title:{
    fontSize:'4rem'
  },
  container:{
    width:'100%',
    height:'76vh',
    display:'flex',
    alignItems:'center',
    flexDirection:'column'
  }
})

export default function App (){
  const classes = useStyles()
  return(
    <>
      <AppBar className={classes.appBar}>
        <Typography className={classes.title}> Video Chat </Typography>
      </AppBar>
      <Box className={classes.container}>
      <VideoPlayer/>
      <Option>
        <Notification/>
      </Option>
      </Box>
    </>
  )
}
