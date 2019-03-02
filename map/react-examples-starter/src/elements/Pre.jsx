import React from 'react'
import injectSheet from 'react-jss'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/vsDarkPlus'

const Pre = ({ code, classes }) => (
  <Highlight {...defaultProps} theme={theme} code={code} language="jsx">
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={classes.pre} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            <span className={classes.lineNo}>{i + 1}</span>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
)

const styles = theme => {
  return({
    wrapper: {
      fontFamily: 'sans-serif',
      textAlign: 'center',
    },
    pre: {
      textAlign: 'left',
      margin: '1em 0',
      padding: '0.5em',
      '&.token-line': {
        lineHeight: '1.3em',
        height: '1.3em',
      },
    },
    lineNo: {
      display: 'inline-block',
      width: '2em',
      userSelect:' none',
      opacity: '0.3',
    }
  })
}

export default injectSheet(styles)(Pre)
