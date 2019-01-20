import React from 'react';
import PickUpButton from './PickUpButton'
import CompleteButton from './CompleteButton'
import Items from './Items'
import { connect } from 'react-redux'
import { showOrHideJobDetail, createDelivery } from '../store'

const JobDetail = (props) => {
  const { donation, hideDetail, takeJob, user } = props

    return (
      <div className="bg-modal" onClick={() => hideDetail(true)}>
        <div className="JobDetail modal-content">
          <div>From: {donation.giver.name}</div>
          <div>{donation.giver.address}</div>

          <div>To: {donation.receiver.name}</div>
          <div>{donation.receiver.address}</div>

          <Items items={donation.food_items} />

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
