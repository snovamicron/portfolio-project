import { TextareaAutosize, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useContext } from 'react'
import { DataContext } from '../../../context/DataContext'

const useStyles = makeStyles({
  component:{
    margin:'10px 0 !important'
  }
})

const JsonTextFiled = () => {

    const textAreaStyle = {
        width:'90%',
        height:'70px',
        background: `url(http://i.imgur.com/2cOaJ.png)`,
        backgroundAttachment: 'local',
        backgroundRepeat: 'no-repeat',
        padding:'10px 35px',
        borderColor:'#ccc'
    }

    const classes = useStyles()

    const { setJsonText } = useContext(DataContext)

    const handleTextChange = (e)=>{
      setJsonText(e.target.value)
    }

  return (
    <>
    <Typography className={classes.component}>JSON</Typography>
    <TextareaAutosize 
    minRows={3}
    maxRows={5}
    style={textAreaStyle}
    onChange={handleTextChange}
    >

    </TextareaAutosize>
    </>
  )
}

export default JsonTextFiled