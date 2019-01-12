const initialState = {
  user: null,
  chosenRole: null,
  route: null
}


const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'CHOOSE_ROLE': {
      return {...state, chosenRole: action.payload}
    }
    case 'STORE_USER': {
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
