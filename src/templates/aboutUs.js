import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import CommonBanner from '../components/CommonBanner/CommonBanner'
import GetInTouch from '../components/GetInTouch/GetInTouch'

import QuoteBox from '../components/QuoteBox/QuoteBox'
import LeadersCard from '../components/LeadersCard'
import TemplateWrapper from '../components/Layout'
import CoreValue from '../components/CoreValue'
import Tabs from "../components/Tabs/tabs";
import TabPane from "../components/Tabs/tab-panel";
import { graphql } from 'gatsby'
import styled from 'styled-components'

const LeaderWrapper = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-size: 20px;
    letter-spacing: .5px;
    line-height: 31px;
    margin-top: 20px;
  },
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
export const PageTemplate = ({ acf, title, leaders }) => {
  return (
    <main>
      <CommonBanner
        badge
        align="left"
        title={title}
        aboutUs={true}
        subHeading={acf.second_heading}
        description={acf.description}
        years_of_service={acf.years_of_service}
        trustedclientCount={acf.clients}
        countriesCount={acf.location}
        employeeCount={acf.employees}
        image={
          acf.image.localFile && acf.image.localFile.childImageSharp.fluid.src
        }
        foundedWrapper
      />
      <div className="paving_area section_padd pb-0">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb_15">
              <h2 className="title">{acf.overview.heading}</h2>
            </div>
            <div className="col-12 text-center mb_15">
            <LeaderWrapper 
              dangerouslySetInnerHTML={{__html:acf.overview.text}}
              data-aos="fade-up"
              data-aos-delay="600"
            />
            </div>
          </div>
        </div>
      </div>
      <CoreValue
        title={acf.our_core_values.heading}
        image={
          acf.our_core_values.image.localFile &&
          acf.our_core_values.image.localFile.childImageSharp.fluid.src
        }
      />
      <div className="leader_area section_padd light_bg">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb_15">
              <h2 className="title">Our Leadership Team</h2>
            </div>
            {leaders.map(leader => {
              return (
                <LeadersCard
                  key={leader.id}
                  socialLinks={leader.acf.social_links}
                  title={leader.title}
                  image={
                    leader.featured_media.localFile &&
                    leader.featured_media.localFile.childImageSharp.fluid.src
                  }
                  slug={`/${leader.slug}`}
                />
              )
            })}
          </div>
        </div>
      </div>
      {/* global- area */}
      <div className="global_area section_padd">
        <div className="container">
          <div className="row text-center">
            <div className="col-12 mb_45">
              <h2 className="title">Our Global Presence</h2>
            </div>
            <div className="col-12">
              <Tabs custom="issuing">
                <TabPane name="Offices" key="0">
                  <div className="tab-pane fade show active mt_50" id="offices">
                    <img
                      src={
                        acf.global_presence.office_image.localFile.childImageSharp
                          .fixed.src
                      }
                      className="img-fluid"
                      alt="..."
                    />
                  </div>
                </TabPane>
                <TabPane name="Clients" key="0">
                  <div className="tab-pane fade show active mt_50" id="offices">
                    <img
                      src={
                        acf.global_presence.client_image.localFile.childImageSharp
                          .fixed.src
                      }
                      className="img-fluid"
                      alt="..."
                    />
                  </div>
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      <QuoteBox
        quoteTitle={acf.happy_team.heading}
        btntxt={acf.happy_team.button.title}
        links={acf.happy_team.button.url}
      sideimg={acf.happy_team.image.localFile.childImageSharp.fixed.src}
      />
    </main>
  )
}

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const AboutUs = ({ data }) => {
  const { wordpressPage: page } = data

  return (
    <TemplateWrapper>
      <Helmet title={`Verinite| ${page.title} `} />
      <PageTemplate
        acf={page.acf}
        title={page.title}
        leaders={data.allWordpressWpLeaders.nodes}
      />
      <GetInTouch />

    </TemplateWrapper>
  )
}

export default AboutUs

export const pageQuery = graphql`
  query AboutUs($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      acf {
        heading
        sub_heading
        second_heading
        description
        image {
          localFile {
            childImageSharp {
              fluid(quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        know_more {
          button_link {
            title
            url
            target
          }
        }
        years_of_service
        employees
        clients
        location
        our_core_values {
          heading
          image {
            localFile {
              childImageSharp {
                fluid(quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        global_presence {
          heading
          office_image {
            localFile {
              childImageSharp {
                fixed(quality: 90, width: 1000, height: 480) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          client_image {
            localFile {
              childImageSharp {
                fixed(quality: 90, width: 1000, height: 480) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
        know_more {
          heading
          sub_heading
          image {
            localFile {
              childImageSharp {
                fixed(quality: 90) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          button_link {
            title
            url
            target
          }
        }
        overview {
          heading
          text
        }
        happy_team {
          heading
          button {
            title
            url
          }
          image {
            id
            source_url
            localFile {
              childImageSharp {
                fixed {
                  src
                }
              }
            }
          }
        }
      }
    }
    allWordpressWpLeaders {
      nodes {
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
        acf {
          social_links {
            facebook
            twitter
          }
        }
      }
    }
  }
`
