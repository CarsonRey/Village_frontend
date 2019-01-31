import React, {Component} from 'react';
import { setSelectedDelivery, showOrHideRatingForm } from '../store'
import { connect } from 'react-redux'

class RatingPrompt extends Component {

  // For demo purposes


render(){
  let { delivery, setDelivery, showForm } = this.props


    return (
      <React.Fragment>
        {localStorage.userRoleId === "1" ?

         (
           <div className="prompt">Please rate your deliverer <span>{delivery.deliverer.name}</span> for your recent donation to <span>{delivery.receiver.name}</span> <div className="rate" onMouseOver={()=> setDelivery(delivery)} onClick={() => showForm(false)}>Rate</div> </div>
         )
        : (
          <div className="prompt">Please rate your deliverer <span>{delivery.deliverer.name}</span> for your recent donation from <span>{delivery.giver.name}</span> <div className="rate" onMouseOver={()=> setDelivery(delivery)} onClick={() => showForm(false)}>Rate</div> </div>
          )

      }
      </React.Fragment>
    )};
}

 // delivery.giver.ratings.filter(rating => rating.delivery_id === delivery.id)
 // # delivery.receiver.ratings.filter(rating => rating.delivery_id === delivery.id)

const mapStateToProps = (state) => {
  return { deliveries: state.deliveryInfo.userDeliveries }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setDelivery: (delivery) => dispatch(setSelectedDelivery(delivery)),
    showForm: (isShowing) => dispatch(showOrHideRatingForm(isShowing))
  }
  // on mouseHover of rate we want to set the selected delivery to that delivery so that our Rating form can have that info to display

  // onClick we will set showRatingForm to true and give the RatingForm modal styling
}

export default connect(mapStateToProps, mapDispatchToProps)(RatingPrompt);
