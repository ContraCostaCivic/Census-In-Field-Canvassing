import React from 'react'
import injectSheet from 'react-jss'
import Section from 'elements/Section'
import iLogo from './media/logo.svg'
import Text from 'elements/Text'

const Header = ({ classes }) => {
  return (
    <Section
      dark
      noPadding
      header
    >
      <div className={classes.wrapper}>
        <img src={iLogo} className={classes.appLogo} alt="logo" />
        <Text h1 noMargin className={classes.title}>React Example Starter</Text>
      </div>
    </Section>
  )
}

const styles = theme => ({
  wrapper: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    margin: '0.5rem 0'

  },
  title: {
    fontSize: '1.8rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '2rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.5rem',
    }
  },
  appLogo: {
    animation: 'App-logo-spin infinite 20s linear',
    height: '9vmin',
    margin: '0 0.5rem',
  },
  '@keyframes App-logo-spin': {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  }
})

export default injectSheet(styles)(Header)
