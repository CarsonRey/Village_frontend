import React from 'react';
import Items from './Items'
import { connect } from 'react-redux'
import { showOrHideJobDetail, createDelivery } from '../store'
import Map from './Map'


const JobDetail = (props) => {
  const { donation, hideDetail, takeJob, user } = props

    return (
      <div className="bg-modal" onClick={() => hideDetail(true)}>
        <div className="JobDetail modal-content" onClick={() => hideDetail(false)}>
          <div>From: {donation.giver.name}</div>
          <div>{donation.giver.address}</div>
          <p>Hours of Operation</p>

          <div>To: {donation.receiver.name}</div>
          <div>{donation.receiver.address}</div>
          <p>Hours of Operation</p>

          <Items items={donation.food_items} />

          <Map
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCpeS8wGPxMgbnpseP8T5GhE14EJ2ZGy6Q&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />




      <button onClick={() => takeJob({giver_id: donation.giver.id, receiver_id: donation.receiver.id, deliverer_id: user.id}, donation.id )}>Take the job</button>
        </div>
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    donation: state.donationInfo.chosenDonation,
    user: state.userInfo.user
   }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hideDetail: (isShowing) => dispatch(showOrHideJobDetail(isShowing)),
    takeJob: (params, donationId) => dispatch(createDelivery(params, donationId))
   }
}



export default connect(mapStateToProps, mapDispatchToProps)(JobDetail);
