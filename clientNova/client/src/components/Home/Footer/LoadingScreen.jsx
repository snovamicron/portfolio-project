

import React from 'react'
import { Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { height } from '@mui/system'

const useStyles = makeStyles({
    error:{
        width:'5%',
        margin:'0 10px'
    },
    component:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'40vh'
    }
})

const LoadingScreen = () => {
    const error = 'loading.png'
    const classes = useStyles()
  return (
    <>
    <Box className={classes.component}>
        <img src={error} alt="Error" className={classes.error} />
        <Typography>Loading...</Typography>
    </Box>
    </>
  )
}

export default LoadingScreen