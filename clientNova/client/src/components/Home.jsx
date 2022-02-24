import React, { useContext, useState } from 'react'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system'
import { DataContext } from '../context/DataContext'
import CheckValidation from '../Utils/commonUtils'

//componants
import Header from './Home/Header'
import Form from './Home/Form'
import SelectTab from './Home/SelectTab'
import Responce from './Home/Footer/Responce'
import ErrorScreen from './Home/Footer/ErrorScreen'
import SnackBar from './Home/SnackBar'


const useStyles = makeStyles({
  component: {
    // border:'2px solid #000000',
    width: '70%',
    margin: '40px auto',
  }
})

const Home = () => {
  const classes = useStyles()

  const { paramData, headerData, formData, jsonText } = useContext(DataContext)
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const onSendClick = () => {
    if (!CheckValidation(paramData, headerData, formData, jsonText, setErrorMsg)) {
      setError(true)
      return false
    }
  }
  return (
    <>
      <Header />
      <Box className={classes.component}>
        <Form onSendClick={onSendClick} />
        <SelectTab />
        {/* <Responce/> */}
        <ErrorScreen />
        {error && <SnackBar error={error} setError={setError} errorMsg={errorMsg} />}
      </Box>
    </>
  )
}

export default Home