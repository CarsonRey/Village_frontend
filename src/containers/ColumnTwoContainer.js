import React from 'react';
import { getColumnTwoHeader } from '../store'


const ColumnTwoContainer = (props) => {
  return(
    // donations in progress <-- iterate over deliveries that belong to that donator, that haven't been delivered or don't have a pick_up time
    // deliveries in progress <-- iterate over deliveries that belong to that deliverer that aren't delivered
    // deliveries in progress <-- iterate over deliveries that belong to that receiver
    <h3>{getColumnTwoHeader(localStorage.userRoleId)}</h3>
  )
}

export default ColumnTwoContainer
