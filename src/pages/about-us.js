import * as COLORS from '../utils/colors'
import Clickable from '../components/clickable'
import Footer from '../components/footer'
import Grid from '@material-ui/core/Grid'
import Image from '../components/images/home-background'
import Layout from '../components/layout'
import OwnersImage from '../components/images/owners'
import React from 'react'
import SEO from '../components/seo'
import TexturedSection from '../components/textured-section'
import withRoot from '../utils/with-root'
import { use as usePaperform, show as showPaperform } from '../utils/paperform'
import { withStyles } from '@material-ui/core/styles'

const Photos = withStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 1280,
    margin: '0 auto',
    fontSize: 20,
    minHeight: 100,
  },
  paper: {
    position: 'relative',
    margin: '3em auto',
  },
  content: {
    padding: '40px 20px 10px',
  },
  image: {
    border: `4px solid ${COLORS.GREY}`,
  },
}))(({ classes }) => {
  usePaperform()
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid
          container
          justify="center"
          spacing={16}
          className={classes.content}
        >
          <Grid item xs={12} sm={8} md={4}>
            <OwnersImage className={classes.image} />
          </Grid>

          <Grid item xs={12} md={8}>
            <p>
              Rachel and I (Caitlin) are so excited about our beautiful new
              studio! Together with our husbands and four young children among
              us, we bought this building on the corner of Beacon and Graham in
              July of 2018, and our families spent all summer renovating a
              building that was vacant for 12 years. After a lot of love and
              sweat, we proudly opened our beautiful new studio on October 1. As
              long-time residents of Beacon Hill, we are thrilled to be able to
              give back to our community, not only by renovating a space that
              was long-vacant, but by inviting all neighbors to participate in
              community-based fitness and wellness offerings.
            </p>
            <p>
              Our mission is to “create a community space in South Seattle where
              people can come together in fitness and wellness in order to
              discover new possibilities for themselves and new connections with
              others.”
            </p>
            <p>
              Our vision for our space is to “reflect the beauty, power, and
              diversity of our community by helping our members empower
              themselves to find greater strength and limitless possibility.”
            </p>
            <p>
              At South Seattle Fitness, we host a variety of programs. We hold
              yoga classes including Vinyasa Flow and Hatha Slow Flow, open to
              all levels and genders; we host FIT4MOM South Seattle classes,
              nurturing strength in motherhood through pre, postnatal and HIIT
              classes, within a positive and empowering community of women and
              families; Counterpoint Massage has found a new home here in our
              building; and we rent out our beautiful indoor/outdoor space for
              private events.
            </p>
            <p>
              Come on down and join us for yoga and more!{' '}
              <Clickable
                onClick={e => {
                  e.preventDefault()
                  showPaperform()
                }}
                style={{
                  fontWeight: 'bold',
                }}
              >
                Your first class is always free.
              </Clickable>{' '}
              We can’t wait to meet you and welcome you into our space!
            </p>
            <p>See you soon!</p>
            <p>Rachel and Caitlin</p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
})

const AboutUsPage = () => (
  <Layout>
    <SEO title="South Seattle Fitness About Us" />
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
    <TexturedSection />
    <Photos />
    <Footer />
  </Layout>
)

export default withRoot(AboutUsPage)
