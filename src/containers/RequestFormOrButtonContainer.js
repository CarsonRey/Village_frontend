import React from 'react';
import RequestForm from '../components/RequestForm'
import RequestButton from '../components/RequestButton'
import { connect } from 'react-redux'

const RequestFormOrButtonContainer = (props) => {
  let { userClickedButton } = props

    return (
      <div className="form-or-button">
        { userClickedButton ? <RequestForm/> : <RequestButton/>}
      </div>
    );


}

const mapStateToProps = (state) => {
  return { userClickedButton: state.requestInfo.showRequestForm }
}

export default connect(mapStateToProps)(RequestFormOrButtonContainer);
