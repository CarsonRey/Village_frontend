import React from "react"
import FoodItemInput from "./FoodItemInput"
import { connect } from 'react-redux'
import { createDonation } from '../store'
import { Link } from 'react-router-dom'

  class DonationForm extends React.Component {

    state = {
      foodItems: [{name:"", quantity: 1, packaged: false, dateMade: "", expiration: ""},{name:"", quantity: 1, packaged: false, dateMade: "", expiration: ""},{name:"", quantity: 1, packaged: false, dateMade: "", expiration: ""}]
    }

    handleChange = (e) => {
      let foodItems = [...this.state.foodItems]

      if (["name", "dateMade", "expiration"].includes(e.target.className) ) {

        foodItems[e.target.dataset.id][e.target.className] = e.target.value
        this.setState({ foodItems }, () => console.log(this.state.foodItems))

      } else if (["packaged"].includes(e.target.className)){

        foodItems[e.target.dataset.id][e.target.className] = e.target.value === "false" ? true : false
        this.setState({ foodItems }, () => console.log(this.state.foodItems))

      } else if (["quantity"].includes(e.target.className)){

        foodItems[e.target.dataset.id][e.target.className] = parseInt(e.target.value)
        this.setState({ foodItems }, () => console.log(this.state.foodItems))
      }
    }

    addNewInputRow = () => {
      this.setState((prevState) => ({
        foodItems: [...prevState.foodItems, {name:"", quantity: null, packaged: false, dateMade: "", expiration: ""}],
      }));
    }

    deleteInputRow = () => {

    }

    handleSubmit = (e) => { e.preventDefault() }

    render() {
      
        let {foodItems} = this.state
        let { chosenRequest, user, createDonation } = this.props
        let info = {request_id: chosenRequest.id, giver_id: user.id, receiver_id: chosenRequest.user.id}
        return (
          <React.Fragment>
          <h2>{chosenRequest.user.name} is in need! What will you donate ?</h2>
          <form  onChange={this.handleChange} >

            <FoodItemInput foodItems={foodItems} />

            <div className="addNewInput" onClick={this.addNewInputRow}>Add New Item +</div>
            <Link to="/" onClick={() => createDonation(info, foodItems)}>
              Donate
            </Link>
            {/* On click
              1. Create a donation with that request (request_id, giver_id, receiver_id). We have to pass in state to this thunk function so that we can accomplish step 2.
              2. In the "then" of that function we iterate over that passed in state. For each object in state, we want to fetch/create the food item. We must pass in the donation ID so that we can accomplish step 3
              3. In the "then" of the creation of the foodItem we fetch to create the food_item donation, passing in the ID of the foodItem and the ID of the donation  */}
            {/* <input type="submit" value="Submit" /> */}
          </form>
        </React.Fragment>
        )
      }
    }

    const mapStateToProps = (state) => {
      return { chosenRequest: state.requestInfo.chosenRequest, user: state.userInfo.user }
    }

    const mapDispatchToProps = (dispatch) => {
      return { createDonation: (info, foodItems) => dispatch(createDonation(info, foodItems)) }
    }

    export default connect(mapStateToProps, mapDispatchToProps)(DonationForm);
