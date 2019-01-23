import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setChosenRequest, setChosenDonation, showOrHideJobDetail, getDonations } from '../store'

class RequestCard extends Component {


    requestStatus = (req) => {

    // to see if there's a donator scheduling we search through all donations
    // is there a donation with that request_id
    // Donator: NAME has initiated a donation
    // Status: Waiting on a Deliverer
      let {donations} = this.props

      if (donations){
        let donation = donations.filter(donation => donation.request_id === req.id)
        return donation.length > 0

        ?

        (<React.Fragment>
        <p>Donator: {donation[0].giver.name} </p>
        <p>Status: Waiting on a deliverer</p>
        </React.Fragment>)

        :

         (<p>Status: No donator yet</p>)
      }

    }



render(){

    let { req, role, job, setRequest, setJob, showDetails, donations } = this.props


    return (

      <div className="RequestCard card">
      <p className="date">{ role === "Deliverer" ? (job && job.created_at.substr(0, 10)) : (req && req.created_at.substr(0, 10))}</p> <br/>

        {
          role === "Donator" && <p> <span>{req.user.name}</span> needs food for <span>{ req && req.mouths_to_feed}</span> { req && req.mouths_to_feed > 2 ? "people" : "person"}.  <Link className="link btn-link rate" to="/donation-form" onClick={() => setRequest(req)}>I want to help.</Link> </p>
        }

        {
          role === "Deliverer" && <div><p> <span>{ job && job.giver.name}</span> <br/> is looking for someone to deliver to <br/> <span>{ job && job.receiver.name}</span></p> <div onMouseOver={() => setJob(job)} onClick={() => showDetails(false) } className="btn rate">Details</div> </div>
        }

        {
          role === "Receiver" && <div><p>Your request to feed <span>{req && req.mouths_to_feed}</span> { req && req.mouths_to_feed >= 2 ? "people" : "person"}.</p>
          { this.requestStatus(req) }

          </div>
        }

      </div>

    )
  };
}



const mapStateToProps = (state) => {
  return {
    user: state.userInfo.user
   }
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
