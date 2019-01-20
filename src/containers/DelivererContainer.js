import React from 'react';
import ColumnsContainer from './ColumnsContainer'
import { showOrHideJobDetail } from '../store'
import JobDetail from '../components/JobDetail'
import { connect } from 'react-redux'

const DelivererContainer = (props) => {
  let {userClickedDetails} = props

    return (
      <React.Fragment>
        <h1>This is a deliverer</h1>
        {userClickedDetails && <JobDetail/>}
        <ColumnsContainer container="Deliverer" />
      </React.Fragment>
    );

}

const mapStateToProps = (state) => {
  return {
    userClickedDetails: state.donationInfo.showJobDetail
   }
}

export default connect(mapStateToProps)(DelivererContainer);
