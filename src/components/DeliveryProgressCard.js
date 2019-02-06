import React, {Component} from 'react';
import PickUpButton from './PickUpButton'
import CompleteButton from './CompleteButton'
// import { connect } from 'react-redux'

class DeliveryProgressCard extends Component {

  renderDay = (dayId) => {
    switch (dayId) {
      case 7: {
        return "Sun"
      }
      case 6: {
        return "Sat"
      }
      case 5: {
        return "Fri"
      }
      case 4: {
        return "Thurs"
      }
      case 3: {
        return "Wed"
      }
      case 2: {
      return "Tues"
      }
      default: {
        return "Mon"
      }
    }
  }

  getRegularOrEditedHours = (sorted) => {
    if(sorted.length > 7){
      let x = sorted.splice(sorted.length -7,sorted.length-1)
      return x.sort((a,b) => a.day_id - b.day_id)
    }else{
      return sorted.sort((a,b) => a.day_id - b.day_id)
    }
  }

  htmlForHours = (hoursArray) => {

    let sorted;
    sorted = hoursArray.sort((a,b) => a.id - b.id)
    sorted = this.getRegularOrEditedHours(sorted)
    let array = sorted

    return <div className="popup">
      <div className="popuptext" id="myPopup">
        {array.map((hourSet, index) => <div key={index}>{this.renderDay(hourSet.day_id)}: {hourSet.time_range}</div>)}
      </div>
    </div>
  }

  togglePopUp = (e) => {
    e.target.classList.toggle("active")
    e.target.previousElementSibling.firstElementChild.classList.toggle("showPop")
  }



render(){
  const {delivery, role, getDeliveryStatus} = this.props
    return (

      <div className="DeliveryCard card">
        {role === "Deliverer" ? <span>{delivery.giver.name}</span> : <span>You</span>}

        <p>From: {delivery.giver.address}</p>

        {this.htmlForHours(delivery.giver.hours)}
        <p onClick={(e) => {this.togglePopUp(e)}}  className="op">Hours of Operation</p>

        <span>{delivery.receiver.name}</span>
        <p>To: {delivery.receiver.address}</p>
        {this.htmlForHours(delivery.receiver.hours)}
        <p onClick={(e) => {this.togglePopUp(e)}} className="op">Hours of Operation</p>

        {delivery.pick_up !== null && <p>Pick up time: {delivery.pick_up}</p>}
        { role === "Deliverer" ?
          (delivery.pick_up === null ? <PickUpButton delivery={delivery}  /> : <CompleteButton delivery={delivery}  />) : (<div><p>{getDeliveryStatus(delivery)}</p>
          <p className="card-d-name">Deliverer: { delivery.deliverer.name}</p></div>) }

      </div>
    )}
    ;
}

// reference delivery.giver.hours and find a way to format?
// Iterate through and outpout html based on the day, (use timedateformatting function)






export default DeliveryProgressCard;
