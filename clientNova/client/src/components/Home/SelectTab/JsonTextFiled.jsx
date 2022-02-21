import { TextareaAutosize, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles({
  component:{
    margin:'10px 0 !important'
  }
})

const JsonTextFiled = () => {

    const textAreaStyle = {
        width:'90%',
        height:'100px',
        background: `url(http://i.imgur.com/2cOaJ.png)`,
        backgroundAttachment: 'local',
        backgroundRepeat: 'no-repeat',
        padding:'10px 35px',
        borderColor:'#ccc'
    }

    const classes = useStyles()

  return (
    <>
    <Typography className={classes.component}>JSON</Typography>
    <TextareaAutosize 
    minRows={3}
    maxRows={7}
    style={textAreaStyle}
    >

    </TextareaAutosize>
    </>
  )
}

export default JsonTextFiled