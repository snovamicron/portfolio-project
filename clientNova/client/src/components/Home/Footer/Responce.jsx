import React from 'react'
import { Typography } from '@mui/material'
import JSONPretty from 'react-json-pretty'
import JSONPrettyMon from 'react-json-pretty/themes/monikai.css';
import './Responce.css'
import { margin } from '@mui/system';


const Responce = ({ responseData }) => {
  let data = responseData
  console.log(data);
  const logo = {
    height:'100px',
    display:'block',
    margin:'10px auto'
  }
  return (
    <>
      <Typography mt={3} mb={2}>Response</Typography>
      {data ?  <JSONPretty id="json-pretty" theme={JSONPrettyMon} data={data} /> : <img src='CLIENT NOVA.png' alt='Home Screen' style={logo}></img>}
    </>
  )
}

export default Responce