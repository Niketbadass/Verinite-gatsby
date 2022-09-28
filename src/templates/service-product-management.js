import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import CommonBanner from '../components/CommonBanner/CommonBanner'
import styled from 'styled-components'
import TemplateWrapper from '../components/Layout'
import { graphql } from 'gatsby'
import GetInTouch from '../components/GetInTouch/GetInTouch'

const ServiceContent = styled.div`
  p {
    font-size: 20px;
    line-height: 31px;
    letter-spacing: 0.5px;
    margin-top: 20px;
    color: #4d6e81;
  }
  h6 {
    text-align: center;
  }
  h4 {
    margin-top: 25px;
  }
  h5 {
    margin-top: 25px;
    font-size: 1.25rem;
  }
  ul{
    margin-top:20px
  }
  ol{
    margin-top:20px;
    // font-size: 20px;
    // font-weight: bold;
  }
  
`
export const ProductManagement = ({ data, contents }) => {
  return (
    <main>
      <CommonBanner
        badge
        title={data.acf.header.title}
        image={data.featured_media.source_url}
        subHeading={data.acf.header.subheading}
        description={data.acf.header.description}
        align="center"
      />

      {
        data.acf.data.map((items, index, arr) => {

          return (
            <div
              className={` section_padd personal_details_wrapper ${(index % 2) + 1 === 1 ? '' : 'service-product-bg'
                }`}
              key={index}>
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className=" mb_15 ">
                      <h2 className="title_sm "
                      data-aos="fade-up"
                      data-aos-delay="200"
                      >{items.heading}</h2>
                      <ServiceContent
                        dangerouslySetInnerHTML={{ __html: items.contents }}
                        className="service-product"
                        data-aos="fade-up"
                        data-aos-delay="400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
        )

      }

    </main>
  )
}
ProductManagement.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}
export const Productss = ({ data }) => {


  return (
    <TemplateWrapper>
      <Helmet title={` Verinite | Service Offering | ${data.wordpressWpServiceProducts.acf.header.title}`} />

      <ProductManagement
        data={data.wordpressWpServiceProducts}

      />
      <GetInTouch/>
    </TemplateWrapper>
  )
}
export default Productss
export const ProductQuery = graphql`
  query ProductPage($id: String!) {
    wordpressWpServiceProducts(id: { eq: $id }) {
      title
      slug
      featured_media {
        source_url
      }
      acf {
        header {
            description
            subheading
            title
        }
        
        data {
          heading
          contents
        }
        
  
      }
    }
  }
`
