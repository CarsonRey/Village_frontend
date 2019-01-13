import React from 'react';
import { Link } from 'react-router-dom'

const RequestCard = (props) => {
    const {req} = props
    return (

      <div>
        <p>{req.user.name} needs food for {req.mouths_to_feed} people. Can you help?</p>
        <p>Requested:{req.created_at.strftime("%b-%d-%I-%M")}</p>
      </div>

    );
}
export default RequestCard;
