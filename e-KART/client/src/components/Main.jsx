import { 
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'



// components
import Header from './Main/Header'
import Home from './Main/Home'
import Cart from './Main/Cart'

const Main = ()=>{
    return(
        <>
        <Router>
        <Header/>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/cart' element={<Cart/>}/>
        </Routes>
        </Router>
        </>
    )
}


export default Main