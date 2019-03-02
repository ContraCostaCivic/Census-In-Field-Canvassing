import React from 'react'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import withBreakpoint from 'ui/withBreakpoint'
import classNames from 'classnames'
// import { withStyles } from '@material-ui/core/styles'
// import { Paper, withWidth } from '@material-ui/core'
// import red from '@material-ui/core/colors/red'
// import green from '@material-ui/core/colors/green'
// import purple from '@material-ui/core/colors/purple'
// import yellow from '@material-ui/core/colors/yellow'
// import grey from '@material-ui/core/colors/grey'

class Breakpoint extends React.Component {

  state = {
    position: 'top',
  }

  positionClick = (e) => {
    this.setState({ position: e.target.name })
  }

  render() {
    const { classes, width, breakpoint } = this.props
    const clsNames = classNames(
      {
        [this.props.classes.root]: true,
        [this.props.classes.positionFixedTop]: this.state.position === 'top',
        [this.props.classes.positionFixedBottom]: this.state.position === 'bottom',
      },
      [classes.root]
    )
    return (
      <div className={clsNames}>
        <div className={classes.width}>
          <button className={classes.widthSize}>{breakpoint} : {width}</button>
        </div>
        <div className={classes.buttons}>
          <button name='top' className={classes.button} onClick={this.positionClick}>Top</button>
          <button name='bottom' className={classes.button} onClick={this.positionClick}>Bottom</button>
        </div>
      </div>
    )
  }

}

export const styles = theme => {

  return {
    root: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      boxSizing: 'border-box', // Prevent padding issue with the Modal and fixed positioned AppBar.
      zIndex: 99,
      flexShrink: 0,
      textAlign: 'center',
      margin: 0,
      [theme.breakpoints.only('xs')]: {
        backgroundColor: 'red',
      },
      [theme.breakpoints.only('sm')]: {
        backgroundColor: 'green',
      },
      [theme.breakpoints.only('md')]: {
        backgroundColor: 'blue',
      },
      [theme.breakpoints.only('lg')]: {
        backgroundColor: 'orange',
      },
      [theme.breakpoints.only('xl')]: {
        // backgroundColor: 'purple',
      },
    },
    positionFixedTop: {
      position: 'fixed',
      top: 0,
      left: 'auto',
      right: 0,
    },
    positionFixedBottom: {
      position: 'fixed',
      bottom: 0,
      left: 'auto',
      right: 0,
    },
    width: {
      flexBasis: '10%',
    },
    button: {
      marginRight: 8,
      marginLeft: 8,
      fontSize: 10,
      borderWidth: 3,
    },
    widthSize: {
      fontSize: 12,
      color: 'black',
    },
  }
}


export default compose(
  withBreakpoint,
  injectSheet(styles),
)(Breakpoint)
