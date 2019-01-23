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
        <p className="op give">Hours of Operation</p>

        <span>{delivery.receiver.name}</span>
        <p>To: {delivery.receiver.address}</p>
        <p className="op rec">Hours of Operation</p>

        {delivery.pick_up !== null && <p>Pick up time: {delivery.pick_up}</p>}
        { role === "Deliverer" ?
          (delivery.pick_up === null ? <PickUpButton delivery={delivery}  /> : <CompleteButton delivery={delivery}  />) : (<div><p>{props.getDeliveryStatus(delivery)}</p>
          <p className="card-d-name">Deliverer: { delivery.deliverer.name}</p></div>) }

      </div>
    );
}



export default DeliveryProgressCard;
