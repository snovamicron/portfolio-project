import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// reducers
import SetProducts from './reducers/SetProductsReducer'

const reducers = combineReducers({
    SetProducts
})


export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))