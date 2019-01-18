import React, { Component } from 'react';
import { showOrHideForm, filterDays } from '../store'
import { connect } from 'react-redux'

 // createHours,
class HoursForm extends Component {

  state = {
     days:[{Monday: {start: "", end: ""}},
     {Tuesday: {start: "", end: ""}},
     {Wednesday: {start: "", end: ""}},
     {Thursday: {start: "", end: ""}},
     {Friday: {start: "", end: ""}},
     {Saturday: {start: "", end: ""}},
     {Sunday: {start: "", end: ""}}]
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
    return <div> <label for={day}>{day}: </label>
    <input type="time" name={day} data-id={index} id="start" value={this.state.days[index][`${day}`].start || ""}/>
    <input type="time" name={day} data-id={index} id="end" value={this.state.days[index][`${day}`].end || ""}/> <br/></div>
  }

  render() {
console.log("in form", this.props)
    let { createRequest, hideForm, logHours } = this.props
    let hoursInfo = this.state.days
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    return (
      <React.Fragment >

        <form onChange={(e) => this.handleChange(e)}>

          { days.map((day, index) => this.formInputHTML(day, index)) }

          <div onClick={() => logHours(hoursInfo)}>
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
    hideForm: (showing) => dispatch(showOrHideForm(showing)),
    logHours: (daysArray) => dispatch(filterDays(daysArray))
  }
}


export default connect(null, mapDispatchToProps)(HoursForm);
