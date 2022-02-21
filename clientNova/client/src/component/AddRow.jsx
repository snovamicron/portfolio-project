import React from 'react'
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

const AddRow = () => {
    const classes = useStyles()
  return (
    <>
     <TableRow>
         <TableCell className={classes.component}>
            <Checkbox size='large' className={classes.checkbox}/>
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