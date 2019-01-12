import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import ReturningUserContainer from './containers/ReturningUserContainer'
import NewUserContainer from './containers/NewUserContainer'
import LandingOrHome from './components/LandingOrHome'
import NavBar from './components/NavBar'
import './App.css';

class App extends Component {

  // changeRoute = (input) => {
  //   this.props.history.push(`/${input}`)
  // }

  render() {
    console.log("in app", this.props)
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/new-user" component={() => <NewUserContainer/>}/>
          <Route path="/returning-user" component={() => <ReturningUserContainer/>}/>
          <Route path="/" component={ () => <LandingOrHome />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userInfo.user
    // ,route: state.userInfo.route
   }
}

export default withRouter(connect(mapStateToProps)(App));
