import React from 'react';
import ChoiceCard from './ChoiceCard'
import { connect } from 'react-redux'

const ChoicePage = (props) => {
    let { chosenRole } = props
    const roles = ["Food Donator", "Food Deliverer", "Food Receiver"]
    return (
      <React.Fragment>
      <div className="choice-box">
        <h1>I'm signing up to be a ...</h1>
          {roles.map(role => <ChoiceCard key={role} role={role} />)} <br/>
        { chosenRole && <div className="donate-btn cont-btn" onClick={()=> props.roleChosen()}>Continue...</div>}
        </div>
      </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
      chosenRole: state.userInfo.chosenRole
    }
  }



export default connect(mapStateToProps)(ChoicePage);
