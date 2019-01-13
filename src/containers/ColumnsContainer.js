import React from 'react';
import ColumnOneContainer from './ColumnOneContainer'
import ColumnTwoContainer from './ColumnTwoContainer'
import ColumnThreeContainer from './ColumnThreeContainer'
import { connect } from 'react-redux'


const ColumnsContainer = (props) => {
  return(
    <React.Fragment>
      <ColumnOneContainer  role={props.container} user={props.user} />
      <ColumnTwoContainer role={props.container} user={props.user} />
      <ColumnThreeContainer role={props.container} user={props.user} />
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {user: state.userInfo.user}
}

export default connect(mapStateToProps)(ColumnsContainer)
