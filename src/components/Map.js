import React from 'react';
import axios from 'axios'
import config from 'react-global-configuration'
import '../config'
// import { connect } from 'react-redux'
// const dotenv = require('dotenv').config({ path: path.resolve(_components,'../../.env')})

// dotenv.config({
//   path: 'frontend_village/.env'
// })

// const {MAPS_API_KEY} = process.env
const key = config.get('mapAPIKey')

const { compose, withProps, lifecycle } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} = require("react-google-maps");

const Map = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${key}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {

      const DirectionsService = new window.google.maps.DirectionsService();

      axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, {
        params:{
          address: this.props.origin,
          key: `${key}`
        }
      }).then(resp => {
        console.log(resp.data.error_message)
        // console.log(resp.data.results.geometry.location.lat)

      })

      DirectionsService.route({
        origin: new window.google.maps.LatLng(41.8507300, -87.6512600),
        destination: new window.google.maps.LatLng(41.8525800, -87.6514100),
        travelMode: window.google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
    }
  })
)(props =>
  <GoogleMap
    defaultZoom={7}
    defaultCenter={new window.google.maps.LatLng(41.8507300, -87.6512600)}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
);

export default Map;
