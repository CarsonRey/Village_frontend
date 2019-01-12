// import { push } from 'react-router-redux'
// import { browserHistory } from 'react-router'

const base_url = "http://localhost:3000/api/v1"
/*---------- HELPER METHODS ----------*/
// const determineRole = () => {
//
// }

/*---------- ACTION CREATORS ----------*/
export const chooseRole = (role) => {
  // console.log("hi i made mom")
  return {
    type: 'CHOOSE_ROLE',
    payload: role
  }
}

// export const changeRoute = (route) => {
//   // console.log("hi i made mom")
//   return {
//     type: 'CHANGE_ROUTE',
//     payload: route
//   }
// }

const storeUser = (user) => {
  return {
    type: 'STORE_USER',
    payload: user
  }
}



/*---------- THUNK CREATORS ----------*/

export const createUser = (user) => {
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
      storeUser(userInfo.user)
      chooseRole(userInfo.user.role_id)
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
      localStorage.setItem("token", userInfo.jwt)
      localStorage.setItem("userRoleId", userInfo.user.role_id)
      localStorage.setItem("userName", userInfo.user.name)
      dispatch(storeUser(userInfo.user))
      dispatch(chooseRole(userInfo.user.role_id))
      // // browserHistory.push('/')
      // dispatch(push('/'))
    })
  }
}
