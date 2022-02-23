import React from 'react'
import Form from './Home/Form'
import Header from './Home/Header'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system'
import SelectTab from './Home/SelectTab'
import Responce from './Home/Footer/Responce'
import ErrorScreen from './Home/Footer/ErrorScreen'
import TableRowsContextProvider from '../context/TableRowsContext'

const useStyles = makeStyles({
  component: {
    // border:'2px solid #000000',
    width:'70%',
    margin:'40px auto',
  }
})

const Home = () => {
  const classes = useStyles()
  return (
    <>
        <Header/>
      <Box className={classes.component}>
        <Form />
        <TableRowsContextProvider>
        <SelectTab/>
        </TableRowsContextProvider>
        {/* <Responce/> */}
        <ErrorScreen/>
      </Box>
    </>
  )
}

export default Home