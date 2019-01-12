import React from 'react';

const NavBar = (props) => {
    return (
      <React.Fragment>
        {localStorage.token && <h4>Hi, {localStorage.userName} ! </h4>}
        <h1>Village</h1>
        {localStorage.token && <button onClick={() => localStorage.clear()}>Logout</button> }
      </React.Fragment>
    );
}
export default NavBar;
