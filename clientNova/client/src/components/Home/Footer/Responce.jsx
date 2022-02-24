import React from 'react'
import { Box, TextareaAutosize, Typography } from '@mui/material'
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

const Responce = ({ responseData }) => {
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

    let obj = responseData
    let readableObj = '{\n'
    for(let key in obj){
      readableObj += '\t'
      readableObj += typeof(obj[key]) === 'string' ? `${key}:"${obj[key]}"` : `${key}:${obj[key]}`
      if(Object.keys(obj).pop() !== key.toString()){
        readableObj += ',\n'
      }
    }
     readableObj += '\n}'


  return (
    <>
    <Typography mt={3} mb={2}>Response</Typography>
    <Box className={classes.component}>
    <TextareaAutosize 
    minRows={3}
    maxRows={7}
    style={textAreaStyle}
    disabled='disabled'
    value={readableObj}
    >

    </TextareaAutosize>
    </Box>
    </>
  )
}

export default Responce