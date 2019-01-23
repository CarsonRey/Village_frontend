import React from 'react';
import { connect } from 'react-redux'
import { completePickUp } from '../store'


const PickUpButton = (props) => {
  const { delivery, completePickUp } = props

    return (
        <div className="PickUpButton rate" onClick={() => completePickUp(delivery)}>
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
