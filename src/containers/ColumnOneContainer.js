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

  // For demo purposes
  // componentDidMount() {
  //   this.getColumnOne()
  //   setInterval(() => {this.getColumnOne()}, 1000)
  //
  // }

  componentDidMount(){
    this.getColumnOne()
  }

  render(){
    let { requests, role, availableJobs, receiverRequests } = this.props
    // console.log(role)
    return(

      <div  className="col">
        <h3 className="col-header">{getColumnOneHeader(localStorage.userRoleId)}</h3>
        <div className="card-cont">
          {/* Donator */}
          {
            role === "Donator" &&
            (requests.length === 0 ? <p className="none">There are no requests at this time.</p> :
            requests.map(request => <RequestCard role={role} req={request} key={request.id} />))

          }
          {/* Deliverer */}
          { role === "Deliverer" &&
            (availableJobs.length === 0 ? <p className="none">There are no available jobs at this time.</p> :
            availableJobs.map(job => <RequestCard role={role} job={job} key={job.id} />))

          }
          {/* Receiver */}
          { role === "Receiver" &&
            (receiverRequests.length === 0 ? (<p className="none">You haven't made any requests recently.</p>) :
            receiverRequests.map(request => <RequestCard donations={availableJobs} role={role} req={request} key={request.id} />))

          }
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
