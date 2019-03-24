import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import * as COLORS from '../utils/colors';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import cx from 'classnames';

export default withStyles(theme => ({
  root: {
    background: COLORS.TEAL,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.75em'
    },
    margin: 0,
    fontWeight: 500
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: COLORS.WHITE,
    textDecoration: 'none'
  },
  button: {
    color: COLORS.WHITE,
    textDecoration: 'none'
  },
  inlineLink: {
    marginLeft: 20,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  },
  dropdownLink: {
    margin: '0 auto',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    },
  }
}))(({ style, classes, siteTitle }) => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography variant="h5" color="inherit" className={classes.title}>
          <Link to="/" className={classes.link}>{siteTitle}</Link>
        </Typography>
        
        <OutboundLink className={cx(classes.button, classes.inlineLink)} href="https://southseattle.fit4mom.com/classes">
          <Button color="inherit">FIT4MOM</Button>
        </OutboundLink>
        <Link to="/yoga" className={cx(classes.button, classes.inlineLink)}>
          <Button color="inherit">Yoga</Button>
        </Link>
        <Link to="/event-rental" className={cx(classes.button, classes.inlineLink)}>
          <Button color="inherit">Event Rentals</Button>
        </Link>

        {open || <ExpandMore className={classes.dropdownLink} onClick={() => setOpen(true)} />}
        {open && <ExpandLess className={classes.dropdownLink} onClick={() => setOpen(false)} />}
      </Toolbar>
      {open && (
        <>
          <Toolbar className={classes.dropdownLink}>
            <OutboundLink className={classes.button} href="https://southseattle.fit4mom.com/classes">
              <Button color="inherit">FIT4MOM</Button>
            </OutboundLink>
          </Toolbar>
          <Toolbar className={classes.dropdownLink}>
            <Link to="/yoga" className={classes.button}>
              <Button color="inherit">Yoga</Button>
            </Link>
          </Toolbar>
          <Toolbar className={classes.dropdownLink}>
            <Link to="/event-rental" className={classes.button}>
              <Button color="inherit">Event Rentals</Button>
            </Link>
          </Toolbar>
        </>
      )}
    </AppBar>
  );
});
