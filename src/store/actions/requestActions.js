// import { base_url } from '../store'

const base_url = "http://localhost:3000/api/v1"
 /*---------- ACTION CREATORS ----------*/
const setRequests = (requests) => {
  return {
    type: 'SET_REQUESTS',
    payload: requests
  }
}

const setReceiverRequests = (requests) => {
  return {
    type: 'SET_RECEIVER_REQUESTS',
    payload: requests
  }
}

/*---------- THUNK CREATORS ----------*/

export const getRequests = (userId) => {
  return (dispatch) => {
    // debugger
    return fetch(`${base_url}/requests`)
                .then(r => r.json())
                .then(requests => {
                
                  if (userId){
                    let receiverRequests = requests.filter(request => request.user_id === userId)
                    dispatch(setReceiverRequests(receiverRequests))
                  } else {
                    dispatch(setRequests(requests))
                  }

                })
}
}

// if a user is passed in, then setReceiver, if not set all.

// export const getReceiverRequests = () => {
//   return (dispatch) => {
//     return fetch(`${base_url}/requests`)
//   }
// }
