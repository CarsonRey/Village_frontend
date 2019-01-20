const initialState = {
  showHourForm: false,
  userHours: []
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SHOW_OR_HIDE_HOUR_FORM': {
      console.log(action.payload)
      let showingOrNot = !action.payload
      return {...state, showHourForm: showingOrNot}
    }
    case 'SET_USER_HOURS': {
      return {...state, userHours: action.payload}
    }
    default:
      return state
  }

}

export default reducer
