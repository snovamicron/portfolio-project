import React from 'react'
import Form from './Form'
import Header from './Header'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system'
import SelectTab from './SelectTab'

const useStyles = makeStyles({
  component: {
    // border:'2px solid #000000',
    width:'70%',
    margin:'auto'
  }
})

const Home = () => {
  const classes = useStyles()
  return (
    <>
        <Header />
      <Box className={classes.component}>
        <Form />
        <SelectTab/>
      </Box>
    </>
  )
}

export default Home