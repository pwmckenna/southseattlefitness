import EventsImage from '../components/images/events';
import Fit4MomImage from '../components/images/fit4mom';
import Grid from '@material-ui/core/Grid';
import Image from '../components/images/studio'
import Layout from '../components/layout'
import Map from '../components/map';
import Paper from '@material-ui/core/Paper';
import React, { useEffect } from 'react'
import SEO from '../components/seo'
import YogaImage from '../components/images/yoga';
import background from '../images/background.jpeg';
import pattern from '../images/texture.png';
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme, withStyles } from "@material-ui/core/styles";
import { grey } from '@material-ui/core/colors';
import Schedule from '../components/yoga-calendar';
import withRoot from '../utils/with-root';

const theme = createMuiTheme();

const transparent = color => `${color}99`;

const COLORS = {
    WHITE: '#fff',
    GOLD: '#ffca17',
    TEAL: '#3fcfd5',
    GREY: '#a1a3a5',
    DARK_GREY: '#616365',
    BROWN: '#28100099',
    BLACK: '#333'
};

const STUDIO_CALENDAR_LINK = 'https://clients.mindbodyonline.com/classic/ws?studioid=693989&stype=-7&sView=day&sLoc=0';
const YOGA_CALENDAR_LINK = STUDIO_CALENDAR_LINK;

const Button = ({ children, style, ...props }) => (
    <OutboundLink href="#" style={{
        textDecoration: 'none',
        textTransform: 'uppercase',
        padding: '14px 42px',
        borderRadius: '2px 30px',
        letterSpacing: '.05em',
        fontSize: 14,
        lineHeight: 1.6,
        fontStyle: 'normal',
        fontWeight: 700,
        ...style
    }} {...props}>
        {children}
    </OutboundLink>
);

const TealButton = withStyles(
    theme => ({
        button: {
            color: COLORS.WHITE,
            backgroundColor: transparent(COLORS.TEAL),
            '&:hover': {
                backgroundColor: COLORS.TEAL
            }
        }
    })
)(({ children, classes, ...props }) => (
    <Button className={classes.button} {...props}>
        {children}
    </Button>
));

const TexturedSection = ({ style, ...props }) => (
    <div style={{
        backgroundColor: COLORS.TEAL,
        backgroundImage: `url(${pattern})`,
        backgroundPosition: '50% 0',
        backgroundAttachment: 'scroll',
        backgroundSize: 'auto',
        backgroundRepeat: 'repeat',
        borderTop: `2px solid ${COLORS.GREY}`,
        borderBottom: `2px solid ${COLORS.GREY}`,
        ...style
    }} {...props} />
);

const Boxes = ({ children }) => (
    <div style={{
        maxWidth: 1480,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, 1fr)',
        gridColumnGap: 10,
        justifyItems: 'center',
        alignItems: 'center',
        height: 480
    }}>
        {children}
    </div>
);

const Box = ({ children, href }) => (
    <div style={{
        position: 'relative',
        gridRow: '1',
        border: `3px solid ${COLORS.GREY}`,
        width: '15em',
        height: '15em',
    }}>
        <Image style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
        }} />

        <a
            href={href}
            style={{
                width: '100%',
                height: '100%',
                display: 'grid',
                justifyItems: 'center',
                alignItems: 'center',
                textDecoration: 'none',
                color: COLORS.WHITE,
                fontSize: '2em'
            }}
        >
            {children}
        </a>
    </div>
);

const ContactLink = withStyles(theme => ({
    link: {
        textDecoration: 'none',
        color: COLORS.DARK_GREY,
        '&:hover': {
            color: COLORS.BLACK
        },
        [theme.breakpoints.down('xs')]: {
            paddingTop: '1em',
            display: 'block'
        }
    }
}))(({ classes, ...props }) => (
    <OutboundLink className={classes.link} {...props} />
));

const Footer = withStyles(theme => ({
    name: {
        [theme.breakpoints.up('sm')]: {
            paddingLeft: '1em'
        }
    },
    footer: {
        margin: '0em auto',
        padding: '2em 5em',
        fontWeight: 'bold',
        color: COLORS.DARK_GREY,
        [theme.breakpoints.down('xs')]: {
            padding: '2em'
        }
    }
}))(({ classes }) => (
    <TexturedSection className={classes.footer}>
        <Grid container justify="center" spacing={16}>
            <Grid item alignContent="center" >
                <h3>Contact South Seattle Fitness</h3>
                <div>
                    <ContactLink href="mailto:southseattlefitness@gmail.com">southseattlefitness@gmail.com</ContactLink>
                </div>
                <div><ContactLink href="tel:7143817969">(714) 381-7969</ContactLink><span className={classes.name}>CAITLIN IBARRA</span></div>
                <div><ContactLink href="tel:2069108049">(206) 910-8049</ContactLink><span className={classes.name}>RACHEL GARCIA</span></div>
            </Grid>
            <Grid item alignContent="center">
                <Map />
            </Grid>
        </Grid>
    </TexturedSection >
));

const EventRentalPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <SEO title="SouthSeattleFitness" keywords={['seattle', 'fitness', 'studio', 'hiit', 'stroller strides', 'yoga', 'fit4mom', 'event rental', 'event space', 'party rental']} />
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
                <TexturedSection style={{
                    height: 100
                }} />
                <div style={{
                    margin: '2em auto',
                    width: '100%',
                    maxWidth: 800,
                    minHeight: 100
                }}>
                    <Schedule />
                </div>
                <Footer />
            </Layout>
        </ThemeProvider>
    );
};

export default withRoot(EventRentalPage);