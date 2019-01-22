const initialState = {
  showRatingForm: false,
  ratings: []
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SHOW_OR_HIDE_RATING_FORM': {
      let showingOrNot = !action.payload
      return {...state, showRatingForm: showingOrNot}
    }
    case 'SET_RATINGS': {
      // console.log("hitting", action.payload)
      return {...state, ratings: action.payload}
    }
    default:
      return state
  }

}

export default reducer
