Welcome to Village!

This is a web application that solves the problem of restaurant food waste. There are 3 user roles: Donator, Deliverer and Receiver. The Flow of the app is as follows:

1) Receiver creates a request with the number of people they need to feed.
2) This request is then read by all potential donators with information about who sent the request and how many people are in need. 
3) A donator can create a donation by filling out a form with the food items they're going to send to the receiver that requested food. 
4) Upon creating a donation (has many FoodItemDonations, has many FoodItems through FoodItemDonations), the initial request is marked as taken and the donation becomes an available job for a user with a deliverer role. 
5) A deliverer can view the details of an available job (donation) which includes information about who is donating, who is receiving, what is being donated, and a map from the donator location to the receiver location. 
6) When a deliverer volunteers to deliver a donation, they create a delivery, and this delivery is shown on the "Deliveries in Progress" column for all three user roles.
7) A deliverer can change the status of a delivery by clicking the mark the pick-up time button -- which will log the pick up time and change the status of the delivery to "On the way" -- or mark delivery complete button -- which will move delivery to the "Past Deliveries/Donations/Received Donations" column for all three users --  on the delivery card. They also have access to the hours of operation of each establishment. 
8) When a delivery is complete, the donators and receivers will get a prompt at the top of their homepage to rate their deliverer which links to a form that will create a rating (composed of a number (1-5) and comments). Ratings from both the deliverer and receiver are then available on the past delivery card for the deliverer. Past Donations/Received Donation cards have the pick-up and drop-off time and the rating that the current user has given (and tell them to rate their deliverer if they haven't). 


Technologies Used:
- HTML
- pure CSS
- Javascript
- React
- Redux (with thunk & combine reducer)
- Google Maps Javascript API
- Google Geocode API

Improvements to be made:
- More cohesive communication between client and server (either websockets, polling or long-polling) so the user doesn't have to refresh to receive new information about a delivery or request
- Messaging between users
- Validations on all forms.
- Validations that query Google Places API to make sure a user signing up to be a donator is an official establishment.
- Donation form should have a list of items that belong to that donator's menu so they don't have to type everything in.  
- Map should ask the Deliverer for their location to provide a more relevant map. Should additionally give a travel time estimate.

Wireframing (before v1 of project):







