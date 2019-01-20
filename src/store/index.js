import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer.js'
import requestReducer from './reducers/requestReducer.js'
import donationReducer from './reducers/donationReducer.js'
import deliveryReducer from './reducers/deliveryReducer.js'
import ratingReducer from './reducers/ratingReducer.js'
import hourReducer from './reducers/hourReducer.js'



const rootReducer = combineReducers({ userInfo: userReducer, requestInfo: requestReducer , donationInfo: donationReducer, deliveryInfo: deliveryReducer, ratingInfo: ratingReducer, hourInfo: hourReducer})



const store = createStore(rootReducer, applyMiddleware(thunk))
// console.log("testing", store.getState())
export default store

export const base_url = () =>{
  return "http://localhost:3000/api/v1"
}


export * from './helperMethods/DateTimeFormatting.js'
export * from './helperMethods/RoleOutput.js'
export * from './actions/userActions'
export * from './actions/requestActions'
export * from './actions/donationActions'
export * from './actions/deliveryActions.js'
export * from './actions/ratingActions'
export * from './actions/hourActions.js'
