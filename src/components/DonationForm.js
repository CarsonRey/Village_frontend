import React from "react"
import FoodItemInput from "./FoodItemInput"
import { connect } from 'react-redux'
import { createDonation, showOrHideDonationForm } from '../store'
import { Link } from 'react-router-dom'
// , Redirect
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
        foodItems: [...prevState.foodItems, {name:"", quantity: 1, packaged: false, dateMade: "", expiration: ""}],
      }));
    }

    deleteInputRow = (deletedIndex) => {
      let allExcept = [...this.state.foodItems].filter((foodItemObj, index) => index !== deletedIndex)

      this.setState({
        foodItems: [...allExcept]
      })
    }

    handleSubmit = (e) => { e.preventDefault() }

    render() {


        let {foodItems} = this.state
        let { chosenRequest, user, createDonation } = this.props

        // {chosenRequest.id === null && <Redirect/>}

        let info = {request_id: chosenRequest.id, giver_id: user.id, receiver_id: chosenRequest.user.id}


        return (
        // <div className="bg-modal">
        //   <div className="modal-content">
        <React.Fragment>
            <h2>{chosenRequest.user.name} is in need! What will you donate ?</h2>

              <div className="addNew rate" onClick={this.addNewInputRow}>Add New Item +</div>

            <div className="donation-header">
              <div className="item-header">Item</div>
              <div className="quantity-header">Quantity</div>
              <div className="packaged-header">Packaged?</div>
              <div className="made-header">Date Made</div>
              <div className="exp-header">Exp. Date</div>
            </div>
            <form  onChange={this.handleChange} >

              <FoodItemInput deleteRow={this.deleteInputRow} foodItems={foodItems} />



              <Link to="/" className="donate-btn take-job" onClick={() => createDonation(info, foodItems)}>
                Donate
              </Link>

              <Link to="/" className="link">
                cancel
              </Link>

            </form>
          </React.Fragment>
        //   </div>
        // </div>
        )
      }
    }

    const mapStateToProps = (state) => {
      return {
        chosenRequest: state.requestInfo.chosenRequest,
        user: state.userInfo.user
       }
    }

    const mapDispatchToProps = (dispatch) => {
      return {
        createDonation: (info, foodItems) => dispatch(createDonation(info, foodItems)),
        hideForm: (isShowing) => dispatch(showOrHideDonationForm(isShowing))
      }
    }

    export default connect(mapStateToProps, mapDispatchToProps)(DonationForm);
