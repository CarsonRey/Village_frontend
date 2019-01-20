import React from 'react';
import PickUpButton from './PickUpButton'
import CompleteButton from './CompleteButton'
import Items from './Items'
import { connect } from 'react-redux'
import { showOrHideJobDetail } from '../store'

const JobDetail = (props) => {
  const { donation, hideDetail } = props

    return (
      <div className="bg-modal" onClick={() => hideDetail(true)}>
        <div className="JobDetail modal-content">
          <div>From: {donation.giver.name}</div>
          <div>{donation.giver.address}</div>

          <div>To: {donation.receiver.name}</div>
          <div>{donation.receiver.address}</div>

          {/* <Items items={donation.food_items} /> */}

        </div>
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    donation: state.donationInfo.chosenDonation
   }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hideDetail: (isShowing) => dispatch(showOrHideJobDetail(isShowing))
   }
}



export default connect(mapStateToProps, mapDispatchToProps)(JobDetail);
