import { useState } from "react"

// MUI components
import { Box } from '@mui/material'

// components
import SearchAppBar from "./Home/Header"
import Notes from "./Home/Notes"
import SideDrawer from "./Home/SideDrawer"

const Home = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
         <SearchAppBar open={open} setOpen={setOpen}/>
        <Box style={{display:'flex', width:'100%'}}>
        <SideDrawer open={open}/>
         <Notes/>
        </Box>
        </>
    )
}


export default Home