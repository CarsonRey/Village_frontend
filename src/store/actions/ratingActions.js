import { userHasRatedDelivery } from './deliveryActions'
// const base_url = "http://localhost:3000/api/v1"
const base_url = "https://village-api.herokuapp.com/api/v1"
/*---------- ACTION CREATORS ----------*/
export const showOrHideRatingForm = (isShowing) => {
  return {
    type: 'SHOW_OR_HIDE_RATING_FORM',
    payload: isShowing
  }
}

const setRatings = (ratings) => {
  return {
    type: 'SET_RATINGS',
    payload: ratings
  }
}
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

export const getRatings = () => {
   return (dispatch) => {
     return fetch (`${base_url}/ratings`)
     .then(r => r.json())
     .then(ratings => {
       dispatch(setRatings(ratings))
     })
   }
}
