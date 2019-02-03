import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { withStyles } from '@material-ui/core/styles';

const Header = withStyles(theme => ({
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

  }
}))(({ style, classes, siteTitle }) => (
  <div style={{
    color: '#616365',
    background: `#ffffff`,
    ...style
  }}>
    <div style={{
      height: '100%',
      display: 'grid',
      alignItems: 'center'
    }}>
      <h1 className={classes.header}>
        <Link to="/" style={{
          color: `#616365`,
          textDecoration: `none`,
          textAlign: 'center'
        }}>{siteTitle}</Link>
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

