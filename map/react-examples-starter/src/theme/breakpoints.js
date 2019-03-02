import { keys, values } from 'ramda'

export const breakpoints = {
  xs: 0,
  sm: 360,
  md: 736,
  lg: 1280,
  xl: 1680,
}

export const breakpointKeys = keys(breakpoints)
export const breakpointValues = values(breakpoints)

export const getKeyForValue = (width) => {
  let key = ''
  for (let i=0; i<breakpointValues.length; i++) {
    if (width >= breakpointValues[i] && width < breakpointValues[i+1] ) {
      key = breakpointKeys[i]
      break
    }
  }
  if (key === '') {
    key = breakpointKeys[breakpointKeys.length-1]
  }
  return key
}

export const getValueForKey = (key) => {
  return breakpoints[key]
}
