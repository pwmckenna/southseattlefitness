import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import * as COLORS from '../utils/colors';
import Header from './header'
import './layout.css'

const theme = createMuiTheme();

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
      <ThemeProvider theme={theme}>
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
            borderBottom: `2px solid ${COLORS.GREY}`
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
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
