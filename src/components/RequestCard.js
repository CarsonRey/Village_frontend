import React from 'react';
import { Link } from 'react-router-dom'

const RequestCard = (props) => {
    const {req} = props
    const time = new Date(req.created_at)[0,15]
    return (

      <div>
        <p>{req.user.name} needs food for {req.mouths_to_feed} people. Can you help?</p>
        <p>Requested:{time}</p>
      </div>

    );
}
export default RequestCard;
// strftime("%b-%d-%I-%")
