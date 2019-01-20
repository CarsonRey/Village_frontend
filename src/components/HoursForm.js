import React, { Component } from 'react';
import { showOrHideHoursForm, filterDays } from '../store'
import { connect } from 'react-redux'

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

    days[index][e.target.name][e.target.id] = e.target.value

    this.setState({ days }, () => console.log(this.state))
  }

  formInputHTML = (day, index) => {
    // debugger
    return <div className="date-row">
            <label for={day}>{day}: </label>
            <input type="time" name={day} data-id={index} id="start" value={this.state.days[index][`${day}`].start || ""}/>
            <input type="time" name={day} data-id={index} id="end" value={this.state.days[index][`${day}`].end || ""}/><br/>
          </div>
  }

  render() {

    let { hideForm, logHours } = this.props
    let hoursInfo = this.state.days
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    return (
      <React.Fragment >
        <div className="bg-modal" onClick={() => hideForm(true)}>
          <form className="modal-content" onChange={(e) => this.handleChange(e)}>

            { days.map((day, index) => this.formInputHTML(day, index)) }

            <div onClick={() => logHours(hoursInfo)}>
               Add Hours
            </div>

            <div onClick={() => hideForm(true) }>
               cancel
            </div>

          </form>
        </div>
      </React.Fragment>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    hideForm: (isShowing) => dispatch(showOrHideHoursForm(isShowing)),
    logHours: (daysArray) => dispatch(filterDays(daysArray))
  }
}


export default connect(null, mapDispatchToProps)(HoursForm);
