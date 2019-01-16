import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header
          siteTitle={data.site.siteMetadata.title}
          style={{
            backgroundColor: 'white',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '5em',
            zIndex: 1,
            borderBottom: '1px solid #222'
          }}
        />
        <div
          style={{
            margin: `5em auto 0`,
            maxWidth: `100%`
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
