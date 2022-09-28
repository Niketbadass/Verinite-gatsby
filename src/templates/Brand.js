import React from 'react'
//import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CommonBanner from '../components/CommonBanner/CommonBanner'
import { graphql } from 'gatsby'
import TemplateWrapper from '../components/Layout'
import GetInTouch from '../components/GetInTouch/GetInTouch'

const BrandContentWrapper = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-size: 40px;
  }
  ,
  h6,
  span,
  p,
  img {
    margin: 2.5rem auto;
    display: block;
    width: 100%;
  }
  ,
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
`

export const PageTemplate = ({ content, title, acf }) => {
  return (
    <main>
      <CommonBanner
        badge
        align="left"
        title={title}
        subHeading={acf.second_heading}
        description={acf.description}
        image={acf.image.localFile.childImageSharp.fluid.src}
        pageClass="BrandIdentity vision-banner-bg"
        align="left"
      />
      <div className="personal_details_wrapper section_padd v2">
        <div className="tab-content">
          <div className="">
            <div className="container">
              <div className="mainMargin">
                <BrandContentWrapper
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              </div>
            </div>
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

const Job = ({ data }) => {
  const { wordpressPage: brand } = data
  return (
    <TemplateWrapper>
      <Helmet title={`Verinite | ${brand.title} `} />
      <PageTemplate
        content={brand.content}
        title={brand.title}
        acf={brand.acf}
      />
      <GetInTouch />
    </TemplateWrapper>
  )
}

export default Job

export const BrandQuery = graphql`
  query BrandPage($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      acf {
        second_heading

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
