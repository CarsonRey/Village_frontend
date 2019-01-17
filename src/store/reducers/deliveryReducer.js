const initialState = {
  userDeliveries: [],
  selectedDelivery: []
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SET_USER_DELIVERIES': {
      return {...state, userDeliveries: action.payload}
    }
    case 'UPDATE_DELIVERIES': {
      let first = state.userDeliveries.filter(delivery => delivery.id !== action.payload.id)
      let userDeliveries = [...first, action.payload]
      return {...state, userDeliveries: userDeliveries}
    }
    case 'SET_SELECTED_DELIVERY': {
      console.log("changing selected")
      return {...state, selectedDelivery: action.payload}
    }
    default:
      return state
  }

}

export default reducer
