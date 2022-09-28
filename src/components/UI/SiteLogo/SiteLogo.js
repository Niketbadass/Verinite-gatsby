import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const SiteLogo = () => {
  return (
    <StaticQuery
      query={graphql`
        query headerLogo {
          allWordpressAcfOptions {
            nodes {
              options {
                logo {
                  source_url
                  localFile {
                    childImageSharp {
                      gatsbyImageData(quality: 90, layout: CONSTRAINED)
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const { localFile } = data.allWordpressAcfOptions.nodes[0].options.logo
        const image = localFile && getImage(localFile)
        return (
          <Link to="/" className="site-logo-link">
            <GatsbyImage image={image} className="site-logo" alt="" />
          </Link>
        )
      }}
    />
  )
}
export default SiteLogo
