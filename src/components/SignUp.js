import React, { Component } from 'react';
import { createUser } from '../store/actions/userActions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class SignUp extends Component {

  state = {
    name: "",
    email: "",
    password: "",
    address: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = () => {
    let role_id = this.determineRoleId(), {chosenRole} = this.props, user

    if(chosenRole === "Food Deliverer"){
      user = {name: this.state.name, email: this.state.email, password: this.state.password, role_id: role_id}
    }else {
      user = {name: this.state.name, email: this.state.email, password: this.state.password, role_id: role_id, address: this.state.address}
    }
    this.props.createUser(user)
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
    let { chosenRole } = this.props

    console.log(this.state)
    return (
      <div className="landing-box sign">

        <h2>Join the fam!</h2>
        <form onSubmit={(e)=> this.handleSubmit(e)} onChange={(e) => this.handleChange(e)}>
          <label className="sign-log-label" htmlFor="name">Name: </label><br/>
          <input className="sign-log-input" type="text" name="name" value={this.state.name}/> <br/>
{(chosenRole !== "Food Deliverer" ) && <div><label  className="sign-log-label" htmlFor="address">Address: </label><br/>
<input  className="sign-log-input" type="text" name="address" value={this.state.address}/> <br/></div>}


          <label className="sign-log-label" htmlFor="email">E-mail </label><br/>
          <input className="sign-log-input" type="text" name="email" value={this.state.email}/> <br/>
          <label className="sign-log-label" htmlFor="password">Password</label><br/>
          <input className="sign-log-input" type="password" name="password" value={this.state.password}/> <br/>

          <Link className="rate link" to="/" onClick={() => this.handleSubmit()}>
             Sign Up
          </Link>

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
    createUser: (user) => dispatch(createUser(user))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
