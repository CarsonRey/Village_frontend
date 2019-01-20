import { createFoodItem } from './foodItemActions'
import { updateRequest } from './requestActions'


const base_url = "http://localhost:3000/api/v1"


 /*---------- ACTION CREATORS ----------*/
 const setAvailableDonationJobs = (donations) => {
   return {
     type: 'SET_AVAILABLE_DONATION_JOBS',
     payload: donations
   }
 }

 const setUserDonations = (donations) => {
   return{
     type: 'SET_DONATOR_DONATIONS',
     payload: donations
   }
 }

 export const setChosenDonation = (donation) => {
   // console.log("hitting actions")
   return{
     type: 'SET_CHOSEN_DONATION',
     payload: donation
   }
 }

 const updateDonations = (donation) => {
   return{
     type: 'UPDATE_DONATIONS',
     payload: donation
   }
 }

 export const showOrHideJobDetail = (showingOrNot) => {
   return{
     type: 'SHOW_OR_HIDE_JOB_DETAIL',
     payload: showingOrNot
   }
 }


/*---------- THUNK CREATORS ----------*/

export const getDonations = (userId) => {
  return (dispatch) => {
    // debugger
    return fetch(`${base_url}/donations`)
                .then(r => r.json())
                .then(donations => {

                  if (userId){
                    let donatorDonations = donations.filter(donation => donation.user_id === userId)
                    dispatch(setUserDonations(donatorDonations))
                  } else {
                    let availableDonations = donations.filter(donation => donation.delivery_id === null)
                    dispatch(setAvailableDonationJobs(availableDonations))
                  }

                })
}
}

export const createDonation = (params, foodItems) => {
  return (dispatch) => {
    // debugger
    return fetch(`${base_url}/donations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({request_id: params.request_id, giver_id: params.giver_id, receiver_id: params.receiver_id})
    })
                .then(r => r.json())
                .then(donation => {
                  dispatch(updateRequest(params.request_id))
                  foodItems.forEach(foodItem => {
                    dispatch(createFoodItem(foodItem, donation.id))
                  })
                })
}
}

export const assignDonationToDelivery = (donationId, deliveryId) => {
  return (dispatch) => {
    // debugger
    return fetch(`${base_url}/add_to_delivery/${donationId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({delivery_id: deliveryId})
    })
                .then(r => r.json())
                .then(donation => {
                    dispatch(updateDonations(donation))
                  })
                }
}
