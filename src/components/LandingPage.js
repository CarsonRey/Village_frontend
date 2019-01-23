import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import video from '../mod5.mp4'

class LandingPage extends Component {

  render() {
    return (
      <React.Fragment>
        {/* <video className="myVideo" loop autoPlay muted >
         <source src={video} type="video/mp4"/>
         <source src={video} type="video/ogg"/>
         Your browser does not support the video tag.
       </video> */}
      <div className="landing-box" >
        <h2 className="app-desc">A meal share app where leftovers are delivered to people in need</h2>
        <Link className=" link rate" to="/returning-user">I'm a Returning User</Link> <Link className=" link rate" to="/new-user">Sign Me Up!</Link>
      </div>
      </React.Fragment>
    );
  }
}

export default LandingPage;
