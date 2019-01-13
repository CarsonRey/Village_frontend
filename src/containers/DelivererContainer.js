import React, { Component } from 'react';
import ColumnsContainer from './ColumnsContainer'

class DelivererContainer extends Component {

  render() {
    return (
      <React.Fragment>
        <h1>This is a deliverer</h1>
        <ColumnsContainer container="Deliverer" />
      </React.Fragment>
    );
  }

}

export default DelivererContainer;
