import React, { useState, useContext } from 'react'
import {
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from '@mui/material'
import AddRow from './CreateTable/AddRow'
import { makeStyles } from '@mui/styles'
import { TableRowsContext } from '../../../context/TableRowsContext'

const useStyles = makeStyles({
  component: {
    border: '1px solid rgb(224, 224, 224, 1)',
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid rgb(224, 224, 224, 1)',
    padding: '9px !important'
  },
  title: {
    margin: '10px 0 !important'
  }
})

const CreateTable = ({ Text, Rows }) => {

  const classes = useStyles()
  // const [rows, addRows] = useState([0])
  
  // const [paramsRows, addParamRows] = useState([0])
  // const [headerRows, addHeaderRows] = useState([0])

  const { rows, addRows} = useContext(TableRowsContext) 
  
  return (
    <>
      <Typography className={classes.title}>{Text}</Typography>
      <Table className={classes.component}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell}></TableCell>
            <TableCell className={classes.tableCell}>KEY</TableCell>
            <TableCell className={classes.tableCell}>VALUE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            Text === 'Header'?rows.headers.map((row, index) => {
              return <AddRow
                addRows={addRows}
                rows={rows}
                rowId={index}
                key={index}
                Text={Text}
              />
            }):rows.params.map((row, index) => {
              return <AddRow
                addRows={addRows}
                rows={rows} 
                rowId={index}
                key={index}
                Text={Text}
              />
            })
          }
        </TableBody>
      </Table>
    </>
  )
}

export default CreateTable