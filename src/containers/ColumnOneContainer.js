import React, { Component } from 'react';
import RequestCard from '../components/RequestCard'
import { connect } from 'react-redux'
import { getRequests, getColumnOneHeader } from '../store'

class ColumnOneContainer extends Component {


  getColumnOne = () => {
    const {role, getRequests} = this.props
    if (role === "Donator"){
      return getRequests()
    }else if (role === "Deliverer"){
      return getRequests()
    }else if (role === "Receiver"){
      return getRequests(parseInt(localStorage.userId))
      // need to figure out userAction/Reducer so we don't have to use localStorage!!
    }
  }

  componentDidMount() {
   this.getColumnOne()
  }


  render(){
    console.log("in column one", this.props)
    return(
      // we want the heading here for each person
      // want to rely on connecting to the user state or localStorage

      // people in need <-- iterate over all requests (thunk, connect)
      // available jobs <-- iterate over all donations that don't have a delivery id (thunk, connect)
      // recent requests <-- iterate over all requests that belong to that user
      <React.Fragment>
      <h3>{getColumnOneHeader(localStorage.userRoleId)}</h3>
      {/* Donator */}
      {this.props.requests.map(request => <RequestCard req={request} key={request.id} />)}
      {/* Donator */}
      {}
      {/* Receiver */}
      {this.props.receiverRequests.map(request => <RequestCard req={request} key={request.id} />)}

    </React.Fragment>
    )
    }
  }

const mapStateToProps = (state) => {
  return {
    requests: state.requestInfo.requests,
    receiverRequests: state.requestInfo.receiverRequests

   }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRequests: (userId) => dispatch(getRequests(userId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ColumnOneContainer)
