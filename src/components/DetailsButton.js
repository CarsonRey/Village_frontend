import React from 'react';
import { connect } from 'react-redux'
import { setChosenDonation, showOrHidePastDetail } from '../store'



const DetailButton = (props) => {
  const {delivery, setDonation, showDetail} = props
    return (
        <div className="DetailButton rate" onMouseOver={()=> setDonation(delivery)} onClick={() => showDetail(false)}>
          Details
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
  return {
     setDonation: (job) => dispatch(setChosenDonation(job)),
     showDetail: (isShowing) => dispatch(showOrHidePastDetail(isShowing))
   }
}

export default connect(null, mapDispatchToProps)(DetailButton);
