import React from 'react'
import injectSheet from 'react-jss'
import Text from 'elements/Text'
import Section from 'elements/Section'

const AnimalsContainer = ({ animals, classes}) => {
  return (
    <Section>
      <Text h2 dark>Animals</Text>
      <select className={classes.select}>
        {
          animals.map(a => {
            const lower = a.toLowerCase()
            return <option key={lower} value={lower}>{a}</option>
          })
        }
      </select>
    </Section>
  )
}

const styles = theme => ({
  select: {
    width: 200,
  }
})

export default injectSheet(styles)(AnimalsContainer)