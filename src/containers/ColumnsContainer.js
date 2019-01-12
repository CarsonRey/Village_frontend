import React from 'react';
import ColumnOneContainer from './ColumnOneContainer'
import ColumnTwoContainer from './ColumnTwoContainer'
import ColumnThreeContainer from './ColumnThreeContainer'

const ColumnsContainer = (props) => {
  return(
    <React.Fragment>
      <ColumnOneContainer  />
      <ColumnTwoContainer />
      <ColumnThreeContainer />
    </React.Fragment>
  )
}

export default ColumnsContainer
