import { useState } from "react"


// components
import SearchAppBar from "./Home/Header"
import SideDrawer from "./Home/SideDrawer"

const Home = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
         <SearchAppBar open={open} setOpen={setOpen}/>
         <SideDrawer open={open}/>
        </>
    )
}


export default Home