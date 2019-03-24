import { Link } from 'gatsby';
import EventsImage from '../components/images/events';
import Fit4MomImage from '../components/images/fit4mom';
import Footer from '../components/footer';
import Grid from '@material-ui/core/Grid';
import Image from '../components/images/studio'
import Layout from '../components/layout'
import Paper from '@material-ui/core/Paper';
import React from 'react'
import SEO from '../components/seo'
import TexturedSection from '../components/textured-section';
import YogaImage from '../components/images/yoga';
import withRoot from '../utils/with-root';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { withStyles } from "@material-ui/core/styles";
import * as COLORS from '../utils/colors';
import { use as usePaperform, show as showPaperform } from '../utils/paperform';

const Programs = withStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 1280,
    margin: '0 auto'
  },
  paper: {
    position: 'relative',
    height: 300,
    width: 300,
    margin: '3em auto'
  },
  link: {
    position: 'relative',
    display: 'block',
    height: '100%',
    width: '100%',
    color: 'white',
    textDecoration: 'none',
  },
  text: {
    position: 'absolute',
    top: '1.5em',
    left: '1.5em',
    right: '1.5em',
    bottom: '1.5em',
    border: '2px solid white',
    padding: '1em',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    fontSize: '1.3em',
    [theme.breakpoints.up('md')]: {
      '&:hover': {
        backgroundColor: `${COLORS.TEAL}aa`,
        '& .before': {
          display: 'none'
        },
        '& .after': {
          display: 'inherit'
        }
      },
      '& .after': {
        display: 'none'
      }
    }
  },
  image: {
    width: '100%',
    height: '100%'
  }
}))(({ classes }) => (
  <Grid container className={classes.root} spacing={16}>
    <Grid item xs={12}>
      <Grid container justify="center" spacing={16}>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            <OutboundLink href="https://southseattle.fit4mom.com/classes" className={classes.link}>
              <Fit4MomImage className={classes.image} />
              <div className={classes.text}>
                <div className="before">
                  <h3>FIT4MOM</h3>
                </div>
                <div className="after">
                  <h4>HIIT</h4>
                  <h4>Pre/Post-Natal</h4>
                  <h4>Stroller Strides</h4>
                </div>
              </div>
            </OutboundLink>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            <Link to="/yoga" className={classes.link}>
              <YogaImage className={classes.image} />
              <div className={classes.text}>
                <div className="before">
                  <h3>Yoga</h3>
                </div>
                <div className="after">
                  <h4>Hatha Slow Flow</h4>
                  <h4>Vinyasa Flow</h4>
                </div>
              </div>
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            <Link to="/event-rental" className={classes.link}>
              <EventsImage className={classes.image} />
              <div className={classes.text}>
                <div className="before">
                  <h3>Event Rental</h3>
                </div>
                <div className="after">
                  <h4>Birthday Party?</h4>
                  <h4>Baby Shower?</h4>
                  <h4>Other?</h4>
                </div>
              </div>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
));

const IndexPage = () => {
  usePaperform();
  return (
    <Layout>
      <SEO title="South Seattle Fitness" />
      <div style={{
        position: 'relative',
        overflow: 'hidden',
        height: 360,
        display: 'grid',
        alignItems: 'center',
        justifyItems: 'center'
      }}>
        <Image style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          zIndex: -1,
        }} />
      </div>
      <TexturedSection>
        <Grid container justify="center" spacing={16}>
          <Grid item style={{
            maxWidth: 800,
            padding: 45,
            fontSize: 20,
            textAlign: 'center'
          }}>
            <h2>Welcome to South Seattle Fitness</h2>
            <p>South Seattle Fitness is your place to thrive through pre-natal, post-natal, and HIIT FIT4MOM classes, flowing yoga practices, wellness workshops, and community events.</p>
            <a
              href="#"
              onClick={e => {
                e.preventDefault();
                showPaperform();
              }}
              style={{
                fontWeight: 'bold',
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              Your first class is free. Check us out today!
            </a>
          </Grid>
        </Grid>
      </TexturedSection>
      <Programs />
      <Footer />
    </Layout>
  );
};

export default withRoot(IndexPage);
