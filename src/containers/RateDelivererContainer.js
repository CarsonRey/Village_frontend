import React, {Component} from 'react';
import RatingPrompt from '../components/RatingPrompt'
import { connect } from 'react-redux'

class RateDelivererContainer extends Component {

  // componentDidMount() {
  //   setInterval(() => {this.componentDidMount()}, 1000)
  //
  // }

  render (){


  let {deliveries} = this.props
  let unrated;

  if (localStorage.userRoleId === "1"){
      unrated = deliveries.filter(delivery => delivery.delivered === true && delivery.giver_has_rated === false)
  } else {
      unrated = deliveries.filter(delivery => delivery.delivered === true && delivery.receiver_has_rated === false)
  }


    return (
      <div className="rate-container">
        {unrated.map(unratedDelivery => <RatingPrompt key={unratedDelivery.id} delivery={unratedDelivery}/>)}
      </div>
    )  };


}

const mapStateToProps = (state) => {
  return { deliveries: state.deliveryInfo.userDeliveries }
}

export default connect(mapStateToProps)(RateDelivererContainer);
