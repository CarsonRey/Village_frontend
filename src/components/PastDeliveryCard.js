import React from 'react';
import { Link } from 'react-router-dom'


const DeliveryProgressCard = (props) => {
  const {delivery, role} = props

    return (
      <div className="DeliveryProgressCard">

        <p>{delivery.giver.name}</p>
        <p>From: First Address</p>

        <p>{delivery.receiver.name}</p>
        <p>To: Second Address</p>

         <p>Pick up: {delivery.pick_up}</p>
         <p>Drop off: {delivery.drop_off}</p>

         <Link to="/">Details</Link>

        {/* { role === "Deliverer" ?
          (delivery.pick_up === null ? <button>Details</button> : <button>Mark Complete</button>) : (<div><p>{props.getDeliveryStatus(delivery)}</p>
          <p>Deliverer: { delivery.deliverer.name}</p></div>)} */}

      </div>
    );
}

export default DeliveryProgressCard;
