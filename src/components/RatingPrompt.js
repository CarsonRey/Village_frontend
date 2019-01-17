import React from 'react';
import { connect } from 'react-redux'

const RatingPrompt = (props) => {
  let { delivery } = props

    return (
      <React.Fragment>
        {localStorage.userRoleId === "1" ?

         (
           <div>Please rate your deliverer <span>{delivery.deliverer.name}</span> for your recent donation to <span>{delivery.receiver.name}</span> <div>Rate</div> </div>
         )
        : (
          <div>Please rate your deliverer <span>{delivery.deliverer.name}</span> for your recent donation from <span>{delivery.giver.name}</span> <div>Rate</div> </div>
          )

      }
      </React.Fragment>
    );
}

 // delivery.giver.ratings.filter(rating => rating.delivery_id === delivery.id)
 // # delivery.receiver.ratings.filter(rating => rating.delivery_id === delivery.id)

const mapStateToProps = (state) => {
  return { deliveries: state.deliveryInfo.userDeliveries }
}

export default connect(mapStateToProps)(RatingPrompt);
