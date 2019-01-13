import React, { Component } from 'react';
import ColumnsContainer from './ColumnsContainer'

class DonatorContainer extends Component {

  render() {
    return (
      <React.Fragment>
        <h1>This is a donator</h1>
        <ColumnsContainer container="Donator" />
      </React.Fragment>
    );
  }

}

export default DonatorContainer;
