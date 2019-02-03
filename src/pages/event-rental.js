import Footer from '../components/footer';
import Grid from '@material-ui/core/Grid';
import Image from '../components/images/studio'
import Layout from '../components/layout'
import React from 'react'
import SEO from '../components/seo'
import Schedule from '../components/event-calendar';
import TexturedSection from '../components/textured-section';
import withRoot from '../utils/with-root';

const EventRentalPage = () => (
  <Layout>
    <SEO title="South Seattle Fitness Event Rental" />
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
          <h2>Event Rentals</h2>
          {/* <p>Home of FIT4MOM South Seattle, regular yoga classes and occasional event rentals.</p> */}
        </Grid>
      </Grid>
    </TexturedSection>
    <div style={{
      margin: '2em auto',
      width: '100%',
      maxWidth: 300,
      minHeight: 100
    }}>
      <Schedule />
    </div>
    <Footer />
  </Layout>
);

export default withRoot(EventRentalPage)
