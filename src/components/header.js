import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { withStyles } from '@material-ui/core/styles';

const Header = withStyles(theme => ({
  root: {
    color: '#616365',
    background: `#ffffff`
  },
  verticallyCentered: {
    height: '100%',
    display: 'grid',
    alignItems: 'center'
  },
  header: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: 56
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.75em'
    },
    margin: 0,
    fontWeight: 500
  },
  link: {
    color: `#616365`,
    textDecoration: `none`,
    textAlign: 'center'
  }
}))(({ style, classes, siteTitle }) => (
  <div style={style} className={classes.root}>
    <div className={classes.verticallyCentered}>
      <h1 className={classes.header}>
        <Link to="/" className={classes.link}>{siteTitle}</Link>
      </h1>
    </div>
  </div>
));

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

