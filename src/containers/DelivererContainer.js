import React from 'react';
import ColumnsContainer from './ColumnsContainer'
import JobDetail from '../components/JobDetail'
import { connect } from 'react-redux'

const DelivererContainer = (props) => {
  let {userClickedJobDetails, userClickedPastDetails} = props

    return (
      <React.Fragment>
        {/* <h1>This is a deliverer</h1> */}
        {userClickedJobDetails && <JobDetail location="DelivererJob"/>}
        { userClickedPastDetails && <JobDetail  location="DelivererPast" isDelivery={true}/>}
        <ColumnsContainer container="Deliverer" />
      </React.Fragment>
    );

}

const mapStateToProps = (state) => {
  return {
    userClickedJobDetails: state.donationInfo.showJobDetail,
    userClickedPastDetails: state.donationInfo.showPastDetail
   }
}

export default connect(mapStateToProps)(DelivererContainer);
