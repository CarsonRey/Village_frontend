const base_url = "http://localhost:3000/api/v1"

/*---------- ACTION CREATORS ----------*/
const setUserDeliveries = (deliveries) => {

  return {
    type: 'SET_USER_DELIVERIES',
    payload: deliveries
  }
}

/*---------- THUNK CREATORS ----------*/

export const getDeliveries = (role, userId) => {
  return (dispatch) => {
    return fetch (`${base_url}/deliveries`)
    .then(r => r.json())
    .then(deliveries => {
      // debugger
      let userDeliveries;
      if (role === "Donator"){
        userDeliveries = deliveries.filter(delivery => delivery.giver.id === userId)
        dispatch(setUserDeliveries(userDeliveries))
      }else if (role === "Deliverer"){
        userDeliveries = deliveries.filter(delivery => delivery.deliverer.id === userId)
        dispatch(setUserDeliveries(userDeliveries))
      }else if (role === "Receiver"){
        userDeliveries = deliveries.filter(delivery => delivery.receiver.id === userId)
        dispatch(setUserDeliveries(userDeliveries))
      }


    })
  }
}
