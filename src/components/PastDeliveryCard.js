import React from 'react';
// import { Link } from 'react-router-dom'
import DetailsButton from './DetailsButton'

const DeliveryProgressCard = (props) => {
  const {delivery} = props
// debugger
    return (
      <div className="DeliveryCard">

        <span>{delivery.giver.name}</span>
        <p>From: {delivery.giver.address}</p>


        <span>{delivery.receiver.name}</span>
        <p>To: {delivery.receiver.address}</p>


        <p>Pick up: {delivery.pick_up}</p>
        <p>Drop off: {delivery.drop_off}</p>

         <DetailsButton />

      </div>
    );
}

export default DeliveryProgressCard;
