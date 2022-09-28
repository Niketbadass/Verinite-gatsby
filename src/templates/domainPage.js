import React, { useRef, useEffect, useState } from 'react'
import BlogCard from '../components/BlogBox'
import CaseStudyBox from '../components/CaseStudyBox/CaseStudyBox'
import CommonBanner from '../components/CommonBanner/CommonBanner'
import PavingBox from '../components/PavingBox/PavingBox'
import PartnerRating from '../components/SliderComponents/PartnerRating/ParterRating'
import StatisticsBox from '../components/StatisticsBox'
import TemplateWrapper from '../components/Layout'
import BigButton from '../components/button/BigButton'
import PartnerSlider from '../components/partner/PartnerSlider'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Tabs from "../components/Tabs/tabs";
import TabPane from "../components/Tabs/tab-panel";
import styled from 'styled-components'
import Helmet from 'react-helmet'
import GetInTouch from '../components/GetInTouch/GetInTouch'

const ToggleContent = styled.div`
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
  }
  ul{
    margin-top:20px
  }
  
`
export const DomainTemplate = ({ acf, postData, title, serviceData, portfolio }) => {
  // console.log("postData", acf.toogle_data)

  const scrollToRef = ref => {
    window.scrollTo({ top: ref.current.offsetTop - 80, behavior: 'smooth' })
  }
  const myRef = useRef(null);

  const executeScroll = () => scrollToRef(myRef)

  const [postWpData, setPostWpData] = React.useState('')
  useEffect(() => {
    if (postWpData === '') {
      const category = portfolio.nodes.map(e => e)
      const blogs = postData.nodes
      const name = category.filter((e) => {
        return e.name.toLowerCase() == title.toLowerCase()
      })
      var maincontent = []
      blogs.map((e) => {
        if (e.portfolio.some(e => e == JSON.stringify(name[0].wordpress_id).toLowerCase())) {
          maincontent.push(e)
        }
      })
      setPostWpData(maincontent)
    }
  }, [postWpData])

  return (
    <main>
      <CommonBanner
        badge
        title={title}
        subHeading={acf.second_heading}
        description={acf.description}
        homeBtn
        btnClass="white_btn"
        btnText="know more"
        image={acf.image.localFile.childImageSharp.fluid.src}
        align="left"
        pageClass="industry v2 vision-banner-bg"
        click={executeScroll}
      />
      {/* rating-area */}
      <div className="rating_area2">
        <div className="container">
          <div className="swiper-container partner_slider pb-0">
            <div className="swiper-wrapper text-center align-items-center">
              <PartnerRating domain image={acf.slider} />
            </div>
          </div>
        </div>
      </div>

      {/* introduction-area */}
      <div ref={myRef} id="test" className="container text-center">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <h2 className="title">{acf.introduction.heading}</h2>

            {acf.introduction.description.map((elem, index) => {
              return <p className="article_text px-xl-5" key={index}>{elem.text}</p>
            })}

          </div>
        </div>
      </div>

      {/* business-area */}
      <div className="business_area section_padd">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="title">Our Expertise</h2>
            </div>
          </div>


          <Tabs custom="issuing mt_20" >
            {acf.toogle_data.map((item, index) => (


              <TabPane name={item.toogle_head} key={index}>
                {item.toogle_text ? (
                  <div className="mt_30">
                    <ToggleContent
                      dangerouslySetInnerHTML={{ __html: item.toogle_text }}
                      data-aos="fade-up" data-aos-delay="600"
                    />
                  </div>
                ) : (
                  <div className="paving_box overflow-hidden">
                    <Tabs custom="debit">
                    {item.toogle_box.map((items, index) => (
                      <TabPane name={items.toggle_id} key={index}>
                      <PavingBox
                        title={items.heading}
                        description={items.description}
                        image={
                          items.image.localFile &&
                          items.image.localFile.childImageSharp.fluid.src
                        }
                      />
                      
                    </TabPane>
                   
                    ))}
                      
                    </Tabs>
                  </div>
                )}
              </TabPane>
            ))}
           
          </Tabs>

        </div>
      </div>

      {/* project-area */}
      <div className="project_area section_padd light_bg">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb_20">
              <h2 className="title">Our projects</h2>
            </div>
          </div>
          <div className="swiper-container payment_slider">
            <div className="swiper-wrapper">
              <PartnerSlider slideData={acf.project_slider} class="partner_box_domain" />
            </div>
          </div>
        </div>
      </div>

      {/* statistics-area */}
      <div className="statistics_area section_padd pb-0 counter">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="title mb_15">Statistics</h2>
            </div>
            <StatisticsBox data={acf.statistics} />
          </div>
        </div>
      </div>

      {/* case-study */}
      <div className="case_study section_padd">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb_15">
              <h3 className="title">Services we offer</h3>
            </div>
            {serviceData.map((item, index) => (
              <CaseStudyBox
                boxClass=""
                image={
                  item.acf.image.localFile &&
                  item.acf.image.localFile.childImageSharp.fluid.src
                }
                title={item.title}
                content={item.acf.description}
                dataDelay="200"
                key={index}
                slug={`/service/${item.slug}`}
              />
            ))}

            <div
              className="col-12 text-center mt_50"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <BigButton
                btnClass="black_btn"
                link="/resource-listing?type=Success%20Stories"
                btnText="view success stories"
              />
            </div>
          </div>
        </div>
      </div>

      {/* blog-area */}
      <div className="blog_area section_padd v2">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb_15">
              <h2 className="title">Success Stories</h2>
            </div>
            {postWpData !== '' ? (
              postWpData.map((post, index) => (
                <BlogCard
                  key={index}
                  title={post.title}
                  content={post.excerpt}
                  image={
                    post.featured_media.localFile &&
                    post.featured_media.localFile.childImageSharp.fixed.src
                  }
                  slug={post.slug}
                />
              ))
            ) : ("")}
            <div
              className="col-12 text-center mt_50"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <BigButton
                btnClass="black_btn"
                link="/resource-listing?type=White%20Papers"
                btnText="EXPLORE MORE"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

DomainTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.object,
}

const DomainPage = ({ data }) => {
  const {
    wordpressPage: page,
    allWordpressPost: post,
    allWordpressWpService: service,
    allWordpressWpPortfolio: portfolio,
  } = data
  return (
    <TemplateWrapper>
      <Helmet title={` Verinite | Domains | ${page.title}`} />
      <DomainTemplate
        acf={page.acf}
        postData={post}
        serviceData={service.nodes}
        title={page.title}
        portfolio={portfolio}
      />
      <GetInTouch />

    </TemplateWrapper>
  )
}

export default DomainPage

export const serviceListing = graphql`
  query DomainPageData($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      id
      slug
      acf {
        slider {
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 90, layout: CONSTRAINED, height: 60)
              }
            }
          }
        }
        second_heading
        project_slider {
          sub_heading
          title
          logo {
            localFile {
              childImageSharp {
                fixed {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
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
        bussiness {
          heading

        }
        toogle_data {
          toogle_head
          toogle_text
          toogle_box {
            description
            heading
            toggle_id
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
        description
        introduction {
          description {
            text
          }
          heading
        }
        statistics {
          description
          heading
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 100, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
              extension
              url
            }
          }
        }
        
      }
    }
    allWordpressWpService {
      nodes {
        title
        acf {
          description
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
        slug
      }
    }
    allWordpressWpPortfolio {
      nodes {
        name
        wordpress_id
      }
    }
    allWordpressPost(
      filter: { categories: { elemMatch: { name: { eq: "Success Stories" } } } }
    ) {
      
        nodes {

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
                fixed(width: 300) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      
    }
  }
`
