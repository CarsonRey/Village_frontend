import React from 'react';
import UserContainer from '../containers/UserContainer'
import LandingPage from './LandingPage'

const LandingOrHome = (props) => {
    return (
      <React.Fragment>
        {localStorage.token ? <UserContainer/> : <LandingPage/>}
      </React.Fragment>
    );
}
export default LandingOrHome;
