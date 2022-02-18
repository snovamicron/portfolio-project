import React, { useState } from 'react'
import {
    Box,
    Tab,
} from '@mui/material'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    tabs:{
        // border:'2px solid black',
        padding:10,
        margin:'10px 0'
    }
})

const SelectTab = () => {
    const classes = useStyles()
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);   
    };


    return (
        <>
            <Box className={classes.tabs}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Item One" value="1" />
                            <Tab label="Item Two" value="2" />
                            <Tab label="Item Three" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">Soumyadeep</TabPanel>
                    <TabPanel value="2">Item Two</TabPanel>
                    <TabPanel value="3">Item Three</TabPanel>
                </TabContext>
            </Box>
        </>
    )
}

export default SelectTab