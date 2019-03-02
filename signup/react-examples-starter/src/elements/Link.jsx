import React from 'react'
import injectSheet from 'react-jss'
import {Link as Lnk} from 'react-router-dom'

const Link = ({ classes, to, children }) => {
  return (
    <Lnk className={classes.link} to={to}>{children}</Lnk>
  )
}

const styles = theme => ({
  link: theme.link,
})

export default injectSheet(styles)(Link)