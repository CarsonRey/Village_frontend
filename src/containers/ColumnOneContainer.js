import React from 'react';


const ColumnOneContainer = (props) => {
  return(
    // we want the heading here for each person
    // want to rely on connecting to the user state or localStorage

    // people in need <-- iterate over all requests (thunk, connect)
    // available jobs <-- iterate over all donations that don't have a delivery id (thunk, connect)
    // recent requests <-- iterate over all requests that belong to that user
    <h1>Column one</h1>
  )
}

export default ColumnOneContainer
