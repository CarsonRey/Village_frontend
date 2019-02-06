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
    {Monday: {start: hours.length > 0 ? hours[0].time_range.substr(0,5) : "", end:  hours.length > 0 ? hours[0].time_range.substr(7,13) : ""}},
    {Tuesday: {start:  hours.length > 0 ?  hours[1].time_range.substr(0,5) : "", end:  hours.length > 0 ?  hours[1].time_range.substr(7,13) : ""}},
    {Wednesday: {start:  hours.length > 0 ?  hours[2].time_range.substr(0,5) : "", end:  hours.length > 0 ?  hours[2].time_range.substr(7,13) : ""}},
    {Thursday: {start:  hours.length > 0 ?  hours[3].time_range.substr(0,5) : "", end:  hours.length > 0 ?  hours[3].time_range.substr(7,13) : ""}},
    {Friday: {start:  hours.length > 0 ?  hours[4].time_range.substr(0,5) : "", end:  hours.length > 0 ?  hours[4].time_range.substr(7,13) : ""}},
    {Saturday: {start:  hours.length > 0 ?  hours[5].time_range.substr(0,5) : "", end:  hours.length > 0 ?  hours[5].time_range.substr(7,13) : ""}},
    {Sunday: {start:  hours.length > 0 ?  hours[6].time_range.substr(0,5) : "", end:  hours.length > 0 ?  hours[6].time_range.substr(7,13) : ""}}
  ]
  }
}

  // renderHoursOrEmpty = (index, startOrEnd) => {
  //   let {hours} = this.props
  //   if (hours) {
  //     if (startOrEnd === "start"){
  //
  //     } else{
  //
  //     }
  //   } else {
  //     return ""
  //   }
  // }

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
