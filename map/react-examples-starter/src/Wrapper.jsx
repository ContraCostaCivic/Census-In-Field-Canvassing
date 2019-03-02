import React from 'react'
import withThemeProvider from 'theme/withThemeProvider'
import injectSheet from 'react-jss'
import { compose } from 'recompose'
import App from 'ui/App'

class Wrapper extends React.Component {
  render() {
    return (
      <App />
    )
  }
}

const styles = theme => ({
  '@global': {
    html: {
      boxSizing: 'border-box',
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
      fontSize: '12pt',
      [theme.breakpoints.up('sm')]: {
        fontSize: '13pt'
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '14pt'
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '16pt'
      },
    },
    body: {
      margin: 0,
      fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
      fontSize: '1rem',
      fontWeight: 300,
      lineHeight: 1.65,
      webkitTextSizeAdjust: 'none',
      msOverflowStyle: 'scrollbar',
      '@media print': {
      backgroundColor: 'white',
      minWidth: 320,
      },
    },
    '*, *::before, *::after': {
      boxSizing: 'inherit',
    },
    p: {
      margin: 0,
    },
  },

})

export default compose(
  withThemeProvider,
  injectSheet(styles)
) (Wrapper)