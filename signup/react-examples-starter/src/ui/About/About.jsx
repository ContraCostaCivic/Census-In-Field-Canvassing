import React from 'react'
import Section from 'elements/Section'
import injectSheet from 'react-jss'
import Text from 'elements/Text'
import A from 'elements/A'

const About = (props) => {
  return (
    <Section>
      <Text h2 color='blue'>About</Text>
      <Text body dark>
        React Example Starter was created as a learning experience while creating my personal site <A href='http://carlbecker.com'>carlbecker.com</A>. I'm using it here as a shell for creating React related examples for the site **site to come later: React Examples**. While it has many nice features it isn't complete, but more the beginning of somthing that may or may not get improved upon depending on what future work I need to do. React Example Starter was bootstrapped with <A href='https://github.com/facebook/create-react-app'>Create React App</A>. Although I usually find reasons to 'eject' create-react-app, this project hasn't been ejected.
      </Text>
      <Text body>
        React Example Starter an example of how to create a theme and flexible components that use the theme. It is not a fully packaged solution like <A href='https://material-ui.com'>Material UI</A> from which some of it is derived from.
      </Text>
      <Text h3 dark>Main Features</Text>
      <Text body dark>React Example Starter contains all the features of create-react-app plus <A href='https://redux.js.org/'>Redux</A>, <A href='https://cssinjs.org/react-jss'>JSS integration with React (react-jss)</A>, a custom theme system, absolute paths for module imports, color logging to the browser's console, normaliz-jss & <A href='http://scottjehl.github.io/picturefill/'>Picturefill</A>.</Text>
    </Section>
  )
}

const styles = theme => ({

})

export default injectSheet(styles)(About)