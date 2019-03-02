/*
    The first object that has prop === value will be returned.
    Best if value is unique across all array elements
*/
export const getObjectFromArray = (prop, value, array) => {
  const idx = array.findIndex(i => i[prop] === value)
  return array[idx]
}