import React from 'react';
// import { Link } from 'react-router-dom'
import DetailsButton from './DetailsButton'

const DeliveryProgressCard = (props) => {
  const {delivery} = props
// debugger
    return (
      <div className="DeliveryCard card">


        <div className="pudo">
          <p>Pick up: {delivery.pick_up}</p>
          <p>Drop off: {delivery.drop_off}</p>
        </div>
        <div >
          <div className="to-from-card">
            <span>{delivery.giver.name}</span>
            <span>{delivery.receiver.name}</span>
          </div>

          <div className="to-from-card">

            <p>{delivery.giver.address}</p>
            <p>{delivery.receiver.address}</p>
          </div>
        </div>






         <DetailsButton />

      </div>
    );
}

export default DeliveryProgressCard;
