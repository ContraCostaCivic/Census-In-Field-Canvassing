import React from 'react'
import withSizes from 'react-sizes'
import { getKeyForValue } from './breakpoints'

const withBreakpoints = Component => {
  function WithBreakpoints(props) {
    // console.log(getKeyForValue(props.width))
    return (
      <Component
        breakpoint={getKeyForValue(props.width)}
        {...props}
      />
    )
  }
  const mapSizesToProps = ({ width }) => ({
    width: width
  })
  return withSizes(mapSizesToProps)(WithBreakpoints)
}

export default withBreakpoints
