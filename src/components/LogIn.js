import React, { Component } from 'react';
import { getExistingUser } from '../store/actions/userActions'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class Login extends Component {

  state = {
    email: "",
    password: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {

    return (
        <div className="landing-box sign-log">
        {/* <h1>Village</h1> */}
        <h2>Welcome back!</h2>
        <form action="/" onSubmit={(e)=> this.handleSubmit(e)} onChange={(e) => this.handleChange(e)}>
          <label className="sign-log-label" htmlFor="email">E-mail</label> <br/>
          <input className="sign-log-input" type="text" name="email"/> <br/>
          <label className="sign-log-label" htmlFor="password">Password</label> <br/>
          <input className="sign-log-input" type="password" name="password"/> <br/>
          <Link className="rate link" to="/" onClick={() => this.props.getExistingUser(this.state)} >
              Log In
          </Link>
           {/* <input type="submit" value="Log In"/> */}
        </form>

        </div>

    );
  }
}

const mapStateToProps = (state) => {
    return {
      chosenRole: state.userInfo.chosenRole
    }
  }

const mapDispatchToProps = (dispatch) => {
  return {
    getExistingUser: (user) => dispatch(getExistingUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
