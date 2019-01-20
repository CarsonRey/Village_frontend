import React from 'react';
import ColumnOneContainer from './ColumnOneContainer'
import ColumnTwoContainer from './ColumnTwoContainer'
import ColumnThreeContainer from './ColumnThreeContainer'
import { connect } from 'react-redux'

const ColumnsContainer = (props) => {
  return(
    <div className="ColumnsContainer">
      <ColumnOneContainer className="col"  role={props.container} user={props.user} />
      <ColumnTwoContainer className="col" role={props.container} user={props.user} />
      <ColumnThreeContainer className="col" role={props.container} user={props.user} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {user: state.userInfo.user}
}

export default connect(mapStateToProps)(ColumnsContainer)
