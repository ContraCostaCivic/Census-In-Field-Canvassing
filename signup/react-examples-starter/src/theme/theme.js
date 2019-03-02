import createBreakpoints from 'theme/createBreakpoints'
const breakpoints = createBreakpoints({})

// const headingFontFamily = '"Lato", sans-serif'
const headingFontFamily = '"Roboto", sans-serif'
const bodyFontFamily = '"Lato", sans-serif'

const theme = {
  anchor: {
    textDecorationLine: 'solid',
    color: 'white',
    // '&:visited': {
    //   color: 'white',
    // },

  },
  palette: {
    action: {
      hoverOpacity: 0.1,
    },
    textColors: [
      {
        name: 'default',
        value: '#fff',
      },
      {
        name: 'blue',
        value: '#005ca8',
      },
      {
        name: 'light',
        value: '#fff'
      },
      {
        name: 'dark',
        value: '#000'
      },
    ]


  },
  breakpoints: {
    keys: breakpoints.keys,
    values: breakpoints.values,
    up: breakpoints.up,
    down: breakpoints.down,
    between: breakpoints.between,
    only: breakpoints.only,
  },
  link: {
    color: '#005ca8',
    textDecoration: 'none',
    // fontWeight: 400,
  },
  section: {
    default: {
      color: '#000',
      backgroundColor: '#fff',
    },
    light: {
      color: '#000',
      backgroundColor: '#fff',
    },
    medium: {
      color: '#000',
      backgroundColor: '#d7d7d7',
    },
    dark: {
      color: '#fff',
      // backgroundColor: '#303030',
      backgroundColor: '#005ca8',
    },
    green: {
      color: '#fff',
      backgroundColor: '#13aa52',
    },
    shadow: {
      light: 'inset 0 1px 0 0 rgba(0, 0, 0, 0.15)',
      dark: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.075)',
    },
    xs: {
      // boxShadow: 'inset 0 1px 0 0 rgba(0, 0, 0, 0.15)',
      paddingTop: '4rem',
      paddingBottom: '4rem',
    },
    md: {
      paddingTop: '4rem',
      paddingBottom: '4rem',
    }

  },
  typography: {
    xs: {
      body: {
        fontFamily: bodyFontFamily,
      },
      caption: {
        fontFamily: bodyFontFamily,
        fontSize: '0.75rem'
      },
      tag: {
        fontFamily: bodyFontFamily,
        fontSize: '0.75rem',
        fontWeight: 700,
        color: '#000',
      },
      h1: {
        fontFamily: headingFontFamily,
        fontSize: '4.0rem',
        // fontSize: '4.4rem',
        lineHeight: 1.2,
        fontWeight: 300,
        textAlign: 'center',
        margin: '0 0 20px 0',
      },
      h2: {
        fontFamily: headingFontFamily,
        fontSize: '2.0rem',
        // fontSize: '2.2rem',
        lineHeight: 1.375,
        fontWeight: 300,
        // letterSpacing: '-0.05em',
        textAlign: 'center',
        // margin: '0 1rem 20px 1rem',
        marginBottom: '1rem',
      },
      h3: {
        fontFamily: headingFontFamily,
        fontSize: '1.25rem',
        // fontSize: '1.375rem',
        lineHeight: 1.375,
        fontWeight: 300,
        // letterSpacing: '-0.05em',
        textAlign: 'center',
      },
      h4: {
        fontFamily: headingFontFamily,
        fontSize: '1.0rem',
        // fontSize: '1.1rem',
        lineHeight: 1.375,
        fontWeight: 300,
        // letterSpacing: '-0.05em',
        textAlign: 'center',
      },
      subtitle1: {
        fontFamily: headingFontFamily,
        fontSize: '1.775rem',
        // fontSize: '1.9525rem',
        lineHeight: 'inherit',
        fontStyle: 'italic',
        marginTop: '-0.65rem',
        marginBottom: '1.5rem',
        textAlign: 'center',
      },
      subtitle2: {
        fontFamily: headingFontFamily,
        fontSize: '1.25rem',
        // fontSize: '1.375rem',
        lineHeight: 1.65,
        fontStyle: 'italic',
        marginTop: '-0.65rem',
        marginBottom: '1.5rem',
        textAlign: 'center',
      },
      subtitle3: {
        fontFamily: headingFontFamily,
        fontSize: '1.1rem',
        // fontSize: '2.1rem',
        lineHeight: 1.65,
        fontStyle: 'italic',
        marginTop: '-0.65rem',
        marginBottom: '1.5rem',
        textAlign: 'center',
      },
    },
    md: {
      body: {
        fontFamily: bodyFontFamily,
      },
      caption: {
        fontFamily: bodyFontFamily,
        fontSize: '0.75rem'
      },
      tag: {
        fontFamily: bodyFontFamily,
        fontSize: '0.75rem',
        fontWeight: 700,
        color: '#000',
      },
      h1: {
        fontFamily: headingFontFamily,
        fontSize: '3.5rem',
        // fontSize: '3.85rem',
        lineHeight: 1.2,
        fontWeight: 300,
        letterSpacing: '-0.05em',
        textAlign: 'left',
      },
      h2: {
        fontFamily: headingFontFamily,
        fontSize: '2.25rem',
        // fontSize: '2.475rem',
        lineHeight: 1.375,
        fontWeight: 300,
        // letterSpacing: '-0.05em',
        textAlign: 'left',
      },
      h3: {
        fontFamily: headingFontFamily,
        fontSize: '1.5rem',
        // fontSize: '1.65rem',
        lineHeight: 1.375,
        fontWeight: 300,
        // letterSpacing: '-0.05em',
        textAlign: 'left',
      },
      h4: {
        fontFamily: headingFontFamily,
        fontSize: '1.1rem',
        // fontSize: '1.21rem',
        lineHeight: 1.375,
        fontWeight: 300,
        // letterSpacing: '-0.05em',
        textAlign: 'left',
      },
      subtitle1: {
        fontFamily: headingFontFamily,
        fontSize: '1.375rem',
        // fontSize: '1.5125rem',
        lineHeight: 'inherit',
        fontStyle: 'italic',
        marginTop: '-0.65rem',
        marginBottom: '1.5rem',
        textAlign: 'left',
      },
      subtitle2: {
        fontFamily: headingFontFamily,
        fontSize: '1.375rem',
        lineHeight: 1.65,
        fontStyle: 'italic',
        marginTop: '-0.65rem',
        marginBottom: '1.5rem',
        textAlign: 'left',
      },
      subtitle3: {
        fontFamily: headingFontFamily,
        fontSize: '1.21rem',
        lineHeight: 1.65,
        fontStyle: 'italic',
        marginTop: '-0.65rem',
        marginBottom: '1.5rem',
        textAlign: 'left',
      },
    },



  },
  spacing: {
    unit: 8,
  },
  borderRadius: 4,
  shadows: [
    'none',
    '0px 1px 3px 0px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
    '0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
    '0px 1px 8px 0px rgba(0, 0, 0, 0.2),0px 3px 4px 0px rgba(0, 0, 0, 0.14),0px 3px 3px -2px rgba(0, 0, 0, 0.12)',
    '0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
    '0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 5px 8px 0px rgba(0, 0, 0, 0.14),0px 1px 14px 0px rgba(0, 0, 0, 0.12)',
    '0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
    '0px 4px 5px -2px rgba(0, 0, 0, 0.2),0px 7px 10px 1px rgba(0, 0, 0, 0.14),0px 2px 16px 1px rgba(0, 0, 0, 0.12)',
    '0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
    '0px 5px 6px -3px rgba(0, 0, 0, 0.2),0px 9px 12px 1px rgba(0, 0, 0, 0.14),0px 3px 16px 2px rgba(0, 0, 0, 0.12)',
    '0px 6px 6px -3px rgba(0, 0, 0, 0.2),0px 10px 14px 1px rgba(0, 0, 0, 0.14),0px 4px 18px 3px rgba(0, 0, 0, 0.12)',
    '0px 6px 7px -4px rgba(0, 0, 0, 0.2),0px 11px 15px 1px rgba(0, 0, 0, 0.14),0px 4px 20px 3px rgba(0, 0, 0, 0.12)',
    '0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0, 0, 0, 0.12)',
    '0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 13px 19px 2px rgba(0, 0, 0, 0.14),0px 5px 24px 4px rgba(0, 0, 0, 0.12)',
    '0px 7px 9px -4px rgba(0, 0, 0, 0.2),0px 14px 21px 2px rgba(0, 0, 0, 0.14),0px 5px 26px 4px rgba(0, 0, 0, 0.12)',
    '0px 8px 9px -5px rgba(0, 0, 0, 0.2),0px 15px 22px 2px rgba(0, 0, 0, 0.14),0px 6px 28px 5px rgba(0, 0, 0, 0.12)',
    '0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0, 0, 0, 0.12)',
    '0px 8px 11px -5px rgba(0, 0, 0, 0.2),0px 17px 26px 2px rgba(0, 0, 0, 0.14),0px 6px 32px 5px rgba(0, 0, 0, 0.12)',
    '0px 9px 11px -5px rgba(0, 0, 0, 0.2),0px 18px 28px 2px rgba(0, 0, 0, 0.14),0px 7px 34px 6px rgba(0, 0, 0, 0.12)',
    '0px 9px 12px -6px rgba(0, 0, 0, 0.2),0px 19px 29px 2px rgba(0, 0, 0, 0.14),0px 7px 36px 6px rgba(0, 0, 0, 0.12)',
    '0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 20px 31px 3px rgba(0, 0, 0, 0.14),0px 8px 38px 7px rgba(0, 0, 0, 0.12)',
    '0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 21px 33px 3px rgba(0, 0, 0, 0.14),0px 8px 40px 7px rgba(0, 0, 0, 0.12)',
    '0px 10px 14px -6px rgba(0, 0, 0, 0.2),0px 22px 35px 3px rgba(0, 0, 0, 0.14),0px 8px 42px 7px rgba(0, 0, 0, 0.12)',
    '0px 11px 14px -7px rgba(0, 0, 0, 0.2),0px 23px 36px 3px rgba(0, 0, 0, 0.14),0px 9px 44px 8px rgba(0, 0, 0, 0.12)',
    '0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0, 0, 0, 0.12)',
  ]
}

export default theme

