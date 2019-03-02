import React from 'react'
import injectSheet from 'react-jss'
import Section from 'elements/Section'
import iMeetup from './media/meetup-swarm.svg'
import iGithub from './media/github-octocat.svg'
import iFacebook from './media/facebook.svg'
import iSlack from './media/slack.svg'
import iContact from './media/contact.svg'
import Text from 'elements/Text'

const meetupURL = 'https://www.meetup.com/trivalleycoders/'
const gitHubURL = 'https://github.com/klequis'
const facebookURL = 'https://www.facebook.com/groups/free.code.camp.sanramon/'
const slackURL = 'https://join.slack.com/t/trivalleycoders/shared_invite/enQtMjk2NDY3NDAwMjI1LWU0YjFjNjE5MDgwYzYwYmUwMWJlNjk1NDU4YmI5ZmZjZGU0ZDcwY2E2Y2RlNmU0MWFlZTUyODFkYzM1NGVlYTQ'

const Footer = ({ classes }) => {
  return (
    <Section
      dark
      noPadding
      footer
    >
      <div className={classes.wrapper}>
        <div className={classes.title}>
          <Text h2 noMargin>Carl Becker</Text>
        </div>
        <div className={classes.contact}>
          <img src={iContact} className={classes.contactIcon} alt='contact carl' />
          <span className={classes.contactEmail}>carl@trivalleycoders.com</span>
        </div>

        <div className={classes.links}>
          <div className={classes.linkRow}>
            <a href={meetupURL}><img src={iMeetup} className={classes.logo} alt='meetup logo' /></a>
            <a href={gitHubURL}><img src={iGithub} className={classes.logo} alt="klequis' github" /></a>
          </div>
          <div className={classes.linkRow}>
            <a href={facebookURL}><img src={iFacebook} className={classes.logo} alt='tri valley coders facebook' /></a>
            <a href={slackURL}><img src={iSlack} className={classes.logo} alt='tri valley coders slack' /></a>
          </div>
        </div>

      </div>
    </Section>
  )
}

const styles = theme => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
    alignItems: 'center',
    padding: '1.75rem 0'
  },
  title: {
    flexBasis: '33.3333%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1.5rem',
    [theme.breakpoints.up('md')]: {
      marginBottom: 0,
    },

  },
  links: {
    // backgroundColor: 'red',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 425,
    [theme.breakpoints.up('md')]: {

      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'space-between',
      flexBasis: '33.3333%',
    }
  },
  linkRow: {
    // width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',

    margin: '0.5rem 0',
    [theme.breakpoints.up('md')]: {
      // display: 'flex',
      // justifyContent: 'space-around',
      // // eslint-disable-next-line
      // justifyContent: 'space-evenly',
      // width: '100%',
      // paddingTop: '0.25rem',
      // paddingBottom: '0.25rem',
    }
  },
  logo: {
    maxHeight: 40,
  },
  contact: {
    display: 'flex',
    flexBasis: '33.3333%',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '2rem',
    [theme.breakpoints.up('md')]: {
      marginBottom: 0,
    },
  },
  contactIcon: {
    maxHeight: 20,
  },
  contactEmail: {
    color: 'white',
    fontWeight: 500,
    marginTop: '1rem',
  },
})

export default injectSheet(styles)(Footer)
