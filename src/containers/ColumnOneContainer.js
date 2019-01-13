import React, { Component } from 'react';
import RequestCard from '../components/RequestCard'
import { connect } from 'react-redux'
import { getAllRequests } from '../store'

class ColumnOneContainer extends Component {


  getColumnOne = (x) => {
    if (x === "1"){
      return this.props.getRequests()
    }else if (x === "2") {
      return this.props.getRequests()
    }else if (x === "3"){
      return this.props.getRequests(parseInt(localStorage.userId))
      // need to figure out userAction/Reducer!!
    }
  }

  componentDidMount() {
   this.getColumnOne(localStorage.userRoleId)
   //   (!this.props.user) &&
  }

  getColumnHeader = (x) => {
    if (x === "1"){
      return "People In Need"
    }else if (x === "2") {
      return "Available Jobs"
    }else if (x === "3"){
      return "Recent Requests"
      // need to figure out userAction/Reducer!!
    }
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
      <h3>{this.getColumnHeader(localStorage.userRoleId)}</h3>
      {this.props.receiverRequests.map(request => <RequestCard req={request} key={request.id} />)}
      {this.props.requests.map(request => <RequestCard req={request} key={request.id} />)}
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
    getRequests: (userId) => dispatch(getAllRequests(userId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ColumnOneContainer)
