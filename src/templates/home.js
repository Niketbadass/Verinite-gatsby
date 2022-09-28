import React, { useState } from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { useWindowScroll } from 'react-use'

import Banner from '../components/SliderComponents/Banner/CustomBanner'
import PartnerRating from '../components/SliderComponents/PartnerRating/ParterRating'
import PaymentSlider from '../components/SliderComponents/Payment/Payment'
import MissionBox from '../components/MissionBox/MissionBox'
import MediaBox from '../components/MediaBox/MediaBox'
import TestimonialSlider from '../components/SliderComponents/Testimonial/Testimonial'

import CaseStudySelect from '../components/CaseStudySelect/CaseStudySelect'
import BigButton from '../components/button/BigButton'
import CaseStudyBox from '../components/CaseStudyBox/CaseStudyBox'
import TemplateWrapper from '../components/Layout'
import QuoteBox from '../components/QuoteBox/QuoteBox'
import BlogCard from '../components/BlogBox'


import GetInTouch from '../components/GetInTouch/GetInTouch'

export const PageTemplate = ({
  postData,
  partenerSliderData,
  certifiedData,
  paymentSliderData,
  testimonialData,
  successBlogData,
  missionBoxData,
  mediaBoxData,
  services,
  servicesdesignation,
  servicetype,
  quotebox,
  content,
}) => {
  const [filteredService, setFilteredService] = useState(services.nodes)
  const [filteredServices, setFilteredServices] = useState(services.nodes)
  const { y: pageYOffset } = useWindowScroll()
  const [temp,setTemp]=useState(0);

  let mavic=[];
  const  handleDesignation = value =>{
    let content=[];
    if(value!=="none"){

    filteredService.map((e)=>{
      if(e.designation.some(e=>e==value)){
        content.push(e)
      }
    })
    mavic=content

    setFilteredService(content)
    // console.log(mavic)
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
    setFilteredServices(content)
  }
  else{
    setFilteredServices(services.nodes)
  }
  }
  const certifiedImage = getImage(certifiedData.image.localFile)
  
 
  return (
    <main>
      <Banner contents={content} />
      <div className="rating_area2">
        <div className="container">
          <PartnerRating image={partenerSliderData.slider_images} />

          <div className="row align-items-center">
            <div className="col-md-12 mt_30 text-center">
              <h2 className="title">{certifiedData.heading}</h2>
              <GatsbyImage image={certifiedImage} className="img-fluid mt_40" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="payment_area section_padd"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div
          className="container
        "
        >
          <PaymentSlider home slideData={paymentSliderData.slider_content} 
          background={paymentSliderData.slider_content.background} />
        </div>
      </div>
      <div className="case_study section_padd">
        <div className="container-fluid">
        <div className="row">
          <div className="col-12">
          <CaseStudySelect 
          servicesdesignation={servicesdesignation.nodes}
          setDesignation={currentDesignation =>
            handleDesignation(currentDesignation)
          }
          setServices={ currentServices =>
            handleservicetype(currentServices)
          }
          servicetype={servicetype.nodes}
          />
          </div>
        </div>
        </div>
        <div className="container">
         
        
          <div className="row">
            {filteredServices &&
              filteredServices.map((item, key) => {
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
              <Link to="/resource-listing?type=Success%20Stories">
                <BigButton
                  btnClass="black_btn"
                  btnText="view success stories"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mission_area section_padd2"  >
        <div className="container" >
          <MissionBox
            title={missionBoxData.heading}
            content={missionBoxData.content}
            playImage={
              missionBoxData.play_image.localFile.childImageSharp.fluid.src
            }
            playImageFluid={
              missionBoxData.play_image.localFile.childImageSharp.fluid
            }
            missionImage={
              missionBoxData.mission_image.localFile.childImageSharp.fluid.src
            }
            missionImageFluid={
              missionBoxData.mission_image.localFile.childImageSharp.fluid
            }
            btnText={missionBoxData.button.title}
            audio={missionBoxData.audio.url.source_url}
            audioStart={temp}
          />
          <MediaBox
            
            channelType={mediaBoxData.video_channel_type}
            videoId={mediaBoxData.video_id}
            videoText={mediaBoxData.heading}
            showMissionBoxBackground
            videoUrl={mediaBoxData.video_url}
            // videoStart={temp2}
          />
        </div>
      </div>
      <div
        className="testimonail_area section_padd"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb_15">
              <h2 className="title">Clients Testimonials</h2>
            </div>
          </div>

          <TestimonialSlider
            home
            testiData={testimonialData.nodes}
          />
        </div>
      </div>
      <div className="blog_area section_padd pt-0">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb_15">
              <h2 className="title">{successBlogData.heading}</h2>
            </div>
            {postData.edges.map((item, index) => (
              <BlogCard
                key={index}
                item={item}
                title={item.node.title}
                content={item.node.excerpt}
                image={item.node.featured_media &&
                  item.node.featured_media.localFile}
                slug={item.node.slug}
              />
            ))}

            <div
              className="col-12 text-center mt_50"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <BigButton
                btnClass="black_btn"
                btnText="EXPLORE MORE"
                link="/resource-listing?type=White%20Papers"
              />
            </div>
          </div>
        </div>
      </div>
      <QuoteBox
        quoteTitle={quotebox[0].heading}
        btntxt={quotebox[0].button.title}
        links={quotebox[0].button.url}
        sideimg={quotebox[0].images.localFile}
      />
    </main>
  )
}

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const Home = ({ data }) => {
  const {
    wordpressPage: page,
    allWordpressPost: post,
    allWordpressWpService: services,
    allWordpressWpDesignation:designation,
    allWordpressWpServiceType:servicetype,
    allWordpressWpTestimonials:testimonial
  } = data

  return (
    <TemplateWrapper>
      <Helmet title={`Verinite | Home`} />
      <PageTemplate
        acf={page.acf}
        title={page.title}
        postData={post}
        partenerSliderData={page.childWordPressAcfPartnerSlider}
        certifiedData={page.childWordPressAcfCertified}
        paymentSliderData={page.childWordPressAcfPaymentSlider}
        testimonialData={testimonial}
        successBlogData={page.childWordPressAcfSuccessStories}
        missionBoxData={page.childWordPressAcfStrategy}
        mediaBoxData={page.childWordPressAcfVideoBox}
        services={services}
        servicesdesignation={designation}
        servicetype={servicetype}
        quotebox={page.childrenWordPressAcfQuoteBox}
        content={page.acf.top_slider}
      />
      <GetInTouch />

    </TemplateWrapper>
  )
}

Home.propTypes = {
  data: PropTypes.object.isRequired,
  image: PropTypes.object,
}

export default Home

export const pageQuery = graphql`
  query HomePageByID($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      template
      slug
      id
      link
      acf {
        sub_heading
        description
        heading
        image {
          localFile {
            childImageSharp {
              fluid(quality: 90) {
                src
              }
            }
          }
        }
        top_slider {
          title
          sub_title
          description
          control_text
          button {
            target
            title
            url
          }
          image {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
      childWordPressAcfPartnerSlider {
        slider_images {
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 90, layout: CONSTRAINED, height: 60)
              }
            }
          }
        }
      }
      childWordPressAcfCertified {
        heading
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(quality: 90, layout: CONSTRAINED, width: 200)
            }
          }
        }
      }
      childWordPressAcfPaymentSlider {
        slider_content {
          content
          heading
          button {
            target
            title
            url
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
          background {
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
      childWordPressAcfClientsTestimonial {
        testimonial_content {
          description
          name
          subtitle
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
        }
      }
      childWordPressAcfSuccessStories {
        heading
        story_content {
          content
          heading
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
      }
      childWordPressAcfVideoBox {
        heading
        icon
        video_channel_type
        video_id
        video_url
      }
      childrenWordPressAcfQuoteBox {
        heading
        button {
          title
          url
        }
        images {
          id
          source_url
          localFile {
            childImageSharp {
              gatsbyImageData(quality: 90)
            }
          }
        }
      }
      childWordPressAcfStrategy {
        content
        heading
        button {
          target
          url
          title
        }
        audio {
          url {
            source_url
          }
        }
        play_image {
          localFile {
            childImageSharp {
              fluid(quality: 90) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
        mission_image {
          localFile {
            childImageSharp {
              fluid(quality: 90) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
    allWordpressWpTestimonials {
      nodes {
        title
        acf {
          description
          designation
          name
          person_photo {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
          testimonial_details
        }
      }
    }
    allWordpressPost(
      filter: {portfolio: {eq: 1665}, categories: { elemMatch: { name: { eq: "Success Stories" } } } }
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
          portfolio
          categories {
            name
          }
          featured_media {
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 90, layout: FULL_WIDTH)
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
  }
`
