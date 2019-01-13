import React, { Component } from 'react';
import ColumnsContainer from './ColumnsContainer'

class ReceiverContainer extends Component {

  render() {
    return (
      <React.Fragment>
        <h1>This is a receiver</h1>
        <ColumnsContainer container="Receiver" />
      </React.Fragment>
    );
  }

}

export default ReceiverContainer;
