import { useState, useContext } from 'react'

//context
import { SnackContext } from '../../context/SnackContextProvider'

//MUI components
import { Card, CardContent, CardActions, TextField, Box, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    container:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        height:'80vh',
    },
    card:{
        minWidth:'40%',  
        boxShadow:'0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%) !important'
    },
    cardContent:{
        display:'flex',
        flexDirection:'column',
        padding:'10px !important',
        backgroundColor:'rgb(241, 243, 244)'
    },
    textField:{
        margin:"5px !important",
        backgroundColor:'#ffffff',
    }
})

const Singin = ()=>{
    const classes = useStyles()
    const { setSnackopen, setMsg } = useContext(SnackContext)
    const [fromData, getFromData]= useState({
        name:'',
        username:'',
        email:'',
        password:''
    })

    const onDataChange = (e)=>{
        getFromData({ ...fromData, [e.target.name]:e.target.value})
    }
    const onSubmit = ()=>{
      
    }
    return (
        <>
        <Box className={classes.container}>
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <TextField onChange={onDataChange} name='username' placeholder='Enter a username' label="username" size='small' className={classes.textField}/>
                <TextField onChange={onDataChange} name = 'name'placeholder='Use minimum 3 characters' label='name' size='small' className={classes.textField}/>
                <TextField onChange={onDataChange} name='email' placeholder='Enter your email' label='email' size='small' className={classes.textField}/>
                <TextField onChange={onDataChange} name='password' type='password' placeholder='Create a strong password (min 5 char)' label='password' size='small' className={classes.textField}/>
            </CardContent>
            <CardActions className={classes.cardContent}>
                <Button onClick={onSubmit} variant="contained" color='success'> Submit </Button>
            </CardActions>
        </Card>
        </Box>
        </>
    )    
}

export default Singin