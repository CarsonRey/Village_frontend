let initialState = {
  donations: [],
  userDonations: [],
  chosenDonation: {}
}


const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SET_AVAILABLE_DONATION_JOBS': {
      return {...state, donations: action.payload}
    }
    case 'SET_USER_DONATIONS': {
      return {...state, userDonations: action.payload}
    }
    case 'SET_CHOSEN_DONATION': {
      // console.log("hitting", action.payload)
      return {...state, chosenDonation: action.payload}
    }
    case 'UPDATE_DONATIONS': {
      let first = state.donations.filter(donation => donation.id !== action.payload.id)
      let donations = [...first, action.payload]
      return {...state, donations: donations}
    }
    default:
      return state
  }

}

export default reducer
