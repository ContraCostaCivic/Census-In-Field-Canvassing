import React from 'react'
import { compose } from 'recompose'
import withTheme from 'theme/withTheme'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import classNames from 'classnames'

const variants = [
  'body',
  'caption',
  'h1',
  'h2',
  'h3',
  'h4',
  'subtitle1',
  'subtitle2',
  'subtitle3',
]

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

const getElementForVarient = (variant) => {
  return variantMap[variant]
}

const getColorValue = (theme, color) => {
  console.log('color', color)
  if (color === 'inherit') { return 'inherit'}
  const c = theme.palette.textColors.find(c => c.name === color)
  return c.value
}

const unknown = {
  color: 'red',
  fontWeight: 'bold',
}

const Text = ({
  align,
  children,
  classes,
  className: classNameProp,
  color='inherit',
  dark,
  light,
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
  }) => {

  let variantFinal
  if (variant) {variantFinal = variant}
  if (h1) {variantFinal = 'h1'}
  if (h2) {variantFinal = 'h2'}
  if (h3) {variantFinal = 'h3'}
  if (h4) {variantFinal = 'h4'}
  if (body) { variantFinal = 'body'}
  if (caption) { variantFinal = 'caption'}
  if (subtitle1) { variantFinal = 'subtitle1'}
  if (subtitle2) { variantFinal = 'subtitle2'}
  if (subtitle3) { variantFinal = 'subtitle3'}

  const colorStyle = {
    color: color === 'inherit' ? '' : getColorValue(theme, color)
  }

  const clsNames = classNames([
    classes.imgFluid,
    classNameProp,
    classes[variantFinal],

    {
      [classes.marginBottom]: !noMargin,
      [classes.left]: align === 'left',
      [classes.center]: align === 'center',
      [classes.noMargin]: noMargin,
    },

  ])
  const Component = getElementForVarient(variantFinal)

  if (!variants.includes(variantFinal)) {
    return <p style={unknown}>you must specify a variant</p>
  }


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
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'subtitle1',
    'subtitle2',
    'subtitle3',
    'body'
  ]),
}