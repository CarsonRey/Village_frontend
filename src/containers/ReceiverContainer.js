import React, { Component } from 'react';
import RequestFormOrButtonContainer from './RequestFormOrButtonContainer'
import RateDelivererContainer from './RateDelivererContainer'
import ColumnsContainer from './ColumnsContainer'
import HoursForm from '../components/HoursForm'
import { showOrHideHoursForm } from '../store'
import { connect } from 'react-redux'

class ReceiverContainer extends Component {


  returnUserHoursButton = () => {
  let {hours, showForm} = this.props



        if(hours.length === 0){
          return <div onClick={() => showForm(false)}>Add Hours!</div>
        } else{
          return <div onClick={() => showForm(false)}>Edit Hours</div>
        }

  }

  render() {

    // console.log(this.props.)

    let {deliveries, hourFormShowing} = this.props

    let unratedDeliveries = deliveries.filter(delivery => delivery.delivered === true && delivery.receiver_has_rated === false)

    return (
      <React.Fragment>
        {/* <h1>This is a receiver</h1> */}
          {this.returnUserHoursButton()}

          { unratedDeliveries.length > 0 && <RateDelivererContainer/>}

          { hourFormShowing && <HoursForm />}

        <RequestFormOrButtonContainer/>
        <ColumnsContainer container="Receiver" />
      </React.Fragment>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    deliveries: state.deliveryInfo.userDeliveries,
    user: state.userInfo.user,
    hours: state.hourInfo.userHours,
    hourFormShowing: state.hourInfo.showHourForm
   }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showForm: (isShowing) => dispatch(showOrHideHoursForm(isShowing))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReceiverContainer);
