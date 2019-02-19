import React from "react"
const CheckBox = (props) => {

  return (
    <div className="checkbox blue" onClick={(e) => props.handleCheckbox(e)} >
      <div className="checkmark">
        <div className="checkmark_stem"></div>
        <div className="checkmark_kick"></div>
      </div>
    </div>
  )
}
export default CheckBox
