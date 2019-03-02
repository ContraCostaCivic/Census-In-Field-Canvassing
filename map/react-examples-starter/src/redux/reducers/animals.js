const theAnimals = [
  'Dog',
  'Cat',
  'Camel',
  'Horse'
]

const animals = (state = theAnimals, { type, payload }) => {
  switch (type) {
    case 'getAnimals':
      return theAnimals
    default:
      return state
  }
}

export default animals