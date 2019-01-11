import React, { Component } from 'react';
import DonatorContainer from './DonatorContainer'
import DelivererContainer from './DelivererContainer'
import ReceiverContainer from './ReceiverContainer'
import { connect } from 'react-redux'

class UserContainer extends Component {

  renderUserHomePageBasedOnRole = () => {
    let x = localStorage.role_id
    if (x === 1){
      return <DonatorContainer />
    }else if (x === 2) {
      return <DelivererContainer />
    }else if (x === 3){
      return <ReceiverContainer />
    }
  }

  render() {
    console.log(this.props)
    return (
      <React.Fragment>
        {this.renderUserHomePageBasedOnRole()}
      </React.Fragment>
    );
  }

}

const mapStateToProps = (state) => {
  return {user: state.userInfo.user }
}

export default connect(mapStateToProps)(UserContainer);
