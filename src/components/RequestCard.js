import React from 'react';
import { Link } from 'react-router-dom'

const RequestCard = (props) => {
    const {req, role, job} = props
    // const time = new Date(req.created_at)

    return (
      <div>

        {
          role === "Donator" && <p>{req.user.name} needs food for {req.mouths_to_feed} people. Can you help?</p>
        }

        {
          role === "Deliverer" && <div><p>{job.giver.name} is looking for someone to deliver to {job.receiver.name}</p> <Link to="/">Details</Link> </div>
        }

        {
          role === "Receiver" && <div><p>Your request to feed {req.mouths_to_feed} people.</p>
          <p>Requested: {req.created_at.substr(0,10)}</p></div>
        }

      </div>

    );
}
export default RequestCard;
// .substr(0,15)
// strftime("%b-%d-%I-%")
