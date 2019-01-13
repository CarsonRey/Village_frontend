const initialState = {
  requests: [],
  receiverRequests: []
}


const reducer = (state = initialState, action) => {
// console.log("state in req reduce", state)
  switch (action.type) {
    case 'SET_REQUESTS': {
      return {...state, requests: action.payload}
    }
    case 'SET_RECEIVER_REQUESTS':{
      return {
        ...state, receiverRequests: action.payload
      }
    }
    default:
      return state
  }

}

export default reducer
