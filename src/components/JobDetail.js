import React from 'react';
import Items from './Items'
import { connect } from 'react-redux'
import { showOrHideJobDetail, createDelivery, showOrHidePastDetail } from '../store'
import Map from './Map'


const JobDetail = (props) => {
  const { donation, hideDetail, takeJob, user, location, isDelivery, hide } = props

    return (
      <div className="bg-modal" onClick={() => {hideDetail(true); hide(true);}}>
        <div className="JobDetail modal-content" >
          <h2 className="details">Details</h2>

        <div className="to-from-text"><h4>From</h4><h4>To</h4></div>
        <div className="to-from">

          <div className="detail-place">
            <div>{donation.giver.name}</div>
            <div>{donation.giver.address}</div>
            <div>Hours of Operation</div>
          </div>

          <div className="detail-place">
            <div>{donation.receiver.name}</div>
            <div>{donation.receiver.address}</div>
            <div>Hours of Operation</div>
          </div>

        </div>

        <Items items={isDelivery ? donation.donation.food_items : donation.food_items} />


{location === "DelivererContainer" &&
<React.Fragment>
          <Map
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCpeS8wGPxMgbnpseP8T5GhE14EJ2ZGy6Q&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            origin={donation.giver.address}
            destination={donation.receiver.address}
          />

          <div className="take-job" onClick={() => takeJob({giver_id: donation.giver.id, receiver_id: donation.receiver.id, deliverer_id: user.id}, donation.id )}>Take the job</div>
</React.Fragment>
        }

          {location === "Receiver" && <h1>hi</h1>}





        </div>
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    donation: state.donationInfo.chosenDonation,
    user: state.userInfo.user,

   }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hideDetail: (isShowing) => dispatch(showOrHideJobDetail(isShowing)),
    takeJob: (params, donationId) => dispatch(createDelivery(params, donationId)),
    hide: (isShowing) => dispatch(showOrHidePastDetail(isShowing))
   }
}



export default connect(mapStateToProps, mapDispatchToProps)(JobDetail);
