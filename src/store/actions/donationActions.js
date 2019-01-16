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