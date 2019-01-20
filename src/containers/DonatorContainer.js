import React, { Component } from 'react';
import ColumnsContainer from './ColumnsContainer'
import RateDelivererContainer from './RateDelivererContainer'
import { connect } from 'react-redux'


class DonatorContainer extends Component {

  render() {
    let {deliveries} = this.props

    let unratedDeliveries = deliveries.filter(delivery => delivery.delivered === true && delivery.giver_has_rated === false)


    return (
      <React.Fragment>
        {/* <h1>This is a donator</h1> */}
        { unratedDeliveries.length > 0 && <RateDelivererContainer/>}
        <ColumnsContainer container="Donator" />
      </React.Fragment>
    );
  }

}

const mapStateToProps = (state) => {
  return { deliveries: state.deliveryInfo.userDeliveries }
}

export default connect(mapStateToProps)(DonatorContainer);
