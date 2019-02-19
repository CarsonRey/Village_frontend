import React from "react"
import CheckBox from './CheckBox'
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
            data-type="name"
            id={foodItemId}
            value={props.foodItems[idx].name}
            className="name"
          />

          <input
            type="number"
            name={quantityId}
            data-id={idx}
            data-type="quantity"
            id={quantityId}
            value={props.foodItems[idx].quantity}
            className="quantity"
          />

          <CheckBox
            type="checkbox"
            handleCheckbox={props.handleCheckbox}
            name={packagedId}
            data-id={idx}
            data-type="packaged"
            id={packagedId}
            onChange={(e) =>props.onChange(e)}
            value={props.foodItems[idx].packaged}
            className="packaged"
          />

          <input
            type="date"
            name={dateMadeId}
            data-id={idx}
            data-type="dateMade"
            id={dateMadeId}
            value={props.foodItems[idx].dateMade}
            className="dateMade"
          />

          <input
            type="date"
            name={expirationId}
            data-id={idx}
            data-type="expiration"
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
