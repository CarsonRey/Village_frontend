// import { base_url } from '../store'

const base_url = "http://localhost:3000/api/v1/"
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

export const addRequest = (request) => {
  return {
    type: 'ADD_REQUEST',
    payload: request
  }
}

export const setChosenRequest = (request) => {
  return {
    type: 'SET_CHOSEN_REQUEST',
    payload: request
  }
}

export const updateRequests = (request) => {
  return {
    type: 'UPDATE_REQUESTS',
    payload: request
  }
}

export const showOrHideForm = (isShowing) => {
  return {
    type: 'SHOW_OR_HIDE_FORM',
    payload: isShowing
  }
}


/*---------- THUNK CREATORS ----------*/
export const getRequests = (userId) => {
  return (dispatch) => {
    // debugger
    return fetch(`${base_url}/requests`)
                .then(r => r.json())
                .then(requests => {
                  let unfulfilledRequests

                  if (userId){
                    let receiverRequests = requests.filter(request => (request.user_id === userId) && (request.taken === false))
                    dispatch(setReceiverRequests(receiverRequests))
                  }

                    else {
                    unfulfilledRequests = requests.filter(request => request.taken === false )
                    dispatch(setRequests(unfulfilledRequests))
                  }

                })
 }
}

export const createRequest = (params) => {
  return (dispatch) => {

    return fetch(`${base_url}/requests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({mouths_to_feed: params.mouths_to_feed, user_id: params.user_id, taken: false})
    })
    .then(r => r.json())
    .then(request => {
      dispatch(addRequest(request))
    })
 }
}


export const updateRequest = (requestId) => {
  return (dispatch) => {
    return fetch(`${base_url}/request_taken/${requestId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({taken: true})
    })
    .then(r => r.json())
    .then(request => {
      // debugger
      dispatch(updateRequests(request))
    })
 }
}
