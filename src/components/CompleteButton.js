import React from 'react';
import { connect } from 'react-redux'
import { finishDelivery }  from '../store'


const CompleteButton = (props) => {
  const {delivery, finishDelivery} = props

    return (
        <div className="CompleteButton rate" onClick={() => finishDelivery(delivery)}>
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
