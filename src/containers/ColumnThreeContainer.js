import React, {Component} from 'react';
import { getColumnThreeHeader , getDeliveries } from '../store'
// import getDeliveries from '../store'

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
  // For demo purposes
  // componentDidMount() {
  //   this.getColumnThree()
  //   setInterval(() => {this.getColumnThree()}, 1000)
  //
  // }

  componentDidMount() {
    this.getColumnThree()
  }

  whichWords = (role) => {
    switch (role) {
      case '3': {
        return "received any donations yet"
      }
      case '2': {
        return "volunteered for any deliveries yet"
      }
      default: {
        return "made any donations yet"
      }
    }
  }

  render(){
    let { user } = this.props
    // console.log(user)
      let pastDeliveries = this.props.deliveries.filter(delivery => delivery.delivered === true)
    return(
      <div  className="col">
        <h3 className="col-header">{getColumnThreeHeader(localStorage.userRoleId)}</h3>
        <div className={(user && user.role_id === 2 )? "card-cont-del" : "card-cont"}>
        {
          pastDeliveries.length === 0 ? <p className="none">You haven't {this.whichWords(localStorage.userRoleId)}.</p> :
          pastDeliveries.map(delivery => <PastDeliveryCard  delivery={delivery} key={delivery.id} role={this.props.role} />)

        }
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

export default connect(mapStateToProps, mapDispatchToProps)(ColumnThreeContainer)
