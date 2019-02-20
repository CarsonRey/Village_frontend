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
            handleCheckbox={props.handleCheckbox}
            index={idx}
            value={props.foodItems[idx].packaged}
          />

          {/* <input
            type="checkbox"
            name={packagedId}
            data-id={idx}
            data-type="packaged"
            id={packagedId}
            value={props.foodItems[idx].packaged}
            className="packaged"
          /> */}

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
          <span data-id={idx} onClick={(e)=> {
            let checkbox = e.target.parentElement.firstElementChild.nextElementSibling.nextElementSibling
            props.deleteRow(checkbox, idx);
            // props.deleteRow(idx)
          }} role="img" alt="delete" className="delete">
            ⓧ
          </span>
        </div>
      )
    })
  )
}
export default FoodItemInput
