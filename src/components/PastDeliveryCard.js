import React from 'react';
// import { Link } from 'react-router-dom'
import DetailsButton from './DetailsButton'

const DeliveryProgressCard = (props) => {
  const {delivery} = props
// debugger
    return (
      <div className="DeliveryCard">

        <p>{delivery.giver.name}</p>
        <p>From: {delivery.giver.address}</p>
        <p>Hours of Operation</p>

        <p>{delivery.receiver.name}</p>
        <p>To: {delivery.receiver.address}</p>
        <p>Hours of Operation</p>

         <p>Pick up: {delivery.pick_up}</p>
         <p>Drop off: {delivery.drop_off}</p>

         <DetailsButton />
         {/* <Link to="/">Details</Link> */}

        { /* { role === "Deliverer" ?
          (delivery.pick_up === null ? <button></button> : <button>Mark Complete</button>) : (<div><p>{props.getDeliveryStatus(delivery)}</p>
          <p>Deliverer: { delivery.deliverer.name}</p></div>)} */ }

      </div>
    );
}

export default DeliveryProgressCard;
