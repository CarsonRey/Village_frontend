import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer'

const rootReducer = combineReducers({ userInfo: userReducer })

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store

export * from './actions/userActions'
