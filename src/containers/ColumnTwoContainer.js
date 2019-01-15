import React, {Component} from 'react';
import { getDeliveries, getColumnTwoHeader } from '../store'
import DeliveryProgressCard from '../components/DeliveryProgressCard'
import { connect } from 'react-redux'

class ColumnTwoContainer extends Component {

  getColumnTwo = () => {
    // user,
    const { role, getDeliveries} = this.props
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

    const {role} = this.props

    return(
        <React.Fragment>
          <h3>{getColumnTwoHeader(localStorage.userRoleId)}</h3>
          {donatorDonations.map(delivery => <DeliveryProgressCard getDeliveryStatus={this.getDeliveryStatus} delivery={delivery} key={delivery.id} role={role} />)}
        </React.Fragment>
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
