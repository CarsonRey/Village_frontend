import React from 'react';
import RequestForm from '../components/RequestForm'
import RequestButton from '../components/RequestButton'
import { connect } from 'react-redux'

const RequestFormOrButtonContainer = (props) => {
  let { userClickedButton } = props

    return (
      <React.Fragment>
        { userClickedButton ? <RequestForm/> : <RequestButton/>}
      </React.Fragment>
    );


}

const mapStateToProps = (state) => {
  return { userClickedButton: state.requestInfo.showRequestForm }
}

export default connect(mapStateToProps)(RequestFormOrButtonContainer);
