const initialState = {
  requests: [],
  receiverRequests: [],
  chosenRequest: {}
}


const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SET_REQUESTS': {
      return {...state, requests: action.payload}
    }
    case 'SET_RECEIVER_REQUESTS':{
      return {...state, receiverRequests: action.payload}
    }
    case 'SET_CHOSEN_REQUEST':{
      return {...state, chosenRequest: action.payload}
    }
    default:
      return state
  }

}

export default reducer
