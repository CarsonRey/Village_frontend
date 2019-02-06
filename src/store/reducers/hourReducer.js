const initialState = {
  showHourForm: false,
  userHours: [],
  refresh: ""
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SHOW_OR_HIDE_HOUR_FORM': {
      let showingOrNot = !action.payload
      return {...state, showHourForm: showingOrNot}
    }
    case 'SET_USER_HOURS': {
      return {...state, userHours: action.payload}
    }
    case 'REFRESH': {
      return {...state, refresh: action.payload}
    }
    default:
      return state
  }

}

export default reducer
