import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer'
import requestReducer from './reducers/requestReducer'
import donationReducer from './reducers/donationReducer'



const rootReducer = combineReducers({ userInfo: userReducer, requestInfo: requestReducer , donationInfo: donationReducer})

//

const store = createStore(rootReducer, applyMiddleware(thunk))
// console.log("testing", store.getState())
export default store

export const base_url = () =>{
  return "http://localhost:3000/api/v1"
}




export * from './RoleOutput'
export * from './actions/userActions'
export * from './actions/requestActions'
export * from './actions/donationActions'
