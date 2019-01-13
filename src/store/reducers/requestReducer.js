const initialState = {
  requests: []
}


const reducer = (state = initialState, action) => {
// console.log("state in req reduce", state)
  switch (action.type) {
    case 'GET_REQUESTS': {
      return {...state, requests: action.payload}
    }
    default:
      return state
  }

}

export default reducer
