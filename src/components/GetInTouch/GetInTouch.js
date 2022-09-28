import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const GetInTouch = () => {
  return (
    <StaticQuery
      query={graphql`
        query getIntouch {
          allWordpressAcfOptions {
            nodes {
              options {
                get_in_touch {
                  button_text
                  link
                  sub_heading
                  title
                }
              }
            }
          }
          file(absolutePath: { regex: "/shape-min/" }) {
            childImageSharp {
              fluid(quality: 90) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      `}
      render={data => {
        const { file: backgroundImage } = data
        return (
          <div className="get_touch">
            {backgroundImage && (
              <Img
                fluid={backgroundImage.childImageSharp.fluid}
                className="background_image"
              />
            )}
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7 mt_30">
                  <h2 className="text-white" data-aos="fade-up">
                    {
                      data.allWordpressAcfOptions.nodes[0].options.get_in_touch
                        .title
                    }
                  </h2>
                  <h6 className="mt_25 text-white" data-aos="fade-up">
                    {
                      data.allWordpressAcfOptions.nodes[0].options.get_in_touch
                        .sub_heading
                    }
                  </h6>
                </div>
                <div
                  className="col-lg-5 text-lg-right mt_30"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  <Link to="/contact-us/" className="button">
                    {
                      data.allWordpressAcfOptions.nodes[0].options.get_in_touch
                        .button_text
                    }
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )
      }}
    />
  )
}

export default GetInTouch
