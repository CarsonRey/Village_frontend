import React, {Component} from 'react';
import { getColumnTwoHeader, getDeliveries } from '../store'
import DeliveryProgressCard from '../components/DeliveryProgressCard'
import { connect } from 'react-redux'

class ColumnTwoContainer extends Component {

  getColumnTwo = () => {
    const { role, getDeliveries} = this.props
    if (role === "Donator"){
      return getDeliveries(role, parseInt(localStorage.userId))
    }else if (role === "Deliverer"){
      return getDeliveries(role, parseInt(localStorage.userId))
    }else if (role === "Receiver"){
      return getDeliveries(role, parseInt(localStorage.userId))
    }
  }

  // For demo purposes
  componentDidMount() {
    this.getColumnTwo()
    setInterval(() => {this.getColumnTwo()}, 3000)

  }

  // componentDidMount() {
  //   this.getColumnTwo()
  // }

  getDeliveryStatus = (delivery) => {
    if (delivery.pick_up) {
      return "Status: On the way"
    } else if (delivery.pick_up === null) {
      return `Status: Waiting for pick up.`
    }
  }

  render(){

    let donatorDonations = this.props.deliveries.filter(delivery => delivery.delivered === false)

    const {role} = this.props

    return(
        <div  className="col">
          <h3 className="col-header">{getColumnTwoHeader(localStorage.userRoleId)}</h3>
          <div className="card-cont">
            {
              donatorDonations.length === 0 ? <p className="none">No current deliveries!</p> :
              donatorDonations.map(delivery => <DeliveryProgressCard getDeliveryStatus={this.getDeliveryStatus} delivery={delivery} key={delivery.id} role={role} />
              )}
          </div>
        </div>
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
