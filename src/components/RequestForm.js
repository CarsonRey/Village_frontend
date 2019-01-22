import React, { Component } from 'react';
import { createRequest, showOrHideForm } from '../store'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'


class RequestForm extends Component {

  state = {
    mouths_to_feed: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    let { createRequest, hideForm } = this.props

    let userId = parseInt(localStorage.userId)
    let mouths = parseInt(this.state.mouths_to_feed)
    let params = {mouths_to_feed: mouths, user_id: userId}

    return (
      <div className="req-form">

        <form onChange={(e) => this.handleChange(e)}>
          <label htmlFor="mouths_to_feed">How many people do you need to feed? </label> <br/>
          <input className="input-s" type="number" name="mouths_to_feed" value={this.state.mouths_to_feed}/> <br/>

          <div className="rate req-btn-sub" onClick={() => {hideForm(true); createRequest(params);}}>
             Submit Request
          </div>
          <div onClick={() => hideForm(true)}>
             cancel
          </div>

        </form>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    createRequest: (user) => dispatch(createRequest(user)),
    hideForm: (showing) => dispatch(showOrHideForm(showing))
  }
}


export default connect(null, mapDispatchToProps)(RequestForm);
