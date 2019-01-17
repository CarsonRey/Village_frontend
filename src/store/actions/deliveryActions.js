import { assignDonationToDelivery } from './donationActions'
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

export const setSelectedDelivery = (delivery) => {
  return {
    type: 'SET_SELECTED_DELIVERY',
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

export const createDelivery = (params, donationId) => {
   return (dispatch) => {
     return fetch (`${base_url}/deliveries`, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({giver_id: params.giver_id, receiver_id: params.receiver_id, deliverer_id: params.deliverer_id})
     })
     .then(r => r.json())
     .then(delivery => {
       dispatch(updateDeliveries(delivery))
       dispatch(assignDonationToDelivery(donationId, delivery.id))
     })
   }
}

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

export const userHasRatedDelivery = (deliveryId, userRole) => {
  let params

  userRole === "1" ? params = {giver_has_rated: true} : params = {receiver_has_rated: true}


  return (dispatch) => {
    return fetch (`${base_url}/rated/${deliveryId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })
    .then(r => r.json())
    .then(delivery => dispatch(updateDeliveries(delivery)))
  }
}
