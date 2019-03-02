
// borrowed from http://material-ui.com

// Sorted ASC by size. That's important.
// It can't be configured as it's used statically for propTypes.
import { breakpointValues, breakpointKeys, getValueForKey } from './breakpoints'

// Keep in mind that @media is inclusive by the CSS specification.
export default function createBreakpoints(breakpoints) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm[.
    unit = 'px',
    step = 5,
    ...other
  } = breakpoints

  function up(key) {

    const value = typeof key === 'number' ? key : getValueForKey(key)
    const q = `@media (min-width:${value}${unit})`
    // pink('createBreakpoints.up', `${key} - ${q}`)
    return q
  }

  function down(key) {
    const endIndex = breakpointKeys.indexOf(key) + 1
    const upperbound = breakpointValues[breakpointKeys[endIndex]]

    if (endIndex === breakpointKeys.length) {
      // xl down applies to all sizes
      return up('xs')
    }

    const value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : key
    const q = `@media (max-width:${value - step / 100}${unit})`
    // pink('createBreakpoints.up', `${key} - ${q}`)
    return q
  }

  function between(start, end) {
    const endIndex = breakpointKeys.indexOf(end) + 1
    if (endIndex === breakpointKeys.length) {
      return up(start)
    }

    const q = `@media (min-width:${breakpointValues[start]}${unit}) and  + (max-width:${breakpointValues[breakpointKeys[endIndex]] - step / 100}${unit})`

    // pink('createBreakpoints.up', `(start:${start}, end:${end}) ${q}`)
    return q
  }

  function only(key) {
    return between(key, key)
  }

  function width(key) {
    return breakpointValues[key]
  }

  return {
    breakpointKeys,
    breakpointValues,
    up,
    down,
    between,
    only,
    width,
    ...other,
  }
}
