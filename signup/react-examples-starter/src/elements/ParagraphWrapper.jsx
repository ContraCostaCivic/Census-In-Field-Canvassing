import React from 'react'
import { compose } from 'recompose'
import injectSheet from 'react-jss'

const ParagraphWrapper = ({ children, classes }) => {
  return (
    <div className={classes.wrapper}>
      {children}
    </div>
  )
}

const styles = theme => ({
  wrapper: {
    padding: '0 2rem',
    [theme.breakpoints.up('md')]: {
      padding: '0 4rem',
    },
    [theme.breakpoints.up(870)]: {
      padding: '0 8rem',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '0 11rem',
    },
    // padding: '0 2rem',
    // [theme.breakpoints.up('md')]: {
    //   padding: '0 11rem',
    // }
    // maxWidth: '50%',
  }
})

export default injectSheet(styles)(ParagraphWrapper)