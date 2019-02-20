import React from "react"
import FoodItemInput from "./FoodItemInput"
import { connect } from 'react-redux'
import { createDonation, showOrHideDonationForm } from '../store'
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
        let value = e.target.value === "false" ? true: false


        foodItems[e.target.dataset.id][e.target.className] = value
        this.setState({ foodItems }, () => console.log(this.state.foodItems))

      } else if (["quantity"].includes(e.target.className)){

        foodItems[e.target.dataset.id][e.target.className] = parseInt(e.target.value)
        this.setState({ foodItems }, () => console.log(this.state.foodItems))
      }
    }

    addNewInputRow = () => {
      this.setState({
        foodItems: [{name:"", quantity: 1, packaged: false, dateMade: "", expiration: ""}, ...this.state.foodItems]}, () => console.log(this.state.foodItems));
    }

    deleteInputRow = (checkbox, deletedIndex) => {

      let allExcept = [...this.state.foodItems].filter((foodItemObj, index) => index !== deletedIndex)

      this.setState({
        foodItems: [...allExcept]
      })
    }

    handleCheckbox = (value, checkedIndex) => {
      let foodItems = [...this.state.foodItems]
      foodItems[checkedIndex].packaged = !value

      this.setState({ foodItems }, ()=> console.log(this.state.foodItems))
    }

    // onAdd = () => {
    //   let newFoodItems = []
    //   let newIndex;
    //   let newInputRow;
    //
    //   this.state.foodItems.forEach((inputRow, index) => {
    //
    //     if(inputRow.packaged === true){
    //       inputRow.packaged = false
    //       newIndex = index
    //       newFoodItems.push(inputRow)
    //     }
    //     else if (index === newIndex + 1){
    //       inputRow.packaged = true
    //       newFoodItems.push(inputRow)
    //     } else {
    //       newFoodItems.push(inputRow)
    //     }
    //   })
    //   this.setState({
    //     foodItems: [...newFoodItems]
    //   })
    // }
    //
    // onDelete = () => {
    //   let newFoodItems = []
    //   let newIndex;
    //   let newInputRow;
    // }

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
          <div className="don-form-cont">
              <div className="donation-header">
                <div className="item-header">Item</div>
                <div className="quantity-header">Quantity</div>
                <div className="packaged-header">Packaged?</div>
                <div className="made-header">Date Made</div>
                <div className="exp-header">Exp. Date</div>
              </div>
              <form className="don-form"  onChange={this.handleChange} >

                <FoodItemInput handleCheckbox={this.handleCheckbox} onChange={this.handleChange}  deleteRow={this.deleteInputRow} foodItems={foodItems} />



              </form>
              <Link to="/" className="donate-btn link" onClick={() => createDonation(info, foodItems)}>
                Donate
              </Link> <br/> <br/> <br/> <br/>

              <Link to="/" className="link don-cancel">
                cancel
              </Link>
            </div>
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
