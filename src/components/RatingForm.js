import React, { Component } from 'react';
import { createRating, showOrHideRatingForm } from '../store'
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
    let { createRating, hideForm, delivery } = this.props

    let userId = parseInt(localStorage.userId)
    let rating = parseInt(this.state.rating)
    let params = {number: rating, notes: this.state.notes, delivery_id: delivery.id, deliverer_id: delivery.deliverer.id, rater_id: userId}
    let deliveryId = delivery.id

    return (
      <React.Fragment >
      <div className="bg-modal" onClick={() => hideForm(true)}>
        <form className="modal-content" onChange={(e) => this.handleChange(e)}>
          <label htmlFor="rating">How would you rate your interaction with  <span>{delivery.deliverer.name}</span> ? </label> <br/>
          <input type="number" name="rating" value={this.state.rating} /> <br/>
          <label htmlFor="notes">Any comments? </label> <br/>
          <input type="text" name="notes" value={this.state.notes} /> <br/>

          <div onClick={() => {hideForm(true); createRating(params, deliveryId);}}>
             Submit Rating
          </div>
          <div onClick={() => hideForm(true)}>
             cancel
          </div>

        </form>

      </div>
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
    createRating: (delivery, id) => dispatch(createRating(delivery, id)),
    hideForm: (isShowing) => dispatch(showOrHideRatingForm(isShowing))

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(RatingForm);