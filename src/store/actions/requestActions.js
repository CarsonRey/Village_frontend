const base_url = "http://localhost:3000/api/v1"
/*---------- ACTION CREATORS ----------*/
const getRequests = (requests) => {
  return {
    type: 'GET_REQUESTS',
    payload: requests
  }
}


/*---------- THUNK CREATORS ----------*/

export const getAllRequests = (user) => {
  return (dispatch) => {
    return fetch(`${base_url}/requests`)
                .then(r => r.json())
                .then(requests => dispatch(getRequests(requests)))
}
}
