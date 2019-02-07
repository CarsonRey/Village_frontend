import React, {Component} from 'react';
import { connect } from 'react-redux'
import { showOrHideHoursForm } from '../store'

class HoursButton extends Component {

  componentDidMount() {
    console.log("mounting hours")
  }

  componentWillReceiveProps (newProps) {
    if ( newProps.refresh !== this.props.refresh ){
      this.componentDidMount()
    }
  }

  render(){
    let {hours, showForm} = this.props

    return (
      <div className={`hours-prompt-btn ${hours.length ? "edit" : "add"} `} onClick={() => showForm(false)}>{hours.length ? "Edit Hours" : "Add Hours!"}</div>
    );
  }
}

const mapStateToProps = (state) => {
  return { refresh: state.hourInfo.refresh}
}

const mapDispatchToProps = (dispatch) => {
  return {
     showForm: (isShowing) => dispatch(showOrHideHoursForm(isShowing))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(HoursButton);
