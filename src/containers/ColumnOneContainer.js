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
      return getRequests(parseInt(localStorage.userId)) && getDonations()

      // need to figure out userAction/Reducer so we don't have to use localStorage!!
    }
  }

  // componentDidMount() {
  //   setInterval(() => {this.getColumnOne()}, 3000)
  //
  // }

  componentDidMount(){
    this.getColumnOne()
  }

  render(){
    return(

      <div  className="col">
        <h3 className="col-header">{getColumnOneHeader(localStorage.userRoleId)}</h3>
        <div className="card-cont">
          {/* Donator */}
          {this.props.requests.map(request => <RequestCard role={this.props.role} req={request} key={request.id} />)}
          {/* Deliverer */}
          {this.props.availableJobs.map(job => <RequestCard role={this.props.role} job={job} key={job.id} />)}
          {/* Receiver */}
          {this.props.receiverRequests.map(request => <RequestCard donations={this.props.availableJobs} role={this.props.role} req={request} key={request.id} />)}
        </div>
      </div>
    )
    }
  }

const mapStateToProps = (state) => {
  return {
    availableJobs: state.donationInfo.donations,
    requests: state.requestInfo.requests,
    receiverRequests: state.requestInfo.receiverRequests,
    user: state.userInfo.user,
    donations: state.donationInfo.donations
   }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRequests: (userId) => dispatch(getRequests(userId)),
    getDonations: (userId) => dispatch(getDonations(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ColumnOneContainer)
