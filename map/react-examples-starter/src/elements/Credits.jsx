import React from 'react'
import injectSheet from 'react-jss'
import Text from './Text'
import Section from './Section'

const Credits = ({ children, classes }) => {
  return (
    <Section className={classes.wrapper} background='darkGrey'>
      <Text h4>Credits</Text>

      <ul className={classes.ul}>
        {children}
      </ul>
    </Section>
  )
}

const styles = {
  wrapper: {

  },
  ul: {
    listStyleType: 'square',
  }
}

export default injectSheet(styles)(Credits)