import Grid from '@material-ui/core/Grid';
import Map from '../components/map';
import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { withStyles } from "@material-ui/core/styles";
import TexturedSection from '../components/textured-section';
import * as COLORS from '../utils/colors';

const ContactLink = withStyles(theme => ({
    link: {
        textDecoration: 'none',
        color: COLORS.WHITE,
        '&:hover': {
            color: COLORS.LIGHT_GREY
        },
        [theme.breakpoints.down('xs')]: {
            paddingTop: '1em',
            display: 'block'
        }
    }
}))(({ classes, ...props }) => (
    <OutboundLink className={classes.link} {...props} />
));


export default withStyles(theme => ({
    name: {
        [theme.breakpoints.up('sm')]: {
            paddingLeft: '1em'
        }
    },
    footer: {
        margin: '0em auto',
        padding: '2em 5em',
        fontWeight: 'bold',
        color: COLORS.WHITE,
        [theme.breakpoints.down('xs')]: {
            padding: '2em'
        }
    },
    link: {
        padding: '0.5em 0'
    }
}))(({ classes }) => (
    <TexturedSection className={classes.footer}>
        <Grid container justify="center" spacing={16}>
            <Grid item >
                <h3>Contact South Seattle Fitness</h3>
                <div className={classes.link}><ContactLink href="mailto:southseattlefitness@gmail.com">southseattlefitness@gmail.com</ContactLink></div>
                <div className={classes.link}><ContactLink href="tel:7143817969">(714) 381-7969</ContactLink><span className={classes.name}>CAITLIN IBARRA</span></div>
                <div className={classes.link}><ContactLink href="tel:2069108049">(206) 910-8049</ContactLink><span className={classes.name}>RACHEL GARCIA</span></div>
            </Grid>
            <Grid item>
                <Map />
            </Grid>
        </Grid>
    </TexturedSection >
));