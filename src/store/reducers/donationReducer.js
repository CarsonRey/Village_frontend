let initialState = {
  donations: [],
  userDonations: [],
  chosenDonation: {},
  showJobDetail: false
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
    case 'SHOW_OR_HIDE_JOB_DETAIL': {
      let showingOrNot = !action.payload
      return {...state, showJobDetail: showingOrNot}
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
