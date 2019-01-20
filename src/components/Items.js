import React from 'react';


const Items = (props) => {
  const { items } = props
  console.log(items)
    return (
        <div className="items">
          <div>Item</div> <div>Quantity</div> <div>Pre-packaged?</div> <div>Date Made</div> <div>Exp. Date</div>
          {items.map(item => <div className="item-row">

            <div>{item.name}</div>
            <div>{item.quantity}</div>
            <div>{item.packaged}</div>
            <div>{item.date_made}</div>
            <div>{item.expiration}</div>

          </div>)}
        </div>

    );
}


export default Items;
