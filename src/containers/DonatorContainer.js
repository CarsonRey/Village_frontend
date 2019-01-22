import React, { Component } from 'react';
import ColumnsContainer from './ColumnsContainer'
import RateDelivererContainer from './RateDelivererContainer'
import { connect } from 'react-redux'
import { showOrHideHoursForm } from '../store'


class DonatorContainer extends Component {

  returnUserHoursButton = () => {
  let {hours, showForm} = this.props



        if(hours.length === 0){
          return <div className="hours-prompt-btn" onClick={() => showForm(false)}>Add Hours!</div>
        } else{
          return <div className="hours-prompt-btn" onClick={() => showForm(false)}>Edit Hours</div>
        }

  }


  render() {
    let {deliveries} = this.props

    let unratedDeliveries = deliveries.filter(delivery => delivery.delivered === true && delivery.giver_has_rated === false)


    return (
      <React.Fragment>
        { unratedDeliveries.length > 0 && <RateDelivererContainer/>}
    
        <ColumnsContainer container="Donator" />
      </React.Fragment>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    deliveries: state.deliveryInfo.userDeliveries,
    hours: state.hourInfo.userHours
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showForm: (isShowing) => dispatch(showOrHideHoursForm(isShowing))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(DonatorContainer);
