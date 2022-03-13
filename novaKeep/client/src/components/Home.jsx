import { useState, useContext, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//API
import { fetch_user_data } from "../Services/AuthApi"

// MUI components
import { Box } from '@mui/material'

// components
import SearchAppBar from "./Home/Header"
import SideDrawer from "./Home/SideDrawer"
import Notes from "./Home/Notes"
import Archive from "./Home/Archive"
import Deleted from "./Home/Deleted"
import Singin from './Home/Singin'
import Login from "./Home/Login"
import SnackBar from "./Home/SanckBar"


//context
import { SnackContext } from "../context/SnackContextProvider"
import { DataContext } from "../context/DataContextProvider"


const Home = () => {
    const [open, setOpen] = useState(true)
    const { snackopen, setSnackopen, msg } = useContext(SnackContext)
    const { setUserData, token } = useContext(DataContext)

    const fetchUserData = async () => {
        let response = await fetch_user_data(token)
        setUserData(response.data)
    }

    useEffect(() => {
        if (token) {
            fetchUserData()
        }
        return (() => {
            console.clear()
        })
        // eslint-disable-next-line
    }, [token])


    return (
        <>
            <Router>
                <SearchAppBar open={open} setOpen={setOpen} />
                <Box style={{ display: 'flex', width: '100%' }}>
                    <SideDrawer open={open} />
                    <Routes>
                        <Route exact path="/" element={<Notes />} />
                        <Route exact path="/archive" element={<Archive />} />
                        <Route exact path="/deleted" element={<Deleted />} />
                        <Route exact path="/singin" element={<Singin />} />
                        <Route exact path="/login" element={<Login />} />
                    </Routes>
                </Box>
                <SnackBar open={snackopen} setOpen={setSnackopen} msg={msg} />
            </Router>
        </>
    )
}


export default Home