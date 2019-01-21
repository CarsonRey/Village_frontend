import React from 'react';


const Items = (props) => {
  const { items } = props

    return (
        <div className="items">
          <h3>Items</h3>

          <div className="item-details">
            <div className="items-header">
              <div className="item-header">Item</div>
              <div className="quantity-header">#</div>
              <div className="packaged-header">Packaged?</div>
              <div className="made-header">Date Made</div>
              <div className="exp-header">Exp. Date</div>
            </div>
            <div className="under-header">
              {items.map(item => <div className="item-row">

                <div className="item">{item.name}</div>
                <div className="item">{item.quantity}</div>
                <div className="item">{item.packaged ? "yes" : "no"}</div>
                <div className="item">{item.date_made}</div>
                <div className="item">{item.expiration_date}</div>
              </div>)}
            </div>
          </div>
        </div>

    );
}


export default Items;
