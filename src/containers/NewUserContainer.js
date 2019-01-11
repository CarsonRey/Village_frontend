import React, { Component } from 'react';
import ChoicePage from '../components/ChoicePage'
import SignUp from '../components/SignUp'

class NewUserContainer extends Component {

  state = {
    roleChosen: null
  }

  roleChosen = () => {
    this.setState({
      roleChosen: !this.state.roleChosen
    })
  }

  render() {
    return (
      <React.Fragment>
        {this.state.roleChosen ?  <SignUp /> : <ChoicePage roleChosen={this.roleChosen}/> }
      </React.Fragment>
    );
  }

}

export default NewUserContainer;
