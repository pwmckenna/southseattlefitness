import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, keywords, title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                    name: `keywords`,
                    content: keywords.join(`, `),
                  }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [
    'south seattle fitness',
    'south seattle fitness beacon hill',
    'south seattle fitness center',
    'southseattlefitness',
    'women\'s workout',
    'south seattle yoga',
    'fitness for women',
    'hiit classes',
    'pre-natal',
    'post-natal',
    'fitness for moms',
    'group exercise classes',
    'cardio classes',
    'fitness classes',
    'event rental',
    'event space',
    'fit4mom',
    'fit4mom south seattle',
    'fit4mom beacon hill',
    'fit4mom seward park',
    'fitness',
    'hiit',
    'party rental',
    'seattle',
    'stroller strides',
    'studio',
    'yoga',
    'yoga near me'
  ]
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
