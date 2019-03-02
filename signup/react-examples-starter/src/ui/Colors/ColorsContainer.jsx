import React from 'react'
import { connect } from 'react-redux'
import { getColors } from 'redux/selectors/colors'
import Colors from './Colors'

const ColorsContainer = ({ colors }) => {
  return (
    <Colors colors={colors} />
  )
}

const mstp = (state) => {
  return {
    colors: getColors(state),
  }
}

export default connect(mstp)(ColorsContainer)