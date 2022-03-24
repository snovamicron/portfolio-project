import { useState, useContext, useEffect } from 'react'
import { 
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'


// context
import { UserData } from '../context/UserContext'

// API
import { fetch_user } from '../services/AllUserApi'


// components
import Header from './Main/Header'
import Home from './Main/Home'
import Cart from './Main/Cart'
import Login from './Main/Login'
import Singin from './Main/Singin'

const Main = ()=>{
    const [open, setOpen] = useState({ login: false, singin: false})
    const { setData, jwt } = useContext(UserData)
    const fetchUserData = async (token)=>{
        const response = await fetch_user({ token })
        setData(response.data)
    }

    useEffect(() => {
      const token = localStorage.getItem('token')
      if(token){
          fetchUserData(token)
      }
       // eslint-disable-next-line
    }, [jwt])
    
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