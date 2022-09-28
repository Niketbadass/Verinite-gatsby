import React from 'react'
import CommonBanner from '../components/CommonBanner/CommonBanner'
import PavingBox from '../components/PavingBox/PavingBox'
import TextBox from '../components/TextBox'
import root2 from '../assets/img/root2.svg'
import CoreValue from '../components/CoreValue'
import TemplateWrapper from '../components/Layout'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import GetInTouch from '../components/GetInTouch/GetInTouch'

export const MissionTemplate = ({ acf, title, page }) => {
  return (
    <main>
      <CommonBanner
        image={
          page.featured_media &&
          page.featured_media.localFile.childImageSharp.fluid.src
        }
        badge
        align="left"
        title={title}
        subHeading={acf.second_heading}
        description={acf.description}
        foundedWrapper
        // project
        // found_date={acf.founded}
        // projectCount={acf.projects}
        // clientCount={acf.clients}
        // employeeCount={acf.employees}
        // locationCount={acf.location}
        pageClass="vision-banner-bg"
      />

      <div className="paving_area section_padd pb-0">
        <div className="container">
          <div className="paving_box v2 custom-paving">
            <PavingBox
              title={acf.our_mission.heading}
              mission
              image={acf.our_mission.image.localFile.childImageSharp.fluid.src}
              content={acf.our_mission.description}
            />
          </div>
        </div>
      </div>

      <div className="core_area section_padd">
        <div className="container root_box_wrapper">
          <div className="row text-center">
            <div className="col-12 mb_65">
              <h2 className="title">Our Roots</h2>
            </div>
            <div className="col-12" data-aos="fade-up">
              <div className="root_box">
                {acf.our_root.content.map((item, index) => (
                  <React.Fragment key={index}>
                    <TextBox
                      title={item.heading}
                      description={item.description}
                    />
                    {index === 1 && <img src={root2} alt="..." />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mission_content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 text-center">
              <h2 className="title">{acf.our_vision.heading}</h2>
              <p className="article_text">{acf.our_vision.description}</p>
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
    </main>
  )
}
const MissionPage = ({ data }) => {
  const { wordpressPage: page } = data

  return (
    <TemplateWrapper>
      <Helmet title={` Verinite | Vision & Values`} />
      <MissionTemplate acf={page.acf} title={page.title} page={page} />
      <GetInTouch />

    </TemplateWrapper>
  )
}

MissionTemplate.propTypes = {
  title: PropTypes.string.isRequired,
}

export default MissionPage

export const missionQuery = graphql`
  query MissionQueryById($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      id
      slug
      featured_media {
        localFile {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
      acf {
        second_heading
        our_core_values {
          heading
          image {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        our_mission {
          description
          heading
          image {
            localFile {
              childImageSharp {
                fluid(quality: 90, maxHeight: 410) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        our_root {
          content {
            heading
            description
          }
          heading
          image {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        our_vision {
          description
          heading
        }
        description
        founded
        employees
        clients
        projects
        location
        image {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
