import React from 'react';
import { connect } from 'react-redux'
import { completePickUp, formatTime } from '../store'
// import { Link } from 'react-router-dom'


const PickUpButton = (props) => {
  const { delivery, completePickUp } = props
    // let time = formatTime(new Date())
    // console.log("in pick up", time)
    return (
        <div className="PickUpButton" onClick={() => completePickUp(delivery)}>
          Complete Pick Up
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
  return {
    completePickUp: (delivery) => dispatch(completePickUp(delivery))
  }
}

export default connect(null, mapDispatchToProps)(PickUpButton);
