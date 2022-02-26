import React from 'react'
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    error:{
        width:'59%',
        margin:'auto',
        // border:'2px solid black',
        marginBottom:10
    }
})

const ErrorScreen = () => {
    const error = 'https://i.stack.imgur.com/01tZQ.png'
    const classes = useStyles()
  return (
    <>
    <Box style={{display:'flex'}}>
        <img src={error} alt="Error" className={classes.error} />
    </Box>
    </>
  )
}

export default ErrorScreen