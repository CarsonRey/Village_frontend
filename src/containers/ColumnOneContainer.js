import React, { Component } from 'react';
import RequestCard from '../components/RequestCard'
import { connect } from 'react-redux'
import { getDonations, getRequests, getColumnOneHeader } from '../store'


class ColumnOneContainer extends Component {


  getColumnOne = () => {
    // user,
    const { role, getRequests, getDonations} = this.props
    if (role === "Donator"){
      return getRequests()
    }else if (role === "Deliverer"){
      return getDonations()
    }else if (role === "Receiver"){
      // debugger
      return getRequests(parseInt(localStorage.userId))

      // need to figure out userAction/Reducer so we don't have to use localStorage!!
    }
  }

  componentDidMount() {
   this.getColumnOne()
  }

  render(){
    // const {user} = this.props
    // console.log("in column one", this.props)
    return(

      <React.Fragment>
        <h3>{getColumnOneHeader(localStorage.userRoleId)}</h3>
        {/* Donator */}
        {this.props.requests.map(request => <RequestCard role={this.props.role} req={request} key={request.id} />)}
        {/* Deliverer */}
        {this.props.availableJobs.map(job => <RequestCard role={this.props.role} job={job} key={job.id} />)}
        {/* Receiver */}
        {this.props.receiverRequests.map(request => <RequestCard role={this.props.role} req={request} key={request.id} />)}
      </React.Fragment>
    )
    }
  }

const mapStateToProps = (state) => {
  return {
    availableJobs: state.donationInfo.donations,
    requests: state.requestInfo.requests,
    receiverRequests: state.requestInfo.receiverRequests,
    user: state.userInfo.user

   }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRequests: (userId) => dispatch(getRequests(userId)),
    getDonations: (userId) => dispatch(getDonations(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ColumnOneContainer)
