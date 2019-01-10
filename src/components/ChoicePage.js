import React, { Component } from 'react';
import ChoiceCard from 'ChoiceCard'

class ChoicePage extends Component {
  state = {
    chosenRole:
    
  }

  chooseRole = () => {

  }

  render() {
    const cards = ["Food Donator", "Food Deliverer", "Food Receiver"]
    return (
      <React.Fragment>
        <h1>I'm signing up to be a ...</h1>
          {cards.map(card => <ChoiceCard />)}
        <button>Continue...</button>
      </React.Fragment>
    );
  }
}

export default ChoicePage;
