import React, { useContext } from 'react'
import { makeStyles } from '@mui/styles'
import {
    Box,
    Select,
    MenuItem,
    FormControl,
    TextField,
    Button,
} from '@mui/material'
import { DataContext } from '../../context/DataContext'

const useStyles = makeStyles({
    method: {
        width:'100px',
        height:40

    },
    input:{
        width:'70%',
        margin:'0 8px 0 0 !important',
    },
    besic:{
        width:'auto',
        // border:'2px solid black',   
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        padding:'2px',
    }
})

const Form = ({ onSendClick }) => {

    const classes = useStyles()
    const { formData, setFormData } = useContext(DataContext)

    const handleChange = (event) => {
        setFormData({ ...formData , type: event.target.value});
    }

    const onUrlChange = (event) => {
        setFormData({ ...formData, url: event.target.value})
    }

    return (
        <>
           <Box className={classes.besic}>
            <FormControl>
           <Select
                value={formData.type}
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
            <TextField onChange={onUrlChange} className={classes.input} size='small' label='URL' variant='outlined'/>
            <Button onClick={onSendClick} size='large' variant='contained'>SEND</Button>
           </Box>
        </>
    )
}

export default Form