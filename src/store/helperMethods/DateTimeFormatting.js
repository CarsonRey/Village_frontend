export const formatTime = (date) => {
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
    }
    let AMorPM = (hour >= 12 && hour !== 24) ? "pm" : "am"
    return `${newHour}:${newMinute}${AMorPM}`
}
