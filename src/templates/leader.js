import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import ReactHtmlParser from 'react-html-parser'
import CommonBanner from '../components/CommonBanner/CommonBanner'
import LeadersCard from '../components/LeadersCard'
import TemplateWrapper from '../components/Layout'
import GetInTouch from '../components/GetInTouch/GetInTouch'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
const LeaderWrapper = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  img,
  ul {
    margin-top: 20px;
    li {
      position: relative;
      padding-left: 28px;
      margin-top: 10px;
      &:before {
        position: absolute;
        content: '';
        left: 0;
        top: 14px;
        width: 13px;
        height: 3px;
        background-color: #142270;
      }
    }
  }
  h6 {
    margin-top: 40px;
  }
`

export const PageTemplate = ({ content, leaders, leader, singleLeader }) => {
  const leaderImage = getImage(singleLeader.acf.main_image.localFile)

  return (
    <main>
      <CommonBanner
        badge
        image={singleLeader.acf.image.localFile.childImageSharp.fluid.src}
        title="Leadership"
        subHeading={singleLeader.acf.sub_heading}
        description={singleLeader.acf.description}
      />
      <div className="personal_details_wrapper section_padd pb-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-11">
              <div className="personal_details text-center">
                <GatsbyImage 
                image={leaderImage}
                className="leader_img"
                />
                {/* <img
                  src={
                    leader.featured_media.localFile.childImageSharp.fluid.src
                  }
                  className="leader_img"
                  alt=""
                /> */}

                <h5 className="mt_20">{ReactHtmlParser(leader.title)}</h5>

                <div className="social_icon mt_25">
                  {leader.acf.social_links.twitter &&
                    <a href={leader.acf.social_links.twitter} target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                  }
                  {leader.acf.social_links.facebook &&
                    <a href={leader.acf.social_links.facebook} target="_blank">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  }
                </div>
                <LeaderWrapper dangerouslySetInnerHTML={{ __html: content }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="leader_area section_padd">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb_15">
              <h2 className="title">Our Leaders</h2>
            </div>
            {leaders &&
              leaders.map(leader => {
                return (
                  <LeadersCard
                    key={leader.id}
                    socialLinks={leader.acf.social_links}
                    imgLink={leader.slug}
                    title={leader.title}
                    slug={`/${leader.slug}`}
                    image={
                      leader.featured_media.localFile &&
                      leader.featured_media.localFile.childImageSharp.fluid.src
                    }
                  />
                )
              })}
          </div>
        </div>
      </div>
    </main>
  )
}

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const Leader = ({ data }) => {
  const { wordpressWpLeaders: leader, wordpressWpTestimonials: testi } = data
  return (
    <TemplateWrapper>
      <Helmet title={` Verinite | Leadership`} />
      <PageTemplate
        content={leader.content}
        leader={leader}
        leaders={data.allWordpressWpLeaders.nodes}
        // testimonialData={data.allWordpressWpTestimonials.nodes}
        singleLeader={leader}
      />
      <GetInTouch />

    </TemplateWrapper>
  )
}

export default Leader

export const leaderQuery = graphql`
  query LeaderPage($id: String!) {
    wordpressWpLeaders(id: { eq: $id }) {
      acf {
        description
        sub_heading
        social_links {
          facebook
          twitter
        }
        main_image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        image {
          localFile {
            childImageSharp {
              fluid(quality: 90) {
                src
              }
            }
          }
        }
      }
      title
      slug
      
      featured_media {
        localFile {
          childImageSharp {
            fluid(quality: 90) {
              src
              srcSet
              srcSetWebp
              srcWebp
              tracedSVG
            }
          }
        }
      }
      content
    }
    allWordpressWpLeaders {
      nodes {
        acf {
          description
          sub_heading
          social_links {
            facebook
            twitter
          }
          image {
            localFile {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
        title
        id
        slug
        featured_media {
          localFile {
            childImageSharp {
              fluid(quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  
  }
`
