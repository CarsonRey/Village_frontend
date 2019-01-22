import React, { Component } from 'react';
import { createRating, showOrHideRatingForm } from '../store'
import { connect } from 'react-redux'
import StarRatingComponent from 'react-star-rating-component'
import help from '../help.png'
import noHelp from '../help2.png'
// import { Link } from 'react-router-dom'


class RatingForm extends Component {

  state = {
    rating: 1,
    notes: "",
    one:true,
    two: false,
    three: false,
    four: false,
    five: false
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleRateChange  = (e) => {
    switch (e.target.name){
      default: {
         return this.setState({rating: 1, one: true, two: false, three: false, four: false, five: false })
      }
      case 'two': {
         return this.setState({rating: 2, one: true, two: true, three: false, four: false, five: false })
      }
      case 'three': {
         return this.setState({rating: 3, one: true, two: true, three: true, four: false, five: false })
      }
      case 'four': {
         return this.setState({rating: 4, one: true, two: true, three: true, four: true, five: false })
      }
      case 'five': {
         return this.setState({rating: 5, one: true, two: true, three: true, four: true, five: true })
      }
    }
  }

  returnRating = () => {
    let {one, two, three, four, five} = this.state
    return <div className="rating-row">
    <img style={{height: '100px'}} onClick={this.handleRateChange} name="one" src={one ? help : noHelp} alt="help"/>
    <img style={{height: '100px'}} onClick={this.handleRateChange} name="two" src={two ? help : noHelp} alt="help"/>
    <img style={{height: '100px'}} onClick={this.handleRateChange} name="three" src={three ? help : noHelp} alt="help"/>
    <img style={{height: '100px'}} onClick={this.handleRateChange} name="four" src={four ? help : noHelp} alt="help"/>
    <img style={{height: '100px'}} onClick={this.handleRateChange} name="five" src={five ? help : noHelp} alt="help"/>
  </div>
  }

  render() {
    let { createRating, hideForm, delivery } = this.props

    let userId = parseInt(localStorage.userId)
    let rating = parseInt(this.state.rating)
    let params = {number: rating, notes: this.state.notes, delivery_id: delivery.id, deliverer_id: delivery.deliverer.id, rater_id: userId}
    let deliveryId = delivery.id

    return (
      <React.Fragment >
      <div className="bg-modal ">
        <form className="modal-content rating-form rate-card"  onChange={(e) => this.handleChange(e)}>
          <h3 htmlFor="rating-form-question">How many helping hands would you give your deliverer <span className="deliverer">{delivery.deliverer.name}</span> ? </h3> <br/>

          {this.returnRating()}

          <label htmlFor="notes">Any comments? </label> <br/>
          <textarea className="input" type="text" name="notes" onChange={(e) => this.handleChange(e)} value={this.state.notes} /> <br/>

          <div className="hours-btn" className="take-job rating-form-btn" onClick={() => {hideForm(true); createRating(params, deliveryId);}}>
             Submit Rating
          </div>
          <div className="hours-btn" onClick={() => hideForm(true)}>
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

//
export default connect(mapStateToProps, mapDispatchToProps)(RatingForm);
