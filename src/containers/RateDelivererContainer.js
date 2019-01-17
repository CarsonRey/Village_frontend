import React from 'react';
import RatingPrompt from '../components/RatingPrompt'
import { connect } from 'react-redux'

const RateDelivererContainer = (props) => {
  let {deliveries} = props
  let unrated;

  if (localStorage.userRoleId === "1"){
      unrated = deliveries.filter(delivery => delivery.delivered === true && delivery.giver_has_rated === false)
  } else {
      unrated = deliveries.filter(delivery => delivery.delivered === true && delivery.receiver_has_rated === false)
  }


    return (
      <React.Fragment>
        {unrated.map(unratedDelivery => <RatingPrompt key={unratedDelivery.id} delivery={unratedDelivery}/>)}
      </React.Fragment>
    );


}

const mapStateToProps = (state) => {
  return { deliveries: state.deliveryInfo.userDeliveries }
}

export default connect(mapStateToProps)(RateDelivererContainer);
