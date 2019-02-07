import React, { Component } from 'react';
import { showOrHideHoursForm, filterDays } from '../store'
import { connect } from 'react-redux'

class HoursForm extends Component {

constructor (props){
  super(props)
  let {hours} = this.props
  console.log("hours are", hours)
  // debugger
  this.state = {
    days:[
    {Monday: {start:this.renderHoursOrEmpty(1, "start"), end: this.renderHoursOrEmpty(1, "end")}},
    {Tuesday: {start:  this.renderHoursOrEmpty(2, "start"), end:  this.renderHoursOrEmpty(2, "end")}},
    {Wednesday: {start:  this.renderHoursOrEmpty(3, "start"), end:  this.renderHoursOrEmpty(3, "end")}},
    {Thursday: {start:  this.renderHoursOrEmpty(4, "start"), end:  this.renderHoursOrEmpty(4, "end")}},
    {Friday: {start:  this.renderHoursOrEmpty(5, "start"), end:  this.renderHoursOrEmpty(5, "end")}},
    {Saturday: {start:  this.renderHoursOrEmpty(6, "start"), end:  this.renderHoursOrEmpty(6, "end")}},
    {Sunday: {start:  this.renderHoursOrEmpty(7, "start"), end:  this.renderHoursOrEmpty(7, "end")}}
  ]
  }
}

  renderHoursOrEmpty = (day, startOrEnd) => {
    let {hours} = this.props
    if (hours.length > 0) {
      let hour = hours.filter(hour => day === hour.day_id )[0]
      if (startOrEnd === "start"){
       return hour.time_range.substr(0,5)
      } else{
        return hour.time_range.substr(7,13)
      }
    } else {
      return ""
    }
  }

  handleChange = (e) => {
    let days = this.state.days
    let index = parseInt(e.target.dataset.id)

    days[index][e.target.name][e.target.id] = e.target.value

    this.setState({ days }, () => console.log(this.state))
  }

  formInputHTML = (day, index) => {
    // debugger
    return <div className="date-row" key={index}>
            <label className="day" htmlFor={day}>{day}: </label>
            <div className="input-cont">
              <input type="text" className="input-time" name={day} data-id={index} id="start" value={this.state.days[index][`${day}`].start || ""}  onChange={(e) => this.handleChange(e)}/>
              <input type="text" className="input-time" name={day} data-id={index} id="end" value={this.state.days[index][`${day}`].end || ""}  onChange={(e) => this.handleChange(e)}/><br/>
            </div>
          </div>
  }

  render() {

    // console.log(this.props.hours)

    let { hideForm, logHours, hours } = this.props
    let hoursInfo = this.state.days
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    return (
      <React.Fragment >
        <div className="bg-modal" >
          <form className="modal-content  hours">
            <h1>Hours of Operation</h1>
            <div className="date-row-cont">
            { days.map((day, index) => this.formInputHTML(day, index)) }
            </div>

            { hours.length > 0 ?

              <div className="take-job hours-btn" onClick={() => {logHours(hoursInfo); hideForm(true);}}>
                 Edit Hours
              </div> :

              <div className="take-job hours-btn" onClick={() => {logHours(hoursInfo); hideForm(true);}}>
                 Add Hours
              </div>
             }



            <div className="hours-btn" onClick={() => hideForm(true) }>
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
