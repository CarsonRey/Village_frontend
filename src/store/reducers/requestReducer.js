const initialState = {
  requests: [],
  receiverRequests: []
}


const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SET_REQUESTS': {
      return {...state, requests: action.payload}
    }
    case 'SET_RECEIVER_REQUESTS':{
      return {...state, receiverRequests: action.payload}
    }
    default:
      return state
  }

}

export default reducer
