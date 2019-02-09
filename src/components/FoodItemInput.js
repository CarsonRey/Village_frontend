import React from "react"
const FoodItemInput = (props) => {

  return (
    props.foodItems.map((val, idx)=> {
      let foodItemId = `foodItem-${idx}`, quantityId = `quantity-${idx}`, packagedId = `packaged-${idx}`,dateMadeId = `dateMade-${idx}`,expirationId = `expiration-${idx}`
      return (
        <div className="inputRow" key={idx}>

          <input
            type="text"
            name={foodItemId}
            data-id={idx}
            id={foodItemId}
            value={props.foodItems[idx].name}
            className="name"
          />

          <input
            type="number"
            name={quantityId}
            data-id={idx}
            id={quantityId}
            value={props.foodItems[idx].quantity}
            className="quantity"
          />

          <input
            type="checkbox"
            name={packagedId}
            data-id={idx}
            id={packagedId}
            value={props.foodItems[idx].packaged}
            className="packaged"
          />

          <input
            type="date"
            name={dateMadeId}
            data-id={idx}
            id={dateMadeId}
            value={props.foodItems[idx].dateMade}
            className="dateMade"
          />

          <input
            type="date"
            name={expirationId}
            data-id={idx}
            id={expirationId}
            value={props.foodItems[idx].expiration}
            className="expiration"
          />
          <span data-id={idx} onClick={()=> props.deleteRow(idx)} role="img" alt="delete" className="delete">
            ⓧ
          </span>
        </div>
      )
    })
  )
}
export default FoodItemInput
