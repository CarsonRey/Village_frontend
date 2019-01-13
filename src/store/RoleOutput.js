

/*---------- HEADER METHODS ----------*/
export const  getColumnOneHeader = (x) => {
  if (x === "1"){
    return "People In Need"
  }else if (x === "2") {
    return "Available Jobs"
  }else if (x === "3"){
    return "Recent Requests"
    // need to figure out userAction/Reducer!!
  }
}

export const  getColumnTwoHeader = (x) => {
  if (x === "1"){
    return "Donations in Progress"
  }else {
    return "Deliveries in Progress"
    // need to figure out userAction/Reducer!!
  }
}

export const  getColumnThreeHeader = (x) => {
  if (x === "1"){
    return "Your Past Donations"
  }else if (x === "2") {
    return "Yout Past Deliveries"
  }else if (x === "3"){
    return "Your Past Received Donations"
    // need to figure out userAction/Reducer!!
  }
}


/*---------- ?? METHODS ----------*/
