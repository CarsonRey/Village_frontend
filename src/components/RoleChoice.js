import React, { Component } from 'react';


class RoleChoice extends Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="name"></label>
        <input type="text" name="name"/>
        <label htmlFor="email"></label>
        <input type="text" name="email"/>
        <label htmlFor="password"></label>
        <input type="password" name="password"/>
      </React.Fragment>
    );
  }
}

export default RoleChoice;
