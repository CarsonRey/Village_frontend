const initialState = {
  deliveries: null,
  setUserDeliveries: null
}


const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SET_DELIVERIES': {
      return {...state, donations: action.payload}
    }
    case 'SET_USER_DELIVERIES': {
      return {...state, userDonations: action.payload}
    }
    default:
      return state
  }

}

export default reducer
