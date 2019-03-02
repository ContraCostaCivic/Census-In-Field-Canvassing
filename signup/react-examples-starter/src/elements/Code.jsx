import React from 'react'
import injectSheet from 'react-jss'

const Code = ({ classes, children }) => {
  return (
    <code className={classes.code}>{children}</code>
  )
}

const styles = theme => ({
  code: {
    fontFamily: '"Ubuntu Mono", monospace',
    backgroundColor: 'rgba(235, 235, 235)',
    padding: '1px 2px',
  }

})
export default injectSheet(styles)(Code)