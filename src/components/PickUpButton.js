import React from 'react';
import { connect } from 'react-redux'
import { completePickUp, formatTime } from '../store'
// import { Link } from 'react-router-dom'


const PickUpButton = (props) => {
  const { delivery, completePickUp } = props
    let time = formatTime(new Date())
// debugger
    return (
        <div className="PickUpButton" onClick={() => completePickUp(delivery, time)}>
          Complete Pick Up
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
  return {
    completePickUp: (delivery, time) => dispatch(completePickUp(delivery, time))
  }
}

export default connect(null, mapDispatchToProps)(PickUpButton);
