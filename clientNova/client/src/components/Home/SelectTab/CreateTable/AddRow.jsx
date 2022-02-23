import React, { useState } from 'react'
import {
    TableRow,
    TableCell,
    Checkbox,
    TextField
} from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    component: {
        border: '1px solid rgb(224, 224, 224, 1)',
        padding: '9px !important'

    },
    checkbox: {
        padding: '0 !important'
    },
    text: {
        width: '100%',
    }
})



const AddRow = ({ rowId, addRows, data, setData }) => {
    const classes = useStyles()
    const [checkBoxValue, setCheckBoxValue] = useState(false)

    const CheckBoxData = (checked) => {
        let result = data.filter(obj => obj.id === rowId)[0]
        result = { ...result, id:rowId, checked }
    
        let index = data.findIndex(obj => obj.id === rowId)
    
        if (index === -1) {
            setData(oldArr => [...oldArr, result])
        } else {
            setData(oldArr => {
                oldArr.splice(index, 1, result)
                return oldArr
            })
        }
    }
    const handleCheckBox = (e) => {
        if (!checkBoxValue) {
            setCheckBoxValue(true)
            CheckBoxData(true)
            addRows(oldArr => [...oldArr, rowId])
        } else {
            setCheckBoxValue(false)
            CheckBoxData(false)
        }
    }

    const onTextChange = (e) => {

        let result = data.filter(obj => obj.id === rowId)[0]
        result = { ...result, id: rowId, [e.target.name]: e.target.value }

        let index = data.findIndex(obj => obj.id === rowId)

        if (index === -1) {
            setData(oldArr => [...oldArr, result])
        } else {
            setData(oldArr => {
                oldArr.splice(index, 1, result)
                return oldArr
            })
        }

    }


    return (
        <>
            <TableRow>
                <TableCell className={classes.component}>
                    <Checkbox onChange={handleCheckBox} name='checked' checked={checkBoxValue} size='large' className={classes.checkbox} />
                </TableCell>
                <TableCell className={classes.component}>
                    <TextField onChange={onTextChange} name='key' inputProps={{ style: { height: '30px', padding: '0 5px' } }} className={classes.text} />
                </TableCell>
                <TableCell className={classes.component}>
                    <TextField onChange={onTextChange} name='value' inputProps={{ style: { height: '30px', padding: '0 5px' } }} className={classes.text} />
                </TableCell>
            </TableRow>
        </>
    )
}

export default AddRow