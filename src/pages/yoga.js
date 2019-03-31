import Footer from '../components/footer';
import Grid from '@material-ui/core/Grid';
import Image from '../components/images/studio'
import Layout from '../components/layout'
import React from 'react'
import SEO from '../components/seo'
import TexturedSection from '../components/textured-section';
import withRoot from '../utils/with-root';
import { Paper } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import { YogaCalendar } from '../components/mind-body-widgets';

const Information = withStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 1280,
    margin: '0 auto',
    minHeight: 100
  },
  paper: {
    position: 'relative',
    margin: '3em auto'
  }
}))(({ classes }) => (
  <Grid container className={classes.root}>
    <Grid item xs={12}>
      <Grid container justify="center">
        <Grid item xs={12} md={12}>
          <Paper className={classes.paper}>
            <YogaCalendar />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
));

const EventRentalPage = () => (
  <Layout>
    <SEO title="South Seattle Fitness Yoga" />
    <div style={{
      position: 'relative',
      overflow: 'hidden',
      height: 250,
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
      <Grid container justify="center">
        <Grid item style={{
          maxWidth: 800,
          padding: 45,
          fontSize: 20,
          textAlign: 'center'
        }}>
          <h2>Yoga</h2>
          <p>South Seattle Fitness offers calming Hatha Slow Flow and breath-led Vinyasa Flow classes in our beautiful studio. Increase your flexibility and strength, release tension, improve balance, and calm and steady the mind.</p> 
          <p
            style={{
              fontWeight: 'bold',
              color: 'inherit',
              textDecoration: 'none',
              marginBottom: 0
            }}
          >
            Classes are for all abilities and levels. Your first class is free. Sign up today!
          </p>
        </Grid>
      </Grid>
    </TexturedSection>
    <Information />
    <Footer />
  </Layout>
);


export default withRoot(EventRentalPage);
