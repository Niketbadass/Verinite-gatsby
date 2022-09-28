import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import CommonBanner from '../components/CommonBanner/CommonBanner'
import BenefitsBox from '../components/BenefitsBox'
import TemplateWrapper from '../components/Layout'
import { graphql } from 'gatsby'
import GetInTouch from '../components/GetInTouch/GetInTouch'

export const PageTemplate = ({ acf, title }) => {
  return (
    <main>
      <CommonBanner
        badge
        align="left"
        title={title}
        subHeading={acf.second_heading}
        description={acf.description}
        image={acf.image.localFile.childImageSharp.fluid.src}
        pageClass="vision-banner-bg"
      />
      <div className="benefits_area section_padd overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb_5">
              <h2 className="title">Benefits at Verinite</h2>
            </div>
          </div>
          {acf.benefits_packages.map((benefit, i) => {
            return (
              <BenefitsBox
                key={i}
                content={benefit.content}
                direction={benefit.image_position}
                image={
                  benefit.image.localFile &&
                  benefit.image.localFile.childImageSharp.fluid.src
                }
              />
            )
          })}
        </div>
      </div>
    </main>
  )
}

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const Benefits = ({ data }) => {
  const { wordpressPage: page } = data
  return (
    <TemplateWrapper>
      <Helmet title={`Verinite | ${page.title} `} />
      <PageTemplate acf={page.acf} title={page.title} />
      <GetInTouch />

    </TemplateWrapper>
  )
}

export default Benefits

export const pageQuery = graphql`
  query Benefits($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      acf {
        second_heading
        benefits_packages {
          image_position
          content
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
        sub_heading
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
      }
    }
  }
`
