import React from 'react';
import {Link} from 'react-router-dom'
import { storeUser } from '../store'
import { connect } from 'react-redux'


const NavBar = (props) => {
  let {user} = props
console.log ("navbar", user)
    return (
      <React.Fragment>
      <div className={localStorage.length > 0 ? "nav" : "nav-no-user"}>
        {(localStorage.length > 0 && user) && <h4 className="user-name">Hi, {user && user.name} ! </h4>}
        <h1 className={`nav-item ${ localStorage.length > 0 ? "logo" : "logo-no-user"}`} >Village</h1>
        {(localStorage.token && user) && <Link to="/" className="link  logout" onClick={() => { storeUser({});localStorage.clear();}}>Logout</Link> }
      </div>
      </React.Fragment>
    );
}

const mapStateToProps = (state) => {
  return { user: state.userInfo.user }
}

const mapDispatchToProps = (dispatch) => {
  return { storeUser: (user) => dispatch(storeUser(user)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
