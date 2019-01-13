const initialState = {
  user: {},
  chosenRole: null
  // route: null
}


const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'CHOOSE_ROLE': {
      console.log(action.payload)
      return {...state, chosenRole: action.payload}
    }
    case 'STORE_USER': {
      console.log(action.payload)
      return {...state, user: action.payload}
    }
    default:
      return state
  }

}

export default reducer

// case 'CHANGE_ROUTE': {
//   return {...state, route: action.payload}
// }
