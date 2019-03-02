import React from 'react'
import { ThemeProvider } from 'react-jss'
import theme from 'theme'

const withThemeProvider = Component => {
  function WithThemeProvider(props) {
    return (
      <ThemeProvider theme={theme}>
        <Component
          {...props}
        />
      </ThemeProvider>
    )
  }

  return WithThemeProvider
}

export default withThemeProvider