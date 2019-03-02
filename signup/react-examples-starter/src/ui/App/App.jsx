import React from 'react'
import injectSheet from 'react-jss'
import Header from 'ui/Header'
import Footer from 'ui/Footer'
import Animals from 'ui/Animals'
import Colors from 'ui/Colors'
import About from 'ui/About'
import Using from 'ui/Using'
import ComponentExamples from 'ui/ComponentExamples'

class App extends React.Component {

  render() {
    const { classes } = this.props
    return (
      <div id='App-wrapper' className={classes.wrapper}>
        <Header />
          <main>
            <About />
            <Using />
            <ComponentExamples />
            <Animals />
            <Colors />
          </main>
        <Footer />
      </div>
    )
  }
}


const styles = theme => ({
  wrapper: {
    minHeight: '100vh',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'space-between',
  },
})

export default injectSheet(styles)(App)