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
import Calendar from '../components/yoga-calendar';

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
  <Grid container className={classes.root} spacing={16}>
    <Grid item xs={12}>
      <Grid container justify="center" spacing={16}>
        <Grid item xs={12} md={12}>
          <Paper className={classes.paper}>
            <Calendar />
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
      <Grid container justify="center" spacing={16}>
        <Grid item style={{
          padding: '35px 0 15px',
          textAlign: 'center'
        }}>
          <h2>Yoga</h2>
          {/* <p>Home of FIT4MOM South Seattle, regular yoga classes and occasional event rentals.</p> */}
        </Grid>
      </Grid>
    </TexturedSection>
    <Information />
    <Footer />
  </Layout>
);


export default withRoot(EventRentalPage);
