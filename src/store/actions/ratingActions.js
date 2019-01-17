import { userHasRatedDelivery } from './deliveryActions'
const base_url = "http://localhost:3000/api/v1"


/*---------- THUNK CREATORS ----------*/

export const createRating = (params, deliveryId) => {
   let userRole = localStorage.userRoleId
   return (dispatch) => {
     return fetch (`${base_url}/ratings`, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(params)
     })
     .then(r => r.json())
     .then(rating => {
       dispatch(userHasRatedDelivery(deliveryId, userRole))
     })
   }
}
