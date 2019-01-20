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


        <p>{delivery.receiver.name}</p>
        <p>To: {delivery.receiver.address}</p>


        <p>Pick up: {delivery.pick_up}</p>
        <p>Drop off: {delivery.drop_off}</p>

         <DetailsButton />

      </div>
    );
}

export default DeliveryProgressCard;
