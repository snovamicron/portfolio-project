import React, { useState } from 'react'
import {
    Box,
    Tab,
} from '@mui/material'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { makeStyles } from '@mui/styles'
import CreateTable from './CreateTable'

const useStyles = makeStyles({
    component:{
        // border:'2px solid black',
        padding:10,
        margin:'10px 0'
    },
    tab:{
        textTransform:'none !important'
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
            <Box className={classes.component}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList TabIndicatorProps={{ sx:{backgroundColor:'red', bottom:2, height:3}}} onChange={handleChange} textColor='none'>
                            <Tab className={classes.tab} label="Params" value="1" />
                            <Tab className={classes.tab} label="Header" value="2" />
                            <Tab className={classes.tab} label="Body" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <CreateTable Text='Querry Params'/>
                    </TabPanel>
                    <TabPanel value="2">
                    <CreateTable Text='Header'/>
                    </TabPanel>
                    <TabPanel value="3">
                    <CreateTable Text='Body'/>
                    </TabPanel>
                </TabContext>
            </Box>
        </>
    )
}

export default SelectTab