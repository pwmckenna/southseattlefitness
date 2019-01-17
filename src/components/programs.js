import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Fit4MomImage from './images/fit4mom';
import YogaImage from './images/yoga';
import EventsImage from './images/events';
import { grey } from '@material-ui/core/colors';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const styles = theme => ({
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        fontSize: '1.3em',
        '&:hover': {
            backgroundColor: 'rgba(63, 207, 213, 0.2)'
        }
    },
    image: {
        width: '100%',
        height: '100%'
    }
});


export default withStyles(styles)(({ classes }) => (
    <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
            <Grid container justify="center" spacing={16}>
                <Grid item xs={12} md={4}>
                    <Paper className={classes.paper}>
                        <OutboundLink href="https://southseattle.fit4mom.com/" className={classes.link}>
                            <Fit4MomImage className={classes.image} />
                            <div className={classes.text}>
                                FIT4MOM Classes
                            </div>
                        </OutboundLink>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper className={classes.paper}>
                        <OutboundLink href="https://www.schedulicity.com/scheduling/SSFM3V" className={classes.link}>
                            <YogaImage className={classes.image} />
                            <div className={classes.text}>
                                Yoga Schedule
                            </div>
                        </OutboundLink>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper className={classes.paper}>
                        <OutboundLink href="https://squareup.com/appointments/book/16c2c6c3-69bb-467d-9220-a0ffbdf0cd91/5Q4RPH7WJTFEC/staff" className={classes.link}>
                            <EventsImage className={classes.image} />
                            <div className={classes.text}>
                                Event Rentals
                            </div>
                        </OutboundLink>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
));
