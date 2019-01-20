import React from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'


const NavBar = (props) => {
  let {user} = props

    return (
      <React.Fragment>
        {localStorage.token && <h4>Hi, {user && user.name} ! </h4>}
        <h1>Village</h1>
        {localStorage.token && <Link to="/" onClick={() => localStorage.clear()}>Logout</Link> }
      </React.Fragment>
    );
}

const mapStateToProps = (state) => {
  return { user: state.userInfo.user }
}

export default connect(mapStateToProps)(NavBar);
