import React from 'react';
import { getColumnThreeHeader } from '../store'


const ColumnThreeContainer = (props) => {
  return(
    // Your Past Donations <-- iterate over deliveries that belong to that donator that are delivered
    // Your past deliveries <-- iterate over deliveries that belong to that deliverer that are delivered
    // Your past received donations <-- iterate over deliveries that belong to that receiver that are delivered
    <h3>{getColumnThreeHeader(localStorage.userRoleId)}</h3>
  )
}

export default ColumnThreeContainer
