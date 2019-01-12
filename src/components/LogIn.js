import React, { Component } from 'react';
import { getExistingUser } from '../store/actions/userActions'
// import { Redirect } from 'react-router-dom'
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

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.getExistingUser(this.state)
  }

  render() {
    // const {chosenRole} = this.props
    console.log(this.props)
    return (
        <React.Fragment>
        {/* <h1>Village</h1> */}
        <h4>Welcome back!</h4>
        <form action="/" onSubmit={(e)=> this.handleSubmit(e)} onChange={(e) => this.handleChange(e)}>
          <label htmlFor="email">E-mail: </label>
          <input type="text" name="email"/> <br/>
          <label htmlFor="password">Password: </label>
          <input type="password" name="password"/> <br/>
          <input type="submit" value="Log In"/>
        </form>

        </React.Fragment>

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
