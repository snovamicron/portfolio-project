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

 
    // const readableArray_1 = (array)=>{
    //   let arr = '[\n'
    //   for(let obj of array){
    //     arr += '\t'
    //     arr += readableObj_1(obj)
    //     arr += ',\n'
    //   }
    //   arr += ']'
    //   return arr
    // }
    
    const readableObj_1 = (obj)=>{
      let Obj = '{\n'
      for(let key in obj){
        Obj += '\t'
        if( typeof(obj[key]) === 'string'){
          Obj += `${key}:"${obj[key]}"`
        }else if( typeof(obj[key]) === 'object'){
          Obj += `${key}:${obj[key]}`
        }else {
          Obj += `${key}:${obj[key]}`
        }
        if(Object.keys(obj).pop() !== key.toString()){
        Obj += ',\n'
        }
      }
       Obj += '\t}'
       return Obj
      }
  

    const readableArray = (array)=>{
      let arr = '[\n'
      for(let obj of array){
        arr += '\t'
        arr += readableObj_1(obj)
        arr += ',\n'
      }
      arr += ']'
      return arr
    }

    const readableObj = (obj)=>{
      let Obj = '{\n'
      for(let key in obj){
        Obj += '\t'
        if( typeof(obj[key]) === 'string'){
          Obj += `${key}:"${obj[key]}"`
        }else if( typeof(obj[key]) === 'object'){
          Obj += `${key}:${readableArray(obj[key])}`
        }else {
          Obj += `${key}:${obj[key]}`
        }
        if(Object.keys(obj).pop() !== key.toString()){
        Obj += ',\n'
        }
      }
       Obj += '\n}'
       return Obj
      }

    let data = responseData
    console.log(data);
    
    let readableData = readableObj(data)

  return (
    <>
    <Typography mt={3} mb={2}>Response</Typography>
    <Box className={classes.component}>
    <TextareaAutosize 
    minRows={3}
    maxRows={5}
    style={textAreaStyle}
    disabled='disabled'
    value={readableData}
    >

    </TextareaAutosize>
    </Box>
    </>
  )
}

export default Responce