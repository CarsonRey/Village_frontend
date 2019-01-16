import React from "react"
const FoodItemInput = (props) => {
  // const {foodItems} = props
  return (
    props.foodItems.map((val, idx)=> {
      let foodItemId = `foodItem-${idx}`, quantityId = `quantity-${idx}`, packagedId = `packaged-${idx}`,dateMadeId = `dateMade-${idx}`,expirationId = `expiration-${idx}`
      return (
        <div className="inputRow" key={idx}>
           {/* <label htmlFor={foodItemId}>{`1.${idx + 1}`}</label> */}
          <input
            type="text"
            name={foodItemId}
            data-id={idx}
            id={foodItemId}
            value={props.foodItems[idx].name}
            className="name"
          />
         {/* <label htmlFor={quantityId}>Quantity: </label> */}
          <input
            type="number"
            name={quantityId}
            data-id={idx}
            id={quantityId}
            value={props.foodItems[idx].quantity}
            className="quantity"
          />
          {/* <label htmlFor={ageId}>Pre-packaged? </label> */}
          <input
            type="checkbox"
            name={packagedId}
            data-id={idx}
            id={packagedId}
            value={props.foodItems[idx].packaged}
            className="packaged"
          />
          {/* <label htmlFor={ageId}>Date made: </label> */}
          <input
            type="date"
            name={dateMadeId}
            data-id={idx}
            id={dateMadeId}
            value={props.foodItems[idx].dateMade}
            className="dateMade"
          />
           {/* <label htmlFor={ageId}>Exp. Date: </label> */}
          <input
            type="date"
            name={expirationId}
            data-id={idx}
            id={expirationId}
            value={props.foodItems[idx].expiration}
            className="expiration"
          />
          <span role="img" alt="delete">
            ⓧ
          </span>
        </div>
      )
    })
  )
}
export default FoodItemInput
