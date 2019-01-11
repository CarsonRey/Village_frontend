import React from 'react';
import UserContainer from '../containers/UserContainer'
import LandingPage from './LandingPage'

const LandingOrHome = (props) => {
    return (
      <React.Fragment>
        {localStorage.length === 0 ? <LandingPage/> : <UserContainer/> }
      </React.Fragment>
    );
}
export default LandingOrHome;
