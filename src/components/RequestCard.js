import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setChosenRequest, createDelivery } from '../store'

const RequestCard = (props) => {
    const { req, role, job, setRequest, takeJob } = props

    return (
      <div className="RequestCard">

        {
          role === "Donator" && <p>{req.user.name} needs food for {req.mouths_to_feed} people. <Link to="/donation-form" onClick={() => setRequest(req)}>I want to help.</Link> </p>
        }

        {
          role === "Deliverer" && <div><p>{job.giver.name} is looking for someone to deliver to {job.receiver.name}</p> <Link to="/">Details</Link> <button onClick={() => takeJob({giver_id: job.giver.id, receiver_id: job.receiver.id, deliverer_id: parseInt(localStorage.userId)}, job.id )}>Take the job</button></div>
        }

        {
          role === "Receiver" && <div><p>Your request to feed {req.mouths_to_feed} people.</p>
          <p>Requested: {req.created_at.substr(0, 10)}</p></div>
        }

      </div>

    );
}

const mapDispatchToProps = (dispatch) => {
  return {
     setRequest: (req) => dispatch(setChosenRequest(req)),
     takeJob: (params, donationId) => dispatch(createDelivery(params, donationId))
   }
}

export default connect(null, mapDispatchToProps)(RequestCard);
