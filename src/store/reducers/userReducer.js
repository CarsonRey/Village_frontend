const initialState = {
  user: null,
  chosenRole: null

}


const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'CHOOSE_ROLE': {
      // console.log("CHOOSE_ROLE", action.payload)
      // console.log("state is", state)
      // debugger
      return {...state, chosenRole: action.payload}
    }
    case 'STORE_USER': {

      console.log("STORE_USER (reducer)", action.payload)
      // console.log("state is", state)
      // debugger
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
