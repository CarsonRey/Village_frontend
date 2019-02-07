import React, { Component } from 'react';
import RequestFormOrButtonContainer from './RequestFormOrButtonContainer'
import RateDelivererContainer from './RateDelivererContainer'
import ColumnsContainer from './ColumnsContainer'
import HoursForm from '../components/HoursForm'
import JobDetail from '../components/JobDetail'
import HoursButton from '../components/HoursButton'
import { connect } from 'react-redux'
import { showOrHideHoursForm } from '../store'

class ReceiverContainer extends Component {

  componentDidMount() {
    console.log("mounting receiver")
  }

  componentWillReceiveProps (newProps) {
    if ( newProps.refresh !== this.props.refresh ){
      this.componentDidMount()
    }
  }

  returnUserHoursButton = () => {
  let {hours, showForm} = this.props

        if(hours && hours.length === 0){
          return <div className="hours-prompt-btn add" onClick={() => showForm(false)}>Add Hours!</div>
        } else{
          return <div className="hours-prompt-btn edit" onClick={() => showForm(false)}>Edit Hours</div>
        }

  }

  render() {

    let {deliveries, hourFormShowing, userClickedDetails, hours} = this.props

    let unratedDeliveries = deliveries.filter(delivery => delivery.delivered === true && delivery.receiver_has_rated === false)

    return (
      <React.Fragment>
        {/* <h1>This is a receiver</h1> */}
        <HoursButton hours={hours}/>
        <div className={unratedDeliveries.length > 0 ? "rate-and-req" : "just-req"}>
          { unratedDeliveries.length > 0 && <RateDelivererContainer/>}
          <RequestFormOrButtonContainer/>
        </div>


          { hourFormShowing && <HoursForm hours={this.props.hours.sort((a,b) => a.id - b.id)} />}
          { userClickedDetails && <JobDetail  location="ReceiverContainer" isDelivery={true}/>}


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
    hourFormShowing: state.hourInfo.showHourForm,
    userClickedDetails: state.donationInfo.showPastDetail,
    pastDetail: state.donationInfo.chosenDonation,
    refresh: state.hourInfo.refresh
   }
}


export default connect(mapStateToProps)(ReceiverContainer);
