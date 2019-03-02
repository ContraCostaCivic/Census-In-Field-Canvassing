import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import classNames from 'classnames'

const ResponsiveImage = ({ alt, classes, src, className }) => {
  const clsNames = classNames([
    classes.imgFluid,
    className,
  ])
  return (
    <img src={src} alt={alt}  className={clsNames}/>
  )
}

const styles = {
  imgFluid: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
  },
}

export default injectSheet(styles)(ResponsiveImage)

ResponsiveImage.propTypes = {
  alt: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
}