import React, { useState } from 'react'
import {
    TableRow,
    TableCell,
    Checkbox,
    TextField
} from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    component:{
        border:'1px solid rgb(224, 224, 224, 1)',
        padding:'9px !important'
          
    },
    checkbox:{
        padding:'0 !important'
    },
    text:{
        width:'100%',
    }
})

const AddRow = ({ rowId, addRows, Text, rows }) => {
    const classes = useStyles()
    const [checkBoxValue, setCheckBoxValue] = useState(false)

    const handleCheckBox = (e)=>{
        if(!checkBoxValue){
            setCheckBoxValue(true)
            Text === 'Header'?addRows({ ...rows, headers:[...rows.headers, rowId]}):
            addRows({...rows, params:[...rows.params, rowId]})
        }else{
            setCheckBoxValue(false)
        }
    }


  return (
    <>
     <TableRow>
         <TableCell className={classes.component}>
            <Checkbox onChange={handleCheckBox} checked={checkBoxValue} size='large' className={classes.checkbox}/>
         </TableCell>
         <TableCell className={classes.component}>
            <TextField inputProps={{style:{height:'30px' , padding:'0 5px'}}} className={classes.text} />
         </TableCell>
         <TableCell className={classes.component}>
         <TextField inputProps={{style:{height:'30px',padding:'0 5px'}}} className={classes.text} />  
         </TableCell>
     </TableRow>
    </>
  )
}

export default AddRow