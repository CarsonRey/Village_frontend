import React from 'react';
import { setSelectedDelivery } from '../store'
import { connect } from 'react-redux'

const RatingPrompt = (props) => {
  let { delivery, setDelivery } = props

    return (
      <React.Fragment>
        {localStorage.userRoleId === "1" ?

         (
           <div>Please rate your deliverer <span>{delivery.deliverer.name}</span> for your recent donation to <span>{delivery.receiver.name}</span> <div onMouseOver={()=> setDelivery(delivery)} onClick={() => console.log("clicked")}>Rate</div> </div>
         )
        : (
          <div>Please rate your deliverer <span>{delivery.deliverer.name}</span> for your recent donation from <span>{delivery.giver.name}</span> <div onMouseOver={()=> setDelivery(delivery)} onClick={() => console.log("clicked")}>Rate</div> </div>
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

const mapDispatchToProps = (dispatch) => {

  return {
    setDelivery: (delivery) => dispatch(setSelectedDelivery(delivery))
  }
  // on mouseHover of rate we want to set the selected delivery to that delivery so that our Rating form can have that info to display

  // onClick we will set showRatingForm to true and give the RatingForm modal styling
}

export default connect(mapStateToProps, mapDispatchToProps)(RatingPrompt);
