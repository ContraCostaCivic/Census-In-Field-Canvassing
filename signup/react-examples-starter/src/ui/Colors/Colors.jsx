import React from 'react'
import injectSheet from 'react-jss'
import Text from 'elements/Text'
import Section from 'elements/Section'

const Colors = ({ colors, classes}) => {
  return (
    <Section>
      <Text h2 dark>Colors</Text>

      <div className={classes.colors}>
        {
          colors.map(c => {
            return (
              <div
                key={c}
                className={classes.colorRect}
                style={{ backgroundColor: c }}
              >
                {c}
              </div>
            )
          })
        }
      </div>
    </Section>
  )
}

const styles = theme => ({
  colors: {
    display: 'flex',
  },
  colorRect: {
    color: '#fff',
    margin: 5,
    padding: 5,
  },
})

export default injectSheet(styles)(Colors)