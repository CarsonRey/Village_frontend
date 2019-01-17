import React, { Component } from 'react';
import { createRequest, showOrHideForm } from '../store'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'


class RatingForm extends Component {

  state = {
    rating: "",
    notes: ""
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
      <React.Fragment >

        <form onChange={(e) => this.handleChange(e)}>
          <label htmlFor="mouths_to_feed">How many people do you need to feed? </label> <br/>
          <input type="number" name="mouths_to_feed" value={this.state.mouths_to_feed}/> <br/>
          <label htmlFor="mouths_to_feed">How many people do you need to feed? </label> <br/>
          <input type="number" name="mouths_to_feed" value={this.state.mouths_to_feed}/> <br/>

          <div onClick={() => createRequest(params)}>
             Rate
          </div>
          <div onClick={() => hideForm(true)}>
             cancel
          </div>

        </form>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    delivery: state.deliveryInfo.selectedDelivery
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setDelivery: (delivery) => dispatch(setSelectedDelivery(delivery))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(RatingForm);
