import React from 'react'
import { compose } from 'recompose'
import withTheme from 'theme/withTheme'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import { keys } from 'ramda'
import { hasProp } from 'lib/hasProp'

const variantMap = {
  body: 'p',
  caption: 'p',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  subtitle1: 'p',
  subtitle2: 'p',
  subtitle3: 'p',
}

const variants = keys(variantMap)

const getVariantKey = (props) => {
  return variants.find(key => hasProp(key, props))
}

const getColorValue = (theme, color) => {
  if (color === 'inherit') { return 'inherit'}
  const c = theme.palette.textColors.find(c => c.name === color)
  return c.value
}

const unknown = {
  color: 'red',
  fontWeight: 'bold',
}

const Text = (props) => {
  /* eslint-disable */
  const {
    align,
    children,
    classes,
    className: classNameProp,
    color='inherit',
    noMargin,
    caption,
    body,
    h1,
    h2,
    h3,
    h4,
    subtitle1,
    subtitle2,
    subtitle3,
    theme,
    variant
  } = props
  /* eslint-enable */

  // variantKey - the value the user passed in for body, h1, etc
  const variantKey = getVariantKey(props)

  // variantValue - the corresponding value from variantMap
  const variantValue = variantMap[variantKey]

  if (!variants.includes(variantKey)) {
    return <p style={unknown}>you specify one of {variants.join(', ')}</p>
  }

  const colorStyle = {
    color: color === 'inherit' ? '' : getColorValue(theme, color)
  }

  const clsNames = classNames([
    classes.imgFluid,
    classNameProp,
    classes[variantValue],
    {
      [classes.marginBottom]: !noMargin,
      [classes.left]: align === 'left',
      [classes.center]: align === 'center',
      [classes.noMargin]: noMargin,

    },

  ])

  const Component = variantValue

  return (
    <Component
      className={clsNames}
      style={colorStyle}
    >
      {children}
    </Component>
  )
}

const styles = theme => {

  const xs = theme.typography.xs
  const md = theme.typography.md

  return ({
    marginBottom: {
      marginBottom: '1em !important',
    },
    h1: xs.h1,
    h2: xs.h2,
    h3: xs.h3,
    h4: xs.h4,
    subtitle1: xs.subtitle1,
    subtitle2: xs.subtitle2,
    subtitle3: xs.subtitle3,
    body: xs.body,
    caption: xs.caption,
    [theme.breakpoints.up('md')]: {
      h1: md.h1,
      h2: md.h2,
      h3: md.h3,
      h4: md.h4,
      subtitle1: md.subtitle1,
      subtitle2: md.subtitle2,
      subtitle3: md.subtitle3,
      body: md.body,
      caption: md.caption,
    },
    noMargin: {
      margin: 0,
    },
    left: {
      textAlign: 'left',
    },
    center: {
      textAlign: 'center',
    },
  })
}

export default compose(
  withTheme,
  injectSheet(styles)
)(Text)

Text.propTypes = {
  variant: PropTypes.oneOf(variants)
}