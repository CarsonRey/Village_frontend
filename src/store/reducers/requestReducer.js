const initialState = {
  requests: [],
  receiverRequests: [],
  chosenRequest: {},
  showRequestForm: false
}


const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SET_REQUESTS': {
      let sortedRequests = action.payload.sort((a, b) => b.id - a.id )
      return {...state, requests: sortedRequests}
    }
    case 'SET_RECEIVER_REQUESTS':{
      return {...state, receiverRequests: action.payload}
    }
    case 'SET_CHOSEN_REQUEST':{
      return {...state, chosenRequest: action.payload}
    }
    case 'SHOW_OR_HIDE_FORM':{
      let showingOrNot = !action.payload
      return {...state, showRequestForm: showingOrNot}
    }
    case 'ADD_REQUEST':{
      return {...state, receiverRequests: [action.payload,...state.receiverRequests] }
    }
    case 'UPDATE_REQUESTS':{
      let requests = state.requests.filter(request => request.id !== action.payload.id)
      return {...state, requests: requests}
    }
    default:
      return state
  }

}

export default reducer
