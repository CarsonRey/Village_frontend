import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setChosenRequest, setChosenDonation, showOrHideJobDetail, getDonations } from '../store'

class RequestCard extends Component {

    // componentDidMount(){
    // this.props.getDonations()
    // }

    requestStatus = (req) => {
      // debugger
      let status = this.props.donations.filter(donation => donation.request_id === req.id)
      return status.length > 0 ? `${status[0].giver}` : "No donator yet"
    }


render(){
  // debugger
    let { req, role, job, setRequest, setJob, showDetails, donations } = this.props



    return (

      <div className="RequestCard card">

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

    )
  };
}

// to see if there's a donator scheduling we search through all donations
// is there a donation with that request_id
// Donator: NAME has initiated a donation
// Status: Waiting on a Deliverer

const mapStateToProps = (state) => {
  return { donations: state.donationInfo.donations }
}

const mapDispatchToProps = (dispatch) => {
  return {
     setRequest: (req) => dispatch(setChosenRequest(req)),
     setJob: (job) => dispatch(setChosenDonation(job)),
     showDetails: (isShowing) => dispatch(showOrHideJobDetail(isShowing)),
     getDonations: () => dispatch(getDonations())
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(RequestCard);
