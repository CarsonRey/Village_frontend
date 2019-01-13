import React from 'react';
import { Link } from 'react-router-dom'

const RequestCard = (props) => {
    const {req} = props
    const time = new Date(req.created_at)
// console.log(req.created_at)
    return (
      <div>
        <p>{req.user.name} needs food for {req.mouths_to_feed} people. Can you help?</p>
        <p>Requested: {req.created_at.substr(0,10)}</p>
      </div>

    );
}
export default RequestCard;
// .substr(0,15)
// strftime("%b-%d-%I-%")
