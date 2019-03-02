import React from 'react'
import injectSheet from 'react-jss'

import classNames from 'classnames'

const RippleButtonCSS = ({ children, classes }) => {
  const clsNames = classNames(
    classes.button,
    classes.ripple
  )
  return (
    <button className={clsNames}>{children}</button>
  )
}


const styles = {
  button: {
    border: 'none',
    borderradius: 2,
    padding: '12px 18px',
    fontSize: 16,
    textTransform: 'uppercase',
    cursor: 'pointer',
    color: 'white',
    backgroundColor: '#2196f3',
    boxShadow: '0 0 4px #999',
    outline: 'none',
  },
  ripple: {
    backgroundPosition: 'center',
    transition: 'background 0.8s',
    '&:hover': {
      background: '#47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%) center/15000%',
    },
    '&:active': {
      backgroundColor: '#6eb9f7',
      backgroundSize: '100%',
      transition: 'background 0s',
    },
  }

}

export default injectSheet(styles)(RippleButtonCSS)