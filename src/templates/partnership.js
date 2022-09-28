import React,{ useRef} from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import CommonBanner from '../components/CommonBanner/CommonBanner'
import { Link, graphql } from 'gatsby'
import BlogCard from '../components/BlogBox'
import PartnerSlider from '../components/partner/PartnerSlider'
import PartnerSpeak from '../components/partner/PartnerSpeak'
import CommonForm from '../components/CommonForm/CommonForm'
import TemplateWrapper from '../components/Layout'
import arrow from '../img/arrow-pointing-to-right.png'

export const PageTemplate = ({ acf, title }) => {
  const scrollToRef = (ref) => window.scrollTo({ top:ref.current.offsetTop-80  , behavior: 'smooth' })
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)
  return (
    <main>
      <CommonBanner
        badge
        homeBtn
        partnership
        align="left"
        btnText="become a partner"
        title={title}
        subHeading={acf.second_heading}
        description={acf.description}
        image={acf.image.localFile.childImageSharp.fluid.src}
        click={executeScroll}

      />
      <div className="blog_area section_padd light_bg">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb_15">
              <h2 className="title">Our partnering industries</h2>
            </div>
            {acf.partner_industries.map((industry, index) => {
              return (
                <BlogCard
                  title={industry.title}
                  description={industry.sub_heading}
                  image={
                    industry.image &&
                    industry.image.localFile.childImageSharp.fixed.src
                  }
                  key={index}
                />
              )
            })}
          </div>
        </div>
      </div>
      <div className="impact_area section_padd overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 text-center mb_30">
              <h2 className="title">impact through collaboration</h2>
            </div>
            <div className="col-lg-4 mt_30 z-index-1">
              <div className="impact_box" data-aos="fade-right">
                <h3 className="title_sm">{acf.imapact.heading}</h3>
                <p className="mt_30 article_text">{acf.imapact.sub_heading}</p>
                <a onClick={executeScroll} className="style-a">
                  connect now <img src={arrow} alt=""className="demo_btn" />
                </a>
              </div>
            </div>
            <div className="col-lg-8 mt_30" data-aos="fade-left">
              <img
                src={acf.imapact.image.localFile.childImageSharp.fixed.src}
                class="img-fluid impact_img"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="partner_area section_padd light_bg">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb_20">
              <h2 className="title">Our partners</h2>
              <p className="article_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor <br class="d-none d-lg-block" /> incididunt ut
                labore et dolore magna aliqua.{' '}
              </p>
            </div>
          </div>
          <div className="swiper-container payment_slider">
            <div className="swiper-wrapper">
              <PartnerSlider slideData={acf.partner_slider} class="partner_box_customheight"/>
            </div>
          </div>
        </div>
      </div>
      <div className="partner_speak section_padd overflow-hidden pb-0">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb_15">
              <h2 className="title">Partner’s speak</h2>
            </div>
          </div>
          <div className="swiper-container partner_speak_slider text-center">
            <div className="swiper-wrapper">
              <PartnerSpeak sliderData={acf.partner_speak} />
            </div>
          </div>
        </div>
      </div>
      <div className="personal_details_wrapper section_padd v2" >
        <div className="container" ref={myRef}>
          <CommonForm
            formTitle="Contact for partnership"
            submitTitle="connect now"
          />
        </div>
      </div>
    </main>
  )
}

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const Partnership = ({ data }) => {
  const { wordpressPage: page } = data
  return (
    <TemplateWrapper>
      <Helmet title={` Verinite | ${page.title}`} />
      <PageTemplate acf={page.acf} title={page.title} />
    </TemplateWrapper>
  )
}

export default Partnership

export const pageQuery = graphql`
  query Partnership($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      acf {
        second_heading
        partner_speak {
          title
          sub_heading
          logo {
            localFile {
              childImageSharp {
                fixed(quality: 90) {
                  src
                }
              }
            }
          }
        }
        partner_slider {
          title
          sub_heading
          logo {
            localFile {
              childImageSharp {
                fixed(quality: 90) {
                  src
                }
              }
            }
          }
        }
        imapact {
          heading
          sub_heading
          link
          image {
            localFile {
              childImageSharp {
                fixed(quality: 90) {
                  src
                }
              }
            }
          }
        }
        heading
        sub_heading
        description
        image {
          localFile {
            childImageSharp {
              fluid(quality: 90) {
                src
              }
            }
          }
        }
        partner_industries {
          sub_heading
          title
          image {
            localFile {
              childImageSharp {
                fixed(quality: 90) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
