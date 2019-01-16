import React from 'react';
import { connect } from 'react-redux'
import { finishDelivery, formatTime }  from '../store'
// import { Link } from 'react-router-dom'


const CompleteButton = (props) => {
  const {delivery, finishDelivery} = props
  let time = formatTime(new Date())

    return (
        <div className="CompleteButton" onClick={() => finishDelivery(delivery, time)}>
          Mark Delivery Complete
        </div>
    );
}


const mapDispatchToProps = (dispatch) => {
  return {
    finishDelivery: (delivery) => dispatch(finishDelivery(delivery))
  }
}


export default connect(null, mapDispatchToProps)(CompleteButton);
