import React from 'react'
import injectSheet from 'react-jss'


const Button = ({ classes, children }) => {
  return (
    <div className={classes.wrapper}>
      <button className={classes.btn}>{children}</button>
    </div>
  )

}

const styles = theme => ({
  wrapper: {
    padding: 16,
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#3f51b5',
    border: 0,
    borderRadius: 4,
    boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
    boxSizing: 'border-box',
    color: '#fff',
    cursor: 'pointer',
    display: 'inline-flex',
    fontWeight: 500,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: '0.875rem',
    justifyContent: 'center',
    letterSpacing: 'normal',
    minHeight: 36,
    minWidth: 64,
    outline: 'none',
    padding: '8px 16px',
    position: 'relative',
    textAlign: 'center',
    textDecoration: 'none',
    textIndent: 0,
    textShadow: 'none',
    userSelect: 'none',
    verticalAlign: 'middle',
    // -webkit-appearance: none;
    // -webkit-tap-highlight-color: transparent;
    wordSpacing: 'normal',

    transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',


    ////
    '&:hover': {
      textDecoration: 'none',
      // lbackgroundColor: fade(theme.palette.text.primary, theme.palette.action.hoverOpacity),
      // backgroundColor: 'rgba(63, 81, 181, 0.1)',
      // backgroundColor: '#3848a2',
      backgroundColor: '#324090',
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
      '&$disabled': {
        backgroundColor: 'transparent',
      },
    },
    '&$disabled': {
      color: theme.palette.action.disabled,
    },
    '&:after': {
      content: '""',
      // background: '#90EE90',
      background: 'yellow',
      display: 'block',
      position: 'absolute',
      paddingTop: '300%',
      paddingLeft: '350%',
      marginLeft: '-20px!important',
      marginTop: '-120%',
      opacity: 0,
      transition: 'all 1s',
    },


    ////

  }
})

export default injectSheet(styles)(Button)