import React, { Component } from 'react';
import DonatorContainer from './DonatorContainer'
import DelivererContainer from './DelivererContainer'
import ReceiverContainer from './ReceiverContainer'
import RatingForm from '../components/RatingForm'
import { connect } from 'react-redux'

class UserContainer extends Component {

  renderUserHomePageBasedOnRole = () => {
    let x = localStorage.userRoleId
    if (x === "1"){
      return <DonatorContainer  />
    }else if (x === "2") {
      return <DelivererContainer />
    }else if (x === "3"){
      return <ReceiverContainer />
    }else {
      return <h1>Local Storage Empty</h1>
    }
  }



  render() {
    let {userClickedRate} = this.props
    console.log("in UserContainer", userClickedRate)
    return (
      <div>
        <div className={userClickedRate ? "blur" : ""}>
          {this.renderUserHomePageBasedOnRole()}
        </div>
          {userClickedRate && <RatingForm/>}
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  // console.log(state.ratingInfo)
  return {
     user: state.userInfo.user,
     userClickedRate: state.ratingInfo.showRatingForm
   }
}

export default connect(mapStateToProps)(UserContainer);
