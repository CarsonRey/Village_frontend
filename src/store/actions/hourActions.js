// import { userHasRatedDelivery } from '../helperMethods/DateTimeFormatting'
// const base_url = "http://localhost:3000/api/v1/"
const base_url = "https://village-api.herokuapp.com/api/v1"

/*---------- ACTION CREATORS ----------*/

export const setUserHours = (hours) => {
  return {
    type: 'SET_USER_HOURS',
    payload: hours
  }
}

export const showOrHideHoursForm = (showingOrNot) => {
  return {
    type: 'SHOW_OR_HIDE_HOUR_FORM',
    payload: showingOrNot
  }
}

/*---------- THUNK CREATORS ----------*/

export const filterDays = (daysArray) => {
  return (dispatch) => {
console.log(" 1/4 hitting filterDays. daysArray is ", daysArray)
  daysArray.forEach((dayObject, index) => dispatch(determineDay(dayObject, index + 1)))
  }
}


const createHours = (hourRange, dayId) => {
  let userId = parseInt(localStorage.userId)
console.log("3/4 hitting createHours. hourRange is ", hourRange)
console.log("3/4 hitting createHours. dayId is ", dayId)
  return (dispatch) => {
    return fetch (`${base_url}/hours`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({time_range: hourRange, day_id: dayId})
    })
    .then(r => r.json())
    .then(hourInstance => {  dispatch(associateHourWithUser(hourInstance.id, userId))
    }).catch(console.log)
  }

}


const associateHourWithUser = (hourId, userId) => {
  console.log("4/4 hitting associateHourWithUser. hourId is ", hourId)
  console.log("4/4 hitting associateHourWithUser. userId is ", userId)
  return (dispatch) => {
    return fetch (`${base_url}/user_hours`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user_id: userId, hour_id: hourId})
    })
    .then(r => r.json())
    .then(hourInstance => {

    }).catch(console.log)
  }
}

// const fetchHours = (hourId, userId) => {
//
//   return (dispatch) => {
//     return fetch (`${base_url}/hours`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({user_id: userId, hour_id: hourId})
//     })
//     .then(r => r.json())
//     .then(allHours => {
//
//       dispatch(setUserHours(hours))
//     })
//   }
// }

/*---------- HELPER METHODS ----------*/

const determineDay = (object, id) => {
  return (dispatch) => {
    console.log("2/4 hitting determineDay. object is ", object)
    console.log("2/4 hitting determineDay. id is ", id)
   let day = Object.keys(object)[0]
   let start = object[day].start
   let end = object[day].end
   let timeRange = `${start} - ${end}`

   dispatch(createHours(timeRange, id))
 }
}




// if a user does not have hours, which will be stored in the userHours hoursReducer, we prompt them to add their hours. Maybe we'll use a settings gear with a red dot on it.














// const addDayIdToHour = (hour, dayId) => {
  //
  //
  //   return (dispatch) => {
    //     return fetch (`${base_url}/hours/${hour.id}`, {
      //       method: 'POST',
      //       headers: {
        //         'Content-Type': 'application/json'
        //       },
        //       body: JSON.stringify({day_id: dayId})
        //     })
        //     .then(r => r.json())
        //     .then(hourInstance => {
          //       dispatch(associateHourWithUser(hourInstance.id, userId))
          //     })
          //   }
          // }
