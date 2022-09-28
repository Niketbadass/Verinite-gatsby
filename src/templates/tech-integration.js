import React from 'react'
import CommonBanner from '../components/CommonBanner/CommonBanner'
import TemplateWrapper from '../components/Layout'
import Stackbox from '../components/Stabkbox/StackBox'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Helmet from 'react-helmet'
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

export const TechIntegration = ({ data, integrations }) => {
  return (
    <main>
      <CommonBanner
        align="left"
        badge
        title={data.acf.header.sub_heading}
        image={data.acf.header.image.source_url}
        subHeading={data.acf.header.second_heading}
        description={data.acf.header.description}
      />
      <div className=" section_padd personal_details_wrapper ">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className=" mb_15 ">
                <h2 className="title text-center mb-5">
                  Our Application Stack Integrations
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {integrations.nodes.map((items, index, arr) => {
              if (arr[index].tags[0].name === 'TechIntegration') {
                return (
                  <Stackbox
                    icon={items.acf.image.source_url!=null?items.acf.image.source_url:""}
                    heading={items.acf.sub_heading}
                    subHeading={items.acf.description}
                    link={`/tech/${items.slug}`}
                    data-aos="fade-up"
                    data-aos-delay="400"
                  />
                )
              }
            })}
          </div>
        </div>
      </div>
      {data.acf.integration.map((items, index, arr) => {
        return (
          <div
            className={` section_padd personal_details_wrapper ${
              (index % 2) + 1 === 1 ? 'service-product-bg' : ''
            }`}
            key={index}
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
    </main>
  )
}
export const TechIntegrations = ({ data }) => {
  return (
    <TemplateWrapper>
      <Helmet title={` Verinite | ${data.wordpressPage.acf.header.sub_heading}`} />

      <TechIntegration
        data={data.wordpressPage}
        integrations={data.allWordpressWpApplicationStack}
      />

      <GetInTouch/>
    </TemplateWrapper>
  )
}
export default TechIntegrations
export const TechIntegrationQuery = graphql`
  query TechIntegrationPage($id: String!) {
    allWordpressWpApplicationStack {
      nodes {
        slug
        tags {
          name
        }
        acf {
          description
          second_heading
          sub_heading
          image {
            source_url
          }
        }
      }
    }

    wordpressPage(id: { eq: $id }) {
      acf {
        header {
          description
          image {
            source_url
          }
          sub_heading
          second_heading
          subheading
        }
        image {
          source_url
        }
        heading
        designation
        description
        second_heading

        integration {
          contents
          head
          text {
            content
          }
          list {
            contents
          }
        }
      }
    }
  }
`
