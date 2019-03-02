import React from 'react'
import Section from 'elements/Section'
import injectSheet from 'react-jss'
import Text from 'elements/Text'
import A from 'elements/A'
import Code from 'elements/Code'

const ComponentExamples = (props) => {
  return (
    <Section>
      <Text h2>Component Examples</Text>
      <Text body>
        Several examples of components that use the theme for styling are included in the dirctory src/elements. I'll discuss the <Code>Section</Code> component.
      </Text>
      <Text body>

      </Text>
    </Section>
  )
}

const styles = theme => ({

})

export default injectSheet(styles)(ComponentExamples)