import React, { Component } from 'react';
import RateDelivererContainer from './RateDelivererContainer'
import ColumnsContainer from './ColumnsContainer'
import HoursForm from '../components/HoursForm'
import JobDetail from '../components/JobDetail'
import CheckBox from '../components/CheckBox'
import { connect } from 'react-redux'
import { showOrHideHoursForm } from '../store'


class DonatorContainer extends Component {

  returnUserHoursButton = () => {
  let {hours, showForm} = this.props

        if(hours.length === 0){
          return <div className="hours-prompt-btn add" onClick={() => showForm(false)}>Add Hours!</div>
        } else{
          return <div className="hours-prompt-btn edit" onClick={() => showForm(false)}>Edit Hours</div>
        }

  }



  render() {
    let {deliveries, userClickedDetails, hourFormShowing} = this.props



    let unratedDeliveries = deliveries.filter(delivery => delivery.delivered === true && delivery.giver_has_rated === false)


    return (
      <React.Fragment>

        {this.returnUserHoursButton()}

        { hourFormShowing && <HoursForm hours={this.props.hours.sort((a,b) => a.id - b.id)} />}

        { unratedDeliveries.length > 0 && <RateDelivererContainer/>}

        { userClickedDetails && <JobDetail  location="DonatorContainer" isDelivery={true}/>}

        <ColumnsContainer container="Donator" />
      </React.Fragment>
    );
  }

}

const mapStateToProps = (state) => {
  // console.log("test", state)
  return {
    deliveries: state.deliveryInfo.userDeliveries,
    hours: state.hourInfo.userHours,
    userClickedDetails: state.donationInfo.showPastDetail,
    hourFormShowing: state.hourInfo.showHourForm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showForm: (isShowing) => dispatch(showOrHideHoursForm(isShowing))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(DonatorContainer);
