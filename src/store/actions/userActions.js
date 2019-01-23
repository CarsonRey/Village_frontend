// import { push } from 'react-router-redux'
import { setUserHours } from './hourActions'
const base_url = "http://localhost:3000/api/v1/"
/*---------- HELPER METHODS ----------*/
// const determineRole = () => {
//
// }

/*---------- ACTION CREATORS ----------*/
export const chooseRole = (role) => {
  // console.log("hi i made mom", base_url)
  return {
    type: 'CHOOSE_ROLE',
    payload: role
  }
}

export const storeUser = (user) => {
console.log("STORE USER (action)", user)
  return {
    type: 'STORE_USER',
    payload: user
  }
}

/*---------- THUNK CREATORS ----------*/

export const createUser = (user) => {
  debugger
  return (dispatch) => {
    return fetch (`${base_url}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user})
    })
    .then(r => r.json())
    .then(userInfo => {
      // debugger
      localStorage.setItem("token", userInfo.jwt)
      localStorage.setItem("userRoleId", userInfo.user.role_id)
      dispatch(storeUser(userInfo.user))
      dispatch(chooseRole(userInfo.user.role_id))
    })
  }
}

export const getExistingUser = (user) => {
  return (dispatch) => {
    return fetch(`${base_url}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user})
    })
    .then(r => r.json())
    .then(userInfo => {
// debugger
      localStorage.setItem("token", userInfo.jwt)
      localStorage.setItem("userRoleId", userInfo.user.role_id)
      localStorage.setItem("userName", userInfo.user.name)
      localStorage.setItem("userId", userInfo.user.id)

      dispatch(storeUser(userInfo.user))
      dispatch(chooseRole(userInfo.user.role_id))

    })
  }
}

export const getUser = () => {
 return (dispatch) => {
   let token =  localStorage.getItem("token")
   return fetch("http://localhost:3000/api/v1/current_user", {
     method: "GET",
     headers: {
     "Content-Type": "application/json",
     'Action': "application/json",
     'Authorization': `${token}`
     }
   })
     .then(resp => resp.json())
       .then(resp => {
         // debugger
         dispatch(setUserHours(resp.hours))
         dispatch(storeUser(resp.user))
       })
 }
}
