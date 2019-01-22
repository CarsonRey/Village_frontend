import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUser, getDonations } from './store'
import ReturningUserContainer from './containers/ReturningUserContainer'
import NewUserContainer from './containers/NewUserContainer'
import LandingOrHome from './components/LandingOrHome'
import DonationFormContainer from './containers/DonationFormContainer'
import NavBar from './components/NavBar'
import './App.css';
import './flaticon.css';

class App extends Component {

  // componentWillMount(){
  //     this.props.getDonations()
  // }

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

const mapStateToProps = (state) => {
  return {user: state.userInfo.user}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(getUser()),
    getDonations: (userId) => dispatch(getDonations(userId))
   }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
