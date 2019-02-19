import React from "react"
const CheckBox = (props) => {
console.log(props)
  return (
    <div className="checkbox blue" onClick={(e) => props.handleCheckbox(e)} >
      <div className="checkmark" onClick={(e) => props.handleCheckbox(e)}>
        <div className="checkmark_stem" onClick={(e) => props.handleCheckbox(e)}></div>
        <div className="checkmark_kick" onClick={(e) => props.handleCheckbox(e)}></div>
      </div>
    </div>
  )
}
export default CheckBox
