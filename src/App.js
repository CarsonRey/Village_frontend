import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUser } from './store'
import ReturningUserContainer from './containers/ReturningUserContainer'
import NewUserContainer from './containers/NewUserContainer'
import LandingOrHome from './components/LandingOrHome'
import DonationFormContainer from './containers/DonationFormContainer'
import NavBar from './components/NavBar'
import './App.css';

class App extends Component {

  componentDidMount(){
    this.props.getUser()
  }

  render() {
    // console.log("in app", this.props)
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/new-user" component={() => <NewUserContainer/>}/>
          <Route path="/returning-user" component={() => <ReturningUserContainer/>}/>
          <Route path="/donation-form" component={ () => <DonationFormContainer />} />
          <Route path="/" component={ () => <LandingOrHome />} />

        </Switch>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return { getUser: () => dispatch(getUser()) }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
