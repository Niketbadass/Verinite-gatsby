import React, { useEffect, useState } from 'react'
import BlogCard from '../components/BlogBox'
import CaseStudyBox from '../components/CaseStudyBox/CaseStudyBox'
import CommonBanner from '../components/CommonBanner/CommonBanner'
import TemplateWrapper from '../components/Layout'
import PropTypes from 'prop-types'
import BigButton from '../components/button/BigButton'
import PaymentSlider from '../components/SliderComponents/Payment/Payment'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import GetInTouch from '../components/GetInTouch/GetInTouch'

export const ServiceTemplate = ({ 
  acf,
  data, 
  serviceBgImg,
  serviceData,
  services,
  servicesdesignation,
  servicetype,
  }) => {
  const [filteredService, setFilteredService] = useState(services.nodes)

  const  handleDesignation = value =>{
    let content=[];
    if(value!=="none"){

    filteredService.map((e)=>{
      if(e.designation.some(e=>e==value)){
        content.push(e)
      }
    })
    setFilteredService(content)
  }
  else{
    setFilteredService(services.nodes)
  }
  }

  const handleservicetype = value =>{
    let content=[];
    if(value!=="none"){

    filteredService.map((e)=>{
      if(e.service_type.some(e=>e==value)){
        content.push(e)
      }
    })
    setFilteredService(content)
  }
  else{
    setFilteredService(services.nodes)
  }
  }
  return (
    <main>
      <CommonBanner
        subHeading={acf.header.heading}
        description={acf.header.subheading}
        servicelisting
        servicesdesignation={servicesdesignation.nodes} 
        handleDesignation={handleDesignation}
        servicetype={servicetype.nodes}
        handleservicetype={handleservicetype}
        image={serviceBgImg}
        pageClass="service"
      />

      <div className="case_study section_padd2">
        <div className="container">
          <div className="row">
          {filteredService &&
              filteredService.map((item, key) => {
                return (
                  <CaseStudyBox
                    title={item.title}
                    image={item.acf.image.localFile}
                    content={item.acf.description}
                    key={key}
                    slug={`/service/${item.slug}`}
                  />
                )
              })}
            <div
              className="col-12 text-center mt_50"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <BigButton
                btnClass="black_btn"
                btnText="view success stories"
                link="/resource-listing?type=Success%20Stories"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="payment_area section_padd2">
        <div className="container">
          <PaymentSlider home slideData={acf.payments_sliders} />
        </div>
      </div>
      <div className="blog_area section_padd">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb_15">
              <h2 className="title">Success Stories</h2>
            </div>
            {data.allWordpressPost.edges.map((items, index) => {
              return (
                <>
                  <BlogCard
                    title={items.node.title}
                    content={items.node.excerpt}
                    image={
                      items.node.featured_media.localFile &&
                      items.node.featured_media.localFile.childImageSharp.fluid
                        .src
                    }
                    key={index}
                    slug={items.node.slug}
                  />
                </>
              )
            })}
            <div
              className="col-12 text-center mt_50"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <BigButton
                btnClass="black_btn"
                btnText="EXPLORE MORE "
                link="/resource-listing?type=White%20Papers"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
const ServiceListing = ({ data }) => {
  const { wordpressPage: page, 
    allWordpressWpService: service,
    allWordpressWpService: services,
    allWordpressWpDesignation:designation,
    allWordpressWpServiceType:servicetype
   } = data

  return (
    <TemplateWrapper>
      <Helmet title={` Verinite | Services `} />

      <ServiceTemplate
        acf={page.acf}
        data={data}
        serviceBgImg={
          page.featured_media.localFile &&
          page.featured_media.localFile.childImageSharp.fluid.src
        }
        serviceData={service.nodes}
        services={services}
        servicesdesignation={designation}
        servicetype={servicetype}
      />
      <GetInTouch/>
    </TemplateWrapper>
  )
}

ServiceTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

export default ServiceListing

export const ServiceQuery = graphql`
  query ServiceWordPressPost($id: String!) {
    allWordpressPost(
      filter: { categories: { elemMatch: { name: { eq: "Success Stories" } } } },limit:6
    ) {
      edges {
        node {
          link
          title
          template
          slug
          id
          content
          excerpt
          categories {
            name
          }
          featured_media {
            localFile {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
    allWordpressWpDesignation {
      nodes {
        name
        wordpress_id
      }
    }
    allWordpressWpServiceType {
      nodes {
        wordpress_id
        name
      }
    }
    allWordpressWpService {
      nodes {
        slug
        title
        content
        designation
        service_type
        acf {
          description
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 90, layout: CONSTRAINED, width: 240)
              }
            }
          }
        }
      }
    }
    wordpressPage(id: { eq: $id }) {
      acf {
        payments_sliders {
          heading
          content
          background {
            source_url
            localFile {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
          button {
            target
            title
            url
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
        header {
          heading
          subheading
        }
      }
      featured_media {
        localFile {
          childImageSharp {
            fluid(quality: 90) {
              src
            }
          }
        }
      }
    }
  }
`
