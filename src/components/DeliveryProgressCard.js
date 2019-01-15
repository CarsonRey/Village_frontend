import React from 'react';
// import { connect } from 'react-redux'

const DeliveryProgressCard = (props) => {
  const {delivery, role} = props

    return (
      <div className="DeliveryProgressCard">

        <p>You</p>
        <p>From: Your Location</p>

        <p>{delivery.receiver.name}</p>
        <p>To: Their Location</p>

        {delivery.pick_up !== null && <p>Pick up time: {delivery.pick_up}</p>}
        { role === "Deliverer" ?
          (delivery.pick_up === null ? <button>Complete Pick Up</button> : <button>Mark Complete</button>) : (<div><p>{props.getDeliveryStatus(delivery)}</p>
          <p>Deliverer: { delivery.deliverer.name}</p></div>)}

      </div>
    );
}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     selected: state.userInfo.chosenRole === ownProps.role
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     chooseRole: (role) => dispatch(chooseRole(role))
//   }
// }

//connect(mapStateToProps, mapDispatchToProps)(

export default DeliveryProgressCard;
