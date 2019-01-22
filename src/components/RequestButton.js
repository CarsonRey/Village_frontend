import React from 'react';
import { connect } from 'react-redux'
import { showOrHideForm } from '../store'

const RequestButton = (props) => {
  let { showForm } = props

    return (
      <div className="rate req-btn" onClick={() => showForm(false)}>
        Make A Request
      </div>
    );
}

const mapDispatchToProps = (dispatch) => {
  return { showForm: (showing) => dispatch(showOrHideForm(showing)) }
}

export default connect(null, mapDispatchToProps)(RequestButton);
