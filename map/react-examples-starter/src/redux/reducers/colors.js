const theColors = [
  'Red',
  'Green',
  'Blue',
  'Orange',
  'Purple',
]

const colors = (state = theColors, { type, payload }) => {
  switch (type) {
    case 'getColors':
      return theColors
    default:
      return state
  }
}

export default colors