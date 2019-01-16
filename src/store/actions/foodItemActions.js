const base_url = "http://localhost:3000/api/v1"


export const createFoodItem = (foodItem, donationId) => {

  return (dispatch) => {

    return fetch(`${base_url}/food_items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name:foodItem.name, quantity: foodItem.quantity, is_packaged: foodItem.packaged, date_made: foodItem.dateMade, expiration_date: foodItem.expiration, notes: ""})
    })
                .then(r => r.json())
                .then(item => {

                  dispatch(createFoodItemDonation(item.id, donationId))
                })
}
}

const createFoodItemDonation = (foodItemId, donationId) => {
  debugger
    return (dispatch) => {
      return fetch(`${base_url}/food_item_donations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({food_item_id: foodItemId, donation_id: donationId})
      }).then(r => r.json()).then(association => console.log(association))
    }
}
