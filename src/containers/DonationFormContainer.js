import React from 'react';
import DonationForm from '../components/DonationForm'
import { Link } from 'react-router-dom'

const DonationFormContainer = (props) => {


    return (
      <React.Fragment>
      <div><Link to="/">Back</Link></div>
      {/* <h1></h1> */}
      <DonationForm/>
      </React.Fragment>
    );
}
export default DonationFormContainer;
