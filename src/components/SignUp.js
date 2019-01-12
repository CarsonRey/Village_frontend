import React, { Component } from 'react';
import { createUser } from '../store/actions/userActions'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'


class SignUp extends Component {

  state = {
    role_id: this.props.chosenRole,
    name: "",
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
    let role_id = this.determineRoleId()
    let user = {name: this.state.name, email: this.state.email, password: this.state.password, role_id: role_id}
    this.props.createUser(user).then()
  }

  determineRoleId = () => {
    let x = this.props.chosenRole
    if (x === "Food Donator"){
      return 1
    } else if (x === "Food Deliverer"){
      return 2
    } else if (x === "Food Receiver"){
      return 3
    }
  }


  render() {

    console.log(this.state)
    return (
      <React.Fragment >
        <h1>Village</h1>
        <h4>Join the fam!</h4>
        <form onSubmit={(e)=> this.handleSubmit(e)} onChange={(e) => this.handleChange(e)}>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name"/> <br/>
          <label htmlFor="email">E-mail: </label>
          <input type="text" name="email"/> <br/>
          <label htmlFor="password">Password: </label>
          <input type="password" name="password"/> <br/>
          <input type="submit" value="Sign Up"/>
          {/* // <Link to="/">
          //   Sign Up
          // </Link> */}
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
    createUser: (user) => dispatch(createUser(user))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
