import React from 'react'
import Section from 'elements/Section'
import injectSheet from 'react-jss'
import Text from 'elements/Text'
import A from 'elements/A'
import Pre from 'elements/Pre'

const startUsing = `$ git clone https://github.com/klequis/react-examples-starter.git
$ cd react-examples-starter
$ yarn
$ yarn start`

const Using = (props) => {
  return (
    <Section>
      <Text h2 dark>Using</Text>
      <Pre code={startUsing} />
      <Text h3 dark>Theming & Styling</Text>
      <Text body dark>
        Theming uses the ThemeProvider as<A href='https://cssinjs.org/react-jss/?v=v10.0.0-alpha.3#theming'>as described in the react-jss documentation</A>.
      </Text>
      <Text body dark>
        Styling is also done as <A href='https://cssinjs.org/react-jss/?v=v10.0.0-alpha.3#theming'>as described in the react-jss documentation</A> and there are numerous examples throught this project.
      </Text>
      <Text body>

      </Text>
    </Section>
  )
}

const styles = theme => ({

})

export default injectSheet(styles)(Using)