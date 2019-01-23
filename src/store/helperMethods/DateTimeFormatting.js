export const formatTime = (date) => {
  // debugger
    let hour = date.getHours()
    let minutes = date.getMinutes()
    let newMinute
    let newHour

    if (minutes < 10 ){
      newMinute = `0${minutes}`
    } else {
      newMinute = minutes
    }

    if (hour > 12) {
      newHour = hour - 12
    } else {
      newHour = hour
    }

    let AMorPM = (hour >= 12 && hour !== 24) ? "pm" : "am"
    return `${newHour}:${newMinute}${AMorPM}`
}

//
// export const determineHour = (hour) => {
//   if (if hour[1] !== ":" && parseInt(hour.substr(0,2) > 12) ){
//     let newHour = hour.split(":")
//     return
//   }
// }jklj

export const returnAverageRating = (giverRating, receiverRating) => {
  // debugger
  let x = giverRating ? giverRating.number : 0
  let y = receiverRating ? receiverRating.number : 0

  if(y === 0){
    return x
  }else if (x === 0){
    return y
  } else {
    return ((x+y)/2)
  }

}

// if giverRating is null, set it to zero, else return it and set it equal to x

// if receiverRating is null, set it to zero, else return it and set it equal to y

// return (x + y)/2
