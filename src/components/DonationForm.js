import React from "react"
import FoodItemInput from "./FoodItemInput"
import { Link } from 'react-router-dom'

  class Form extends React.Component {

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

    addNewInputRow = (e) => {
      this.setState((prevState) => ({
        foodItems: [...prevState.foodItems, {name:"", quantity: null, packaged: false, dateMade: "", expiration: ""}],
      }));
    }

    handleSubmit = (e) => { e.preventDefault() }

    render() {
        let {foodItems} = this.state
        return (
          <form  onChange={this.handleChange} >
            <FoodItemInput foodItems={foodItems} />

            <div className="addNewInput" onClick={this.addNewInputRow}>Add New Item +</div>
            <Link to="/" onClick={() => console.log("hi")}>
              Donate
            </Link>
            {/* <input type="submit" value="Submit" /> */}
          </form>
        )
      }
    }

    export default Form
