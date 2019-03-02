import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'
import { getColors } from 'redux/selectors/colors'
import { getAnimals } from 'redux/selectors/animals'

import App from './App'

const AppContainer = ({ animals, colors }) => {
  return (
    <App
      animals={animals}
      colors={colors}
    />
  )
}

const mstp = (state) => {
  return {
    animals: getAnimals(state),
    colors: getColors(state),
  }
}
export default compose(
  withRouter,
  connect(mstp)
)(AppContainer)