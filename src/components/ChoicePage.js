import React from 'react';
import ChoiceCard from './ChoiceCard'

const ChoicePage = (props) => {

    const roles = ["Food Donator", "Food Deliverer", "Food Receiver"]
    return (
      <React.Fragment>
        <h1>I'm signing up to be a ...</h1>
          {roles.map(role => <ChoiceCard key={role} role={role} />)}
        <button onClick={()=> props.roleChosen()}>Continue...</button>
      </React.Fragment>
    );
}



export default ChoicePage;
