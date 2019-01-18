import React, { Component } from 'react';
import { showOrHideForm } from '../store'
import { connect } from 'react-redux'

 // createHours,
class HoursForm extends Component {

  state = {
    monday: {start: "", end: ""},
    tuesday: {start: "", end: ""},
    wednesday: {start: "", end: ""},
    thursday: {start: "", end: ""},
    friday: {start: "", end: ""},
    saturday: {start: "", end: ""},
    sunday: {start: "", end: ""}
    }

  handleChange = (e) => {
    console.log(this.state)
    // console.log(e.target.name)
    this.setState({
      [e.target.name]: e.target.value
    }, () => console.log(this.state) )
  }

  render() {
    let { createRequest, hideForm } = this.props

    let userId = parseInt(localStorage.userId)
    // let params = {mouths_to_feed: mouths, user_id: userId}

    return (
      <React.Fragment >

        <form onChange={(e) => this.handleChange(e)}>

        <label for="monday">Monday: </label>
        <input type="time" name="monday" value={this.state.monday.start || ""}/>
        <input type="time" name="monday" value={this.state.monday.end || ""}/> <br/>

        <label for="start">Tuesday: </label>
        <input type="time" name="start" value={this.state.tuesday.start}/>
        <input type="time" name="end" value={this.state.tuesday.end}/><br/>

        <label for="start">Wednesday: </label>
        <input type="time" name="start" value={this.state.wednesday.start}/>
        <input type="time" name="end" value={this.state.wednesday.end}/><br/>

        <label for="start">Thursday: </label>
        <input type="time" name="start" value={this.state.thursday.start}/>
        <input type="time" name="end" value={this.state.thursday.end}/><br/>

        <label for="start">Friday: </label>
        <input type="time" name="start" value={this.state.friday.start}/>
        <input type="time" name="end" value={this.state.friday.end}/><br/>

        <label for="start">Saturday: </label>
        <input type="time" id="start" value={this.state.saturday.start}/>
        <input type="time" id="end" value={this.state.saturday.end}/><br/>

        <label for="start">Sunday: </label>
        <input type="time" id="start" value={this.state.sunday.start}/>
        <input type="time" id="end" value={this.state.sunday.end}/>

          <div onClick={() => console.log}>
             Add Hours
          </div>
          <div onClick={() =>  console.log}>
             cancel
          </div>

        </form>
      </React.Fragment>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    hideForm: (showing) => dispatch(showOrHideForm(showing))
  }
}


export default connect(null, mapDispatchToProps)(HoursForm);
