import React, {Component} from 'react';
import { getColumnThreeHeader, getDeliveries } from '../store'
import PastDeliveryCard from '../components/PastDeliveryCard'
import { connect } from 'react-redux'


class ColumnThreeContainer extends Component {

  getColumnThree = () => {
    //user,
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
    this.getColumnThree()
  }

  render(){
      let pastDeliveries = this.props.deliveries.filter(delivery => delivery.delivered === true)
    return(
      // Your Past Donations <-- iterate over deliveries that belong to that donator that are delivered
      // Your past deliveries <-- iterate over deliveries that belong to that deliverer that are delivered
      // Your past received donations <-- iterate over deliveries that belong to that receiver that are delivered
      <React.Fragment>
        <h3>{getColumnThreeHeader(localStorage.userRoleId)}</h3>
        {pastDeliveries.map(delivery => <PastDeliveryCard  delivery={delivery} key={delivery.id} role={this.props.role} />)}
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

export default connect(mapStateToProps, mapDispatchToProps)(ColumnThreeContainer)
