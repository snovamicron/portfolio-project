import React, { useState } from 'react'
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

const CreateTable = ({ Text, data, setData }) => {

  const classes = useStyles()
  const [rows, addRows] = useState([0])

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
            rows.map((row, index) => {
              return <AddRow
                addRows={addRows}
                rowId={index}
                key={index}
                data={data}
                setData={setData}
              />
            })
          }
        </TableBody>
      </Table>
    </>
  )
}

export default CreateTable