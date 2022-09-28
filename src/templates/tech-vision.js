import React from 'react'
import Helmet from 'react-helmet'
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

export const TechVision = ({ data }) => {
  return (
    <main>
      <CommonBanner
        badge
        title={data.acf.header.sub_heading}
        image={data.acf.header.image.localFile.childImageSharp.fixed.src}
        subHeading={data.acf.header.second_heading}
        description={data.acf.header.description}
      />
      {data.acf.integration.map((items, index, arr) => {
        return (
          <div
            className={` section_padd personal_details_wrapper ${
              (index % 2) + 1 === 1 ? '' : 'service-product-bg'
            }`}
          >
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className=" mb_15 ">
                    <h2 className="title_sm "
                    data-aos="fade-up"
                    data-aos-delay="200"
                    >{items.head}</h2>
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
      })}
      
{/*    <div class="mb-5">
        <div className="container">
          <div class="row">
            <div class="col-12">
              <div class=" mb_15 ">
                <img
                  src={data.acf.bottom_images.source_url}
                  class="w-100 mt_20"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </main>
  )
}
export const Vision = ({ data }) => {
  return (
    <TemplateWrapper>
      <Helmet title={` Verinite |  ${data.wordpressWpApplicationStack.acf.header.sub_heading}`} />
      <TechVision data={data.wordpressWpApplicationStack} />
      <GetInTouch/>
    </TemplateWrapper>
  )
}
export default Vision

export const TechVisionQuery = graphql`
  query TechVisionPage($id: String!) {
    wordpressWpApplicationStack(id: { eq: $id }) {
      acf {
        header {
          description
          sub_heading
          second_heading
          image {
            localFile {
              childImageSharp {
                fixed {
                  src
                }
              }
            }
          }
        }

        image {
          source_url
        }
        integration {
          contents
          head
          
        }
        bottom_images {
          source_url
        }
      }
    }
  }
`
