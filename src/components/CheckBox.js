import React from "react"
const CheckBox = (props) => {

  return (
    <div className="checkbox checked blue" onClick={() => console.log("hi")} >
      <div className="checkmark">
        <div className="checkmark_stem"></div>
        <div className="checkmark_kick"></div>
      </div>
    </div>
  )
}
export default CheckBox
