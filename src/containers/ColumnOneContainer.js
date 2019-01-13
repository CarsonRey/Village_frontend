import React, { Component } from 'react';
import RequestCard from '../components/RequestCard'
import { connect } from 'react-redux'
import { getAllRequests } from '../store'

class ColumnOneContainer extends Component {


  getColumnOne = () => {
    let x = localStorage.userRoleId
    if (x === "1"){
      return this.props.getAllRequests()
    }else if (x === "2") {
      return this.props.getAllRequests()
    }else if (x === "3"){
      return this.props.getAllRequests()
    }
  }

  componentDidMount() {
    this.props.getRequests()
  }

  render(){
    return(
      // we want the heading here for each person
      // want to rely on connecting to the user state or localStorage

      // people in need <-- iterate over all requests (thunk, connect)
      // available jobs <-- iterate over all donations that don't have a delivery id (thunk, connect)
      // recent requests <-- iterate over all requests that belong to that user
      <React.Fragment>
      <h3>Column one</h3>
      {this.props.requests.map(request => <RequestCard req={request} key={request.id} />)}
    </React.Fragment>
    )
    }
  }

const mapStateToProps = (state) => {
  return { requests: state.requestInfo.requests }
}

const mapDispatchToProps = (dispatch) => {
  return { getRequests: () => dispatch(getAllRequests()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(ColumnOneContainer)
