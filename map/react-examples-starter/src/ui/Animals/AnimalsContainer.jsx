import React from 'react'
import { connect } from 'react-redux'
import { getAnimals } from 'redux/selectors/animals'
import Animals from './Animals'

const AnimalsContainer = ({ animals }) => {
  // console.log('animals', animals)
  return (
    <Animals animals={animals} />
  )
}

const mstp = (state) => {

  return {
    animals: getAnimals(state),
  }
}

export default connect(mstp)(AnimalsContainer)