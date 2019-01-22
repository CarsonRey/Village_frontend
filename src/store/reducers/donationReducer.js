let initialState = {
  donations: [],
  userDonations: [],
  chosenDonation: {},
  showJobDetail: false,
  showDonationForm: false,
  showPastDetail: false
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
      return {...state, chosenDonation: action.payload}
    }
    case 'SHOW_OR_HIDE_JOB_DETAIL': {
      return {...state, showJobDetail: !action.payload}
    }
    case 'SHOW_OR_HIDE_PAST_DETAIL': {
      return {...state, showPastDetail: !action.payload}
    }
    case 'SHOW_OR_HIDE_DONATION_FORM': {
      return {...state, showDonationForm: !action.payload}
    }
    case 'UPDATE_DONATIONS': {
      let donations = state.donations.filter(donation => donation.id !== action.payload.id)
      return {...state, donations: donations}
    }
    default:
      return state
  }

}

export default reducer
