import React, { Component } from 'react';
import RequestFormOrButtonContainer from './RequestFormOrButtonContainer'
import RateDelivererContainer from './RateDelivererContainer'
import ColumnsContainer from './ColumnsContainer'
import HoursForm from '../components/HoursForm'
import { connect } from 'react-redux'

class ReceiverContainer extends Component {

  render() {
    let {deliveries} = this.props

    let unratedDeliveries = deliveries.filter(delivery => delivery.delivered === true && delivery.giver_has_rated === false)

    return (
      <React.Fragment>
        <h1>This is a receiver</h1>
            { unratedDeliveries.length > 0 && <RateDelivererContainer/>}
        <HoursForm />
        <RequestFormOrButtonContainer/>
        <ColumnsContainer container="Receiver" />
      </React.Fragment>
    );
  }

}

const mapStateToProps = (state) => {
  return { deliveries: state.deliveryInfo.userDeliveries }
}

export default connect(mapStateToProps)(ReceiverContainer);
