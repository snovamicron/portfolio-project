import React from 'react'
import {
    TableRow,
    TableCell
} from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    component:{
        border:'1px solid rgb(224, 224, 224, 1)',
        
    }
})

const AddRow = () => {
    const classes = useStyles()
  return (
    <>
     <TableRow>
         <TableCell className={classes.component}>content</TableCell>
         <TableCell className={classes.component}>hello</TableCell>
         <TableCell className={classes.component}>hi</TableCell>
     </TableRow>
    </>
  )
}

export default AddRow