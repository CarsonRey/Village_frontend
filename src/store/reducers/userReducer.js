const initialState = {
  user: null,
  chosenRole: null,
  route: null
}


const reducer = (state = initialState, action) => {
console.log(action)
  switch (action.type) {
    case 'CHOOSE_ROLE': {
      return {...state, chosenRole: action.payload}
    }
    case 'STORE_USER': {
      return {...state, user: action.payload}
    }
    // case 'CHANGE_ROUTE': {
    //   return {...state, route: action.payload}
    // }
    case 'ADD_USER':
    default:
      return state
  }
}

export default reducer
