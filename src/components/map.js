import React from 'react';
import { withStyles } from '@material-ui/core';
export default withStyles(theme => ({
    map: {
        filter: 'grayscale(100%)'
    }
}))(({ classes }) => (
    <iframe
        className={classes.map}
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21544.850187618442!2d-122.30880274913119!3d47.54626033307849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549041fabf65b75d%3A0xc922b1df176b174d!2s6300+Beacon+Ave+S%2C+Seattle%2C+WA+98108!5e0!3m2!1sen!2sus!4v1549171444932"
        width="400"
        height="300"
        frameBorder="0"
        style={{ border: '2px solid #aaa' }}
        allowFullScreen />
));
