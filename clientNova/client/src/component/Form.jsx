import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import {
    Box,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    TextField,
    Button
} from '@mui/material'
import { width } from '@mui/system'

const useStyles = makeStyles({
    method: {
        width:'120px'
    },
    input:{
        width:'800px',
        margin:'0 3px !important'
    },
    button:{
        height:'100%'
    },
    besic:{
        // border:'2px solid black',
        height:'55px',
        padding:'2px',
        textAlign:'center'
    }
})

const Form = () => {

    const classes = useStyles()
    const [method, setMethod] = React.useState('');

    const handleChange = (event) => {
        setMethod(event.target.value);
    };

    return (
        <>
           <Box className={classes.besic}>
            <FormControl className={classes.method}>
           <InputLabel id="demo-simple-select-label">METHOD</InputLabel>
           <Select
                value={method}
                label="METHOD"
                onChange={handleChange}
                className={classes.method}
            >
                <MenuItem value='GET'>GET</MenuItem>
                <MenuItem value='POST'>POST</MenuItem>
                <MenuItem value='DELETE'>DELETE</MenuItem>
                <MenuItem value='PUT'>PUT</MenuItem>
                <MenuItem value='PATCH'>PATCH</MenuItem>
                <MenuItem value='HEAD'>HEAD</MenuItem>
            </Select>
            </FormControl>
            <TextField className={classes.input} label='URL' variant='outlined'/>
            <Button className={classes.button} variant='contained'>SEND</Button>
           </Box>
        </>
    )
}

export default Form