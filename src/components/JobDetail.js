import React from 'react';
import Items from './Items'
import Map from './Map'
import StarRatingComponent from 'react-star-rating-component'
import { connect } from 'react-redux'
import { showOrHideJobDetail, createDelivery, showOrHidePastDetail } from '../store'
import { returnAverageRating } from '../store/helperMethods/DateTimeFormatting'
import help from '../help.png'


const JobDetail = (props) => {
  const { donation, hideDetail, takeJob, user, location, isDelivery, hide, ratings } = props
  let giverRating = null
  let receiverRating = null

  // THE FOLLOWING ONLY HAPPENS IF isDelivery IS TRUE
    let specificRatings = ratings.filter(rating => rating.delivery.id === donation.id)
  // search through ratings
    specificRatings.forEach(rating => rating.rater_id === donation.giver.id ? giverRating = rating : receiverRating = rating)
  // get the ratings where the rating.delivery.id matches donation.id (remember [0])
  // From that array, we want to iterate over it and for each object, if the rater.id
  // If the rater ID is equal to delivery.giver.id, set giverRating equal to that rating object, otherwise, set receiverRating

// debugger

    return (
      <div className="bg-modal" onClick={() => {hideDetail(true); hide(true);}}>
        <div className="JobDetail modal-content" >
          <h2 className="details">Details</h2>

        <div className="to-from-text"><h4>From</h4><h4>To</h4></div>
        <div className="to-from">

          <div className="detail-place">
            <div>{donation.giver.name}</div>
            <div>{donation.giver.address}</div>
            <div>Hours of Operation</div>
          </div>

          <div className="detail-place">
            <div>{donation.receiver.name}</div>
            <div>{donation.receiver.address}</div>
            <div>Hours of Operation</div>
          </div>

        </div>

        {/* THIS IS THE BEGINNING OF DELIVERER PAST INFORMATION */}
        {location === "DelivererPast" &&
        <div>
        { isDelivery &&

          <React.Fragment>
            <div className="past-rate-cont">

              <div className="past-rating">
                { giverRating ? (
                  <React.Fragment>
                    <StarRatingComponent
                      name="rate2"
                      editing={false}
                      renderStarIcon={() => <i className="flaticon-help"></i>}
                      starCount={5}
                      value={giverRating.number}
                      starColor={'#f9bb2d'}
                      emptyStarColor={'lightgrey'}
                    />
                    <p>{giverRating.notes}</p>
                  </React.Fragment>
                ) : (
                  <p className="italic">{donation.giver.name} has not rated you yet.</p>
                ) }
              </div>
                <div>
                  <img src={help} alt="help-icon" style={{'height': '100px'}}/>
                  <div>Avg.: {returnAverageRating(giverRating, receiverRating)}</div>
                </div>
              <div className="past-rating">
                { receiverRating ? (
                  <React.Fragment>

                    <StarRatingComponent
                      name="rate2"
                      editing={false}
                      renderStarIcon={() => <i className="flaticon-help"></i>}
                      starCount={5}
                      value={receiverRating.number}
                      starColor={'#f9bb2d'}
                      emptyStarColor={'lightgrey'}
                    />
                    <div>{receiverRating.number}/5</div>
                    <p>Comments:</p>
                    <p>{receiverRating.notes}</p>
                  </React.Fragment>
                ) : (
                  <p className="italic">{donation.receiver.name} has not rated you yet.</p>
                ) }
              </div>
            </div>
          </React.Fragment>
         }
       </div>
     }
       {/* THIS IS THE END OF DELIVERER PAST INFORMATION */}

        <Items items={isDelivery ? donation.donation.food_items : donation.food_items} />


{location === "DelivererJob" &&
<React.Fragment>
          <Map
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCpeS8wGPxMgbnpseP8T5GhE14EJ2ZGy6Q&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            origin={donation.giver.address}
            destination={donation.receiver.address}
          />

          <div className="take-job" onClick={() => takeJob({giver_id: donation.giver.id, receiver_id: donation.receiver.id, deliverer_id: user.id}, donation.id )}>Take the job</div>
</React.Fragment>
        }

          {location === "Receiver" && <h1>hi</h1>}





        </div>
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    donation: state.donationInfo.chosenDonation,
    user: state.userInfo.user,
    ratings: state.ratingInfo.ratings
   }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hideDetail: (isShowing) => dispatch(showOrHideJobDetail(isShowing)),
    takeJob: (params, donationId) => dispatch(createDelivery(params, donationId)),
    hide: (isShowing) => dispatch(showOrHidePastDetail(isShowing))
   }
}



export default connect(mapStateToProps, mapDispatchToProps)(JobDetail);
