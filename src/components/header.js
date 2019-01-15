import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ style, siteTitle }) => (
  <div
    style={{
      color: '#616365',
      background: `#ffffff`,
      ...style
    }}
  >
    <div
      style={{
        height: '100%',
        display: 'grid',
        alignItems: 'center'
      }}
    >
      <h1 style={{ margin: 0, fontWeight: 500 }}>
        <Link
          to="/"
          style={{
            paddingLeft: 56,
            color: `#616365`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

