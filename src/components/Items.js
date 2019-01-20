import React from 'react';


const Items = (props) => {
  const { items } = props

    return (
        <div className="items">
          <div className="item">Item</div>
          <div className="item">Quantity</div>
          <div className="item">Pre-packaged?</div>
          <div className="item">Date Made</div>
          <div className="item">Exp. Date</div>
          {items.map(item => <div className="item-row">

            <div className="item">{item.name}</div>
            <div className="item">{item.quantity}</div>
            <div className="item">{item.packaged ? "yes" : "no"}</div>
            <div className="item">{item.date_made}</div>
            <div className="item">{item.expiration}</div>

          </div>)}
        </div>

    );
}


export default Items;
