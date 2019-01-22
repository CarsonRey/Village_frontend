import React from 'react';
import DetailsButton from './DetailsButton'

const DeliveryProgressCard = (props) => {
  const {delivery} = props
// debugger
    return (
      <div className="DeliveryCard card">
      <p className="date">{delivery.created_at.substr(0, 10)}</p>
      <br/>

        <div className="pudo">
          <p>Pick up: {delivery.pick_up}</p>
          <p>Drop off: {delivery.drop_off}</p>
        </div>
        <div >
          <div className="to-from-card">
            <span>{delivery.giver.name}</span>
            <span>{ parseInt(localStorage.userId) === delivery.receiver.id ? "You" : delivery.receiver.name}</span>
          </div>

          <div className="to-from-card">

            <p>{parseInt(localStorage.userId) === delivery.giver.id ? "You" : delivery.giver.address}</p>
            <p>{delivery.receiver.address}</p>
          </div>
        </div>






         <DetailsButton delivery={delivery} />

      </div>
    );
}

export default DeliveryProgressCard;
