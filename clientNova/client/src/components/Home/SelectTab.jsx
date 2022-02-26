import React, { useState, useContext } from 'react'
import {
    Box,
    Tab,
    Tabs
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import CreateTable from './SelectTab/CreateTable'
import JsonTextFiled from './SelectTab/JsonTextFiled'
import { DataContext } from '../../context/DataContext'

const useStyles = makeStyles({
    component: {
        // border:'2px solid black',
        padding: 10,
        margin: '10px 0'
    },
    tab: {
        textTransform: 'none !important'
    }
})

const SelectTab = () => {
    const classes = useStyles()
    const [value, setValue] = useState(0);
    const { paramData, setParamData, headerData, setHeaderData } = useContext(DataContext)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <>
            <Box className={classes.component}>

                <Tabs value={value} onChange={handleChange} TabIndicatorProps={{ sx: { backgroundColor: 'red', bottom: 2, height: 3 } }} textColor='none'>
                    <Tab className={classes.tab} label="Params" />
                    <Tab className={classes.tab} label="Header" />
                    <Tab className={classes.tab} label="Body" />
                </Tabs>
                <Box
                    role="tabpanel"
                    hidden={value !== 0}
                >
                    <CreateTable Text='Querry Param' data={paramData} setData={setParamData}/>

                </Box>
                <Box
                    role="tabpanel"
                    hidden={value !== 1}
                >
                    <CreateTable Text='Header' data={headerData} setData={setHeaderData} />

                </Box>
                <Box
                    role="tabpanel"
                    hidden={value !== 2}
                >
                    <JsonTextFiled />
                </Box>
            </Box>
        </>
    )
}

export default SelectTab