import React from 'react'
import { Box, TextareaAutosize } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    component:{
        width:'auto',
        margin:'auto',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
})

const Responce = () => {
    const classes = useStyles()
    const textAreaStyle = {
        width:'100%',
        height:'100px',
        background: `url(http://i.imgur.com/2cOaJ.png)`,
        backgroundAttachment: 'local',
        backgroundRepeat: 'no-repeat',
        padding:'10px 35px',
        borderColor:'#ccc'
    }
  return (
    <>
    <Box className={classes.component}>
    <TextareaAutosize 
    minRows={3}
    maxRows={7}
    style={textAreaStyle}
    >

    </TextareaAutosize>
    </Box>
    </>
  )
}

export default Responce