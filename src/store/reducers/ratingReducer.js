const initialState = {
  showRatingForm: false
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SHOW_OR_HIDE_RATING_FORM': {
      // debugger
      let showingOrNot = !action.payload
      return {...state, showRatingForm: showingOrNot}
    }
    default:
      return state
  }

}

export default reducer
