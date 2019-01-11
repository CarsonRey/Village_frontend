import React from 'react';
import { connect } from 'react-redux'
import { chooseRole } from '../store'

const ChoiceCard = (props) => {
  const {chooseRole, role} = props
  // styling has to be on the actual component and reliant on global state
    return (
      <div className="ChoiceCard" onClick={() => chooseRole(role)} >
        <h1>{role}</h1>
      </div>
    );
}

const mapStateToProps = (state, ownProps) => {
  return {
    selected: state.userInfo.chosenRole === ownProps.role
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    chooseRole: (role) => dispatch(chooseRole(role))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChoiceCard);
