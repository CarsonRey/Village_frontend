import React, { Component } from 'react';
import { showOrHideHoursForm, filterDays } from '../store'
import { connect } from 'react-redux'

class HoursForm extends Component {

constructor (props){
  super(props)
  let {hours} = this.props
  console.log(hours)
  this.state = {
    days:[
    {Monday: {start: hours === [] ? hours[0].time_range.substr(0,5) : "", end:  hours === [] ? hours[0].time_range.substr(9,13) : ""}},
    {Tuesday: {start:  hours === [] ?  hours[1].time_range.substr(0,5) : "", end:  hours === [] ?  hours[1].time_range.substr(9,13) : ""}},
    {Wednesday: {start:  hours === [] ?  hours[2].time_range.substr(0,5) : "", end:  hours === [] ?  hours[2].time_range.substr(9,13) : ""}},
    {Thursday: {start:  hours === [] ?  hours[3].time_range.substr(0,5) : "", end:  hours === [] ?  hours[3].time_range.substr(9,13) : ""}},
    {Friday: {start:  hours === [] ?  hours[4].time_range.substr(0,5) : "", end:  hours === [] ?  hours[4].time_range.substr(9,13) : ""}},
    {Saturday: {start:  hours === [] ?  hours[5].time_range.substr(0,5) : "", end:  hours === [] ?  hours[5].time_range.substr(9,13) : ""}},
    {Sunday: {start:  hours === [] ?  hours[6].time_range.substr(0,5) : "", end:  hours === [] ?  hours[6].time_range.substr(9,13) : ""}}
  ]
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

    console.log(this.props.hours)

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

            { hours !== [] ?

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
