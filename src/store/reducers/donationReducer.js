let initialState = {
  donations: [],
  userDonations: []
}


const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SET_AVAILABLE_DONATION_JOBS': {
      return {...state, donations: action.payload}
    }
    case 'SET_USER_DONATIONS': {
      return {...state, userDonations: action.payload}
    }
    default:
      return state
  }

}

export default reducer
