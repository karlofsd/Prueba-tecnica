import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import postReducer from './posts'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore(postReducer,composeEnhancers(applyMiddleware(thunk)))
    return store
}