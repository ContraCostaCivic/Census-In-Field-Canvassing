import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'

/*
  - className: the name of an existing CSS class,
  - background: light (default) || medium || dark || custom (e.g., blue)
  - noPadding: true || false
  - variant(string): section (default), header, footer
*/

const Section = (props) => {

  const {
    children,
    classes,
    className: classNameProp,
    noPadding,
    header,
    footer,
    // booleans
    light,
    medium,
    dark,
    green,
  } = props

  // what was pass in?
  let variant
  if (header) {
    variant = 'header'
  } else if (footer) {
    variant = 'footer'
  } else {
    variant = 'section'
  }

  const clsNames = classNames(
    {

      [classes.bgLight]: light,
      [classes.bgMedium]: medium,
      [classes.bgDark]: dark,
      [classes.bgGreen]: green,
      [classes.bgDefault]: (!light && !medium && !dark),

      [classes.wrapper]: !noPadding
    },
    [

      classNameProp,
    ]

  )
  const Component = variant
  return (
    <Component className={clsNames}>
      <div className={classes.inner}>
      {children}
      </div>
    </Component>
  )

}

const styles = theme => ({
  wrapper: theme.section.xs,
  inner: {
    maxWidth: 1180,
    margin: 'auto',
  },
  bgDefault: theme.section.default,
  bgLight: theme.section.light,
  bgMedium: theme.section.medium,
  bgDark: theme.section.dark,
  bgGreen: theme.section.green
})

export default injectSheet(styles)(Section)