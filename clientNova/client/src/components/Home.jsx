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
import { GetData } from '../services/Api'
import LoadingScreen from './Home/Footer/LoadingScreen'


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
  const [responseError, setResponseError] = useState(false)
  const [responseData, setResponseData] = useState()
  const [loading, setLoading] = useState(false)

  const onSendClick = async () => {
    setLoading(true)
    if (!CheckValidation(paramData, headerData, formData, jsonText, setErrorMsg)) {
      setError(true)
      return false
    }

    const response = await GetData(paramData, headerData, formData, jsonText)

    if(response === 'error'){
      setLoading(false)
      setResponseError(true)
      return
    }

    setResponseData(response.data)
    setLoading(false)
    setResponseError(false)
  }

 
  return (
    <>
      <Header />
      <Box className={classes.component}>
        <Form onSendClick={onSendClick} />
        <SelectTab />
        {loading ? <LoadingScreen/> : responseError ? <ErrorScreen/> : <Responce responseData={responseData}/>}
        {error && <SnackBar error={error} setError={setError} errorMsg={errorMsg} />}
      </Box>
    </>
  )
}

export default Home