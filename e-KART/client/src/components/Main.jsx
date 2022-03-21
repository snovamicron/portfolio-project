import { useState } from 'react'

import { 
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'



// components
import Header from './Main/Header'
import Home from './Main/Home'
import Cart from './Main/Cart'
import Login from './Main/Login'
import Singin from './Main/Singin'

const Main = ()=>{
    const [open, setOpen] = useState({ login: false, singin: false})
    return(
        <>
        <Router>
        <Header setOpen={setOpen} open={open}/>
        <Login open={open} setOpen={setOpen}/>
        <Singin open={open} setOpen={setOpen}/>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/cart' element={<Cart/>}/>
        </Routes>
        </Router>
        </>
    )
}


export default Main