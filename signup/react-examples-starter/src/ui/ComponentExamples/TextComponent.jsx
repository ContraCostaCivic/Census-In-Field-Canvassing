import React from 'react'
import Section from 'elements/Section'
import injectSheet from 'react-jss'
import Text from 'elements/Text'
import A from 'elements/A'

const About = (props) => {
  return (
    <Section>
      <Text h2>Text</Text>
      <Text body>
        component: <Text />
        example:
        By default the Text component will inherit the CSS 'color' property value. If using the <Section/> the font color will automatically be set in relation to the section's color (theme.).

      </Text>
    </Section>
  )
}

const styles = theme => ({

})

export default injectSheet(styles)(About)