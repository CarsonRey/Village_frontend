import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer'
import requestReducer from './reducers/requestReducer'

const rootReducer = combineReducers({ userInfo: userReducer, requestInfo: requestReducer })

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store

// const base_url = "http://localhost:3000/api/v1"

export * from './actions/userActions'
export * from './actions/requestActions'
