const base_url = "http://localhost:3000/api/v1"

/*---------- ACTION CREATORS ----------*/
const setUserDeliveries = (deliveries) => {

  return {
    type: 'SET_USER_DELIVERIES',
    payload: deliveries
  }
}

const updateDeliveries = (delivery) => {
  return {
    type: 'UPDATE_DELIVERIES',
    payload: delivery
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

// export default getDeliveries


export const finishDelivery = (oldDelivery, time) => {
  return (dispatch) => {
    return fetch (`${base_url}/delivery_done/${oldDelivery.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({drop_off: time, delivered: true})
    })
    .then(r => r.json())
    .then(delivery => dispatch(updateDeliveries(delivery)))
  }
}

export const completePickUp = (oldDelivery, time) => {
  return (dispatch) => {
    return fetch (`${base_url}/picked_up/${oldDelivery.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({pick_up: time})
    })
    .then(r => r.json())
    .then(delivery => dispatch(updateDeliveries(delivery)))
  }
}