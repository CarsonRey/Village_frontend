import React from "react"
const CheckBox = (props) => {
  let {handleCheckbox, value, index} = props

  console.log(value)
  console.log(index)

  return (
    <div className={`checkbox ${value && 'checked' } blue`} onClick={() => handleCheckbox(value, index)} >
      <div className={`checkmark ${value && 'checkmark-checked'}`}>
        <div className="checkmark_stem"></div>
        <div className="checkmark_kick"></div>
      </div>
    </div>
  )
}
export default CheckBox
