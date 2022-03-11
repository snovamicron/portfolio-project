import { useState, useContext } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// MUI components
import { Box } from '@mui/material'

// components
import SearchAppBar from "./Home/Header"
import SideDrawer from "./Home/SideDrawer"
import Notes from "./Home/Notes"
import Archive from "./Home/Archive"
import Deleted from "./Home/Deleted"
import Singin from './Home/Singin'
import SnackBar from "./Home/SanckBar"


//context
import { SnackContext } from "../context/SnackContextProvider"


const Home = () => {
    const [open, setOpen] = useState(true)
    const { snackopen, setSnackopen, msg } = useContext(SnackContext)
    return (
        <>
        <Router>
         <SearchAppBar open={open} setOpen={setOpen}/>
        <Box style={{display:'flex', width:'100%'}}>
        <SideDrawer open={open}/>
        <Routes>
         <Route exact path="/" element={<Notes/>} />
         <Route exact path="/archive" element={<Archive/>} />
         <Route exact path="/deleted" element={<Deleted/>} />
         <Route exact path="/singin" element={<Singin/>} />
         </Routes>
        </Box>
        <SnackBar open={snackopen} setOpen={setSnackopen} msg={msg}/>
        </Router>
        </>
    )
}


export default Home