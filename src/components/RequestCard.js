import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setChosenRequest, setChosenDonation, showOrHideJobDetail } from '../store'

const RequestCard = (props) => {
    const { req, role, job, setRequest, setJob, showDetails } = props

    return (
      <div className="RequestCard">

        {
          role === "Donator" && <p> <span>{req.user.name}</span> needs food for <span>{req.mouths_to_feed}</span> {req.mouths_to_feed > 2 ? "people" : "person"}.  <Link className="link btn-link rate" to="/donation-form" onClick={() => setRequest(req)}>I want to help.</Link> </p>
        }

        {
          role === "Deliverer" && <div><p> <span>{job.giver.name}</span> <br/> is looking for someone to deliver to <br/> <span>{job.receiver.name}</span></p> <div onMouseOver={() => setJob(job)} onClick={() => showDetails(false) } className="btn rate">Details</div> </div>
        }

        {
          role === "Receiver" && <div><p>Your request to feed <span>{req.mouths_to_feed}</span> people.</p>
          <p>Requested: {req.created_at.substr(0, 10)}</p></div>
        }

      </div>

    );
}

const mapDispatchToProps = (dispatch) => {
  return {
     setRequest: (req) => dispatch(setChosenRequest(req)),
     setJob: (job) => dispatch(setChosenDonation(job)),
     showDetails: (isShowing) => dispatch(showOrHideJobDetail(isShowing))
   }
}


export default connect(null, mapDispatchToProps)(RequestCard);
