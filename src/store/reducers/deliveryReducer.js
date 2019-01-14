const initialState = {
  userDeliveries: []
}


const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SET_USER_DELIVERIES': {
      return {...state, userDeliveries: action.payload}
    }
    default:
      return state
  }

}

export default reducer
