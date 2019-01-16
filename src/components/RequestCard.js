import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import  { setChosenRequest }  from '../store'

const RequestCard = (props) => {
    const {req, role, job} = props
    console.log(props)
    // const time = new Date(req.created_at)
// (req) => setChosenRequest(req)
    return (
      <div>

        {
          role === "Donator" && <p>{req.user.name} needs food for {req.mouths_to_feed} people. <Link to="/donation-form" onClick={() => props.setRequest(req)}>I want to help.</Link> </p>
        }

        {
          role === "Deliverer" && <div><p>{job.giver.name} is looking for someone to deliver to {job.receiver.name}</p> <Link to="/">Details</Link> <button onClick={console.log("job taken")}>Take the job</button> </div>
        }

        {
          role === "Receiver" && <div><p>Your request to feed {req.mouths_to_feed} people.</p>
          <p>Requested: {req.created_at.substr(0,10)}</p></div>
        }

      </div>

    );
}

const mapDispatchToProps = (dispatch) => {
  return { setRequest: (req) => dispatch(setChosenRequest(req)) }
}

export default connect(null, mapDispatchToProps)(RequestCard);
// .substr(0,15)
// strftime("%b-%d-%I-%")
