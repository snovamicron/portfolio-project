import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    logo:{
        width:'150px'
    }
})

const Header = () => {
    const classes = useStyles()
  return (
    <>
        <img className={classes.logo} src="CLIENT NOVA.png" alt="logo" />
    </>
  )
}

export default Header   