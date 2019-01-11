import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import ReturningUserContainer from './containers/ReturningUserContainer'
import NewUserContainer from './containers/NewUserContainer'
import LandingOrHome from './components/LandingOrHome'

import './App.css';

class App extends Component {

  changeRoute = (input) => {
    this.props.history.push(`/${input}`)
  }

  render() {
    console.log("in app", this.props)
    return (
      <div className="App">
        <Switch>
          <Route path="/new-user" render={() => <NewUserContainer/>}/>
          <Route path="/returning-user" render={() => <ReturningUserContainer/>}/>
          <Route path="/" render={ () => <LandingOrHome />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    localStorage: state.userInfo.userLocalStorage
    // ,route: state.userInfo.route
   }
}
export default connect(mapStateToProps)(App);
