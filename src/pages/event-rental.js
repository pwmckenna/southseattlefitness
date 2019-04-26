import Footer from '../components/footer'
import Grid from '@material-ui/core/Grid'
import Image from '../components/images/home-background'
import Layout from '../components/layout'
import React from 'react'
import SEO from '../components/seo'
import { EventCalendar } from '../components/mind-body-widgets'
import TexturedSection from '../components/textured-section'
import withRoot from '../utils/with-root'

const EventRentalPage = () => (
  <Layout>
    <SEO title="South Seattle Fitness Event Rental" />
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        height: '30vh',
        display: 'grid',
        alignItems: 'center',
        justifyItems: 'center',
      }}
    >
      <Image
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          zIndex: -1,
        }}
      />
    </div>
    <TexturedSection>
      <Grid container justify="center">
        <Grid
          item
          style={{
            padding: 45,
            textAlign: 'center',
            margin: '0 auto',
            width: '80%',
            fontSize: 20,
            maxWidth: 800,
            minHeight: 100,
          }}
        >
          <h2>Event Rentals</h2>
          <p>
            We are now offering our beautiful new studio space for event
            rentals! Located on the corner of Beacon and Graham on Beacon Hill,
            our space is easy to get to and has just what you need for your
            party, including:
          </p>
          <ul
            style={{
              width: '80%',
              maxWidth: 500,
              textAlign: 'left',
              margin: '0 auto',
            }}
          >
            <li style={{ listStyle: 'none' }}>
              Large (750 square feet) open room with bamboo floors and tons of
              light
            </li>
            <li style={{ listStyle: 'none' }}>
              Outdoor yard (950 square feed) with artificial grass and strings
              of lights
            </li>
            <li style={{ listStyle: 'none' }}>
              A kitchenette with microwave, mini-fridge and freezer
            </li>
            <li style={{ listStyle: 'none' }}>
              A living room space with love seat and chairs
            </li>
            <li style={{ listStyle: 'none' }}>Maximum capacity of 60</li>
          </ul>
        </Grid>
      </Grid>
    </TexturedSection>
    <div
      style={{
        margin: '2em auto',
        width: '100%',
        maxWidth: 300,
        minHeight: 100,
      }}
    >
      <EventCalendar />
    </div>
    <Footer />
  </Layout>
)

export default withRoot(EventRentalPage)
