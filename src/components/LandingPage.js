import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'

class LandingPage extends Component {

  render() {
    return (
      <React.Fragment>
      <h1>Village</h1>
      <h4>A meal share app where leftovers are delivered to people in need</h4>
      <Link to="/returning-user">I'm a Returning User</Link> <Link to="/new-user">Sign Me Up!</Link>
      </React.Fragment>
    );
  }
}

export default LandingPage;
