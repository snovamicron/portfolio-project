import { TextareaAutosize } from '@mui/material'
import React from 'react'

const JsonTextFiled = () => {

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