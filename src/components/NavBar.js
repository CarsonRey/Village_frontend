import React from 'react';
import {Link} from 'react-router-dom'
import { storeUser } from '../store'
import { connect } from 'react-redux'


const NavBar = (props) => {
  let {user} = props

    return (
      <React.Fragment>
      <div className="nav">
        {localStorage.token && <h4 className="user-name">Hi, {user && user.name} ! </h4>}
        <h1 className="nav-item logo">Village</h1>
        {localStorage.token && <Link to="/" className="link  logout" onClick={() => { storeUser({});localStorage.clear();}}>Logout</Link> }
      </div>
      </React.Fragment>
    );
}

const mapStateToProps = (state) => {
  return { user: state.userInfo.user }
}

const mapDispatchToProps = (dispatch) => {
  return { storeUser: () => dispatch(storeUser()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
