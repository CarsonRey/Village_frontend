import React, { Component } from 'react';
import { showOrHideForm } from '../store'
import { connect } from 'react-redux'

 // createHours,
class HoursForm extends Component {

  state = {
     days:[{monday: {start: "", end: ""}},
     {tuesday: {start: "", end: ""}},
     {wednesday: {start: "", end: ""}},
     {thursday: {start: "", end: ""}},
     {friday: {start: "", end: ""}},
     {saturday: {start: "", end: ""}},
     {sunday: {start: "", end: ""}}]
  }

  handleChange = (e) => {
    let days = this.state.days
    let index = parseInt(e.target.dataset.id)
    // changing the value of days
        days[index][e.target.name][e.target.id] = e.target.value

      this.setState({ days }, () => console.log(this.state))
  }

  formInputHTML = (day, index) => {
    // debugger
    return <div> <label for={day.toLowerCase()}>{day}: </label>
    <input type="time" name={day.toLowerCase()} data-id={index} id="start" value={this.state.days[index][`${day.toLowerCase()}`].start || ""}/>
    <input type="time" name={day.toLowerCase()} data-id={index} id="end" value={this.state.days[index][`${day.toLowerCase()}`].end || ""}/> <br/></div>
  }

  render() {
    let { createRequest, hideForm } = this.props
// debugger
    let userId = parseInt(localStorage.userId)
    // let params = {mouths_to_feed: mouths, user_id: userId}
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    return (
      <React.Fragment >

        <form onChange={(e) => this.handleChange(e)}>

        { days.map((day, index) => this.formInputHTML(day, index)) }


        {/* <label for="start">Tuesday: </label>
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
        <input type="time" id="end" value={this.state.sunday.end}/> */}

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
