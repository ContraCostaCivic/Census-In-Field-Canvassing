import React from 'react'
import theme from 'theme'

const withTheme = Component => {
  function WithTheme(props) {
    return (
      <Component
        theme={theme}
        {...props}
      />
    )
  }

  return WithTheme
}

export default withTheme