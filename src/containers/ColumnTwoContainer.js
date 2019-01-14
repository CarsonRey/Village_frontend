import React, {Component} from 'react';
import { getDeliveries, getColumnTwoHeader } from '../store'
import { connect } from 'react-redux'

class ColumnTwoContainer extends Component {

  getColumnTwo = () => {
    const {user, role, getDeliveries} = this.props
    if (role === "Donator"){
      return getDeliveries(role, parseInt(localStorage.userId))
    }else if (role === "Deliverer"){
      return getDeliveries(role, parseInt(localStorage.userId))
    }else if (role === "Receiver"){
      return getDeliveries(role, parseInt(localStorage.userId))
    }
  }

  componentDidMount() {
    this.getColumnTwo()
  }

  getDeliveryStatus = (delivery) => {
    if (delivery.pick_up) {
      return "Status: On the way"
    } else if (delivery.pick_up === null) {
      return `Status: Waiting for pick up.`
    }
  }

  render(){
    console.log("in column two",this.props)
    // console.log("deliveries", this.props.deliveries)
    // console.log("donatorDonations",donatorDonations)
    // debugger
    let donatorDonations = this.props.deliveries.filter(delivery => delivery.delivered === false)


    return(
        <React.Fragment>
          <h3>{getColumnTwoHeader(localStorage.userRoleId)}</h3>
            {

              donatorDonations.map(delivery => {
                return <div>
                <p>You</p>
                <p>From: Your Location</p>

                <p>{delivery.receiver.name}</p>
                <p>To: Their Location</p>

                {delivery.pick_up !== null && <p>Pick up time: {delivery.pick_up}</p>}

                <p>{this.getDeliveryStatus(delivery)}</p>
                <p>Deliverer: { delivery.deliverer.name}</p>
                </div>

              })

            }

        </React.Fragment>
      // donations in progress <-- iterate over deliveries that belong to that donator, that haven't been delivered or don't have a pick_up time


      //
      // {this.donatorDonations()}

      // deliveries in progress <-- iterate over deliveries that belong to that deliverer that aren't delivered

      // deliveries in progress <-- iterate over deliveries that belong to that receiver


    )
  }

}

const mapStateToProps = (state) => {
  return { deliveries: state.deliveryInfo.userDeliveries, user: state.userInfo.user }
}

const mapDispatchToProps = (dispatch) => {
  return { getDeliveries: (role, userId) => dispatch(getDeliveries(role, userId)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(ColumnTwoContainer)
