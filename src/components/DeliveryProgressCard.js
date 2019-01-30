import React from 'react';
import PickUpButton from './PickUpButton'
import CompleteButton from './CompleteButton'
// import { connect } from 'react-redux'

const DeliveryProgressCard = (props) => {
  const {delivery, role} = props

    return (

      <div className="DeliveryCard card">
        {role === "Deliverer" ? <span>{delivery.giver.name}</span> : <span>You</span>}

        <p>From: {delivery.giver.address}</p>
        <p onMouseOver={() => {console.log("hi")}} className="op give">Hours of Operation</p>

        <span>{delivery.receiver.name}</span>
        <p>To: {delivery.receiver.address}</p>
        <p onMouseOver={() => console.log("hi")} className="op rec">Hours of Operation</p>

        {delivery.pick_up !== null && <p>Pick up time: {delivery.pick_up}</p>}
        { role === "Deliverer" ?
          (delivery.pick_up === null ? <PickUpButton delivery={delivery}  /> : <CompleteButton delivery={delivery}  />) : (<div><p>{props.getDeliveryStatus(delivery)}</p>
          <p className="card-d-name">Deliverer: { delivery.deliverer.name}</p></div>) }

      </div>
    );
}

// Initial fetch to get all user hours, store in global state
// reference delivery.giver.hours and find a way to format?
// Iterate through and outpout html based on the day, (use timedateformatting function)


{/* <div className="popuptext" id="myPopup">Add A New <br/> Activity!</div>
          <div onClick={() => this.props.newActivityForm()}  className="plus" onMouseEnter={(e)=> e.target.previousElementSibling.classList.toggle("showPop")} onMouseLeave={(e)=> e.target.previousElementSibling.classList.toggle("showPop")}>
          </div> */}



export default DeliveryProgressCard;
