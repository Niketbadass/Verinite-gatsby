import React, { useRef, useEffect } from 'react'
import Servicebox from '../components/Servicebox'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import CommonBanner from '../components/CommonBanner/CommonBanner'
import TemplateWrapper from '../components/Layout'
import BlogCard from '../components/BlogBox'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import BigButton from '../components/button/BigButton'
import Payment from '../components/SliderComponents/Payment/Payment'
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
  ul{
    margin-top:20px
  }
`


const TabPannel = () => {
  return (
    <div className="tab_panel" id="list-example">
      <div className="container">
        <ul className="nav nav-pills justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" href="#Overview">
              Overview
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Offerings">
              Offerings
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Domains">
              Domains
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Success">
              Success stories
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export const ServiceLandingTemp = ({ data, products, title, postData, portfolio, Scategories, payments }) => {
  const scrollToRef = ref =>
    window.scrollTo({ top: ref.current.offsetTop - 80, behavior: 'smooth' })
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)


  const [postWpData, setPostWpData] = React.useState('')
  const [productData, setProductData] = React.useState('')
  useEffect(() => {
    if (postWpData === '') {
      const category = portfolio.nodes.map(e => e)
      const blogs = postData.nodes
      const name = category.filter((e) => {

        return e.name.toLowerCase() == title.toLowerCase()
      })
      // console.log(name)
      const temp = name.map(e => e.wordpress_id)
      var maincontent = []
      blogs.map((e) => {
        if (e.portfolio.some(e => e == JSON.stringify(name[0].wordpress_id).toLowerCase())) {
          maincontent.push(e)
        }
      })
      setPostWpData(maincontent)
    }
    // console.log("postWpData",postWpData)
  }, [postWpData])


  useEffect(() => {
    if (productData === '') {
      const category = Scategories.nodes.map(e => e)
      const blogs = products.nodes
      const name = category.filter((e) => {
        return e.name.toLowerCase() == title.toLowerCase()
      })
      //  console.log(name)
      //  console.log(blogs)
      var maincontent = []
      blogs.map((e) => {
        if (e.service_categories.some(e => e == JSON.stringify(name[0].wordpress_id).toLowerCase())) {
          maincontent.push(e)
        }
      })
      setProductData(maincontent)
    }
    console.log("productData", productData)
  }, [productData])


  return (
    <main>
      <CommonBanner
        badge={true}
        title={data.acf.header.subtitle}
        homeBtn={true}
        align="left"
        pageClass="serviceLanding"
        image={data.featured_media.source_url}
        subHeading={data.acf.header.heading}
        btnClass="white_btn"
        btnText="know more"
        descText={true}
        description={data.acf.header.subheading}
        click={executeScroll}
      />

      <TabPannel />

      <div data-spy="scroll " ref={myRef} data-target="#list-example">
        <div class="section_padd" id="Overview">
          <div class="container personal_details_wrapper">
            <div class="row">
              <div class="col-12">
                <div class=" text-center mb_15">
                  <h2 class="title_sm">Overview</h2>
                </div>


                <div class="">
                  {data.acf.data.map((items, index, arr) => {
                      return (
                        <div
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="service_area section_padd" id="Offerings">
          <div class="container">
            <div class="row">
              <div class="col-12 text-center mb_15">
                <h2 class="title_sm">Our Service Offerings</h2>
              </div>
              {productData && productData.map(items => {
                return (
                  <div
                    class={productData.length==1?`col-lg-4 col-sm-6 mt_30 m-auto`:`col-lg-4 col-sm-6 mt_30` }
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <Servicebox
                      icon={items.acf.image.source_url}
                      title={items.acf.sub_heading}
                      description={items.acf.description}
                      read={`/products/${items.slug}`}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div class="service_payment section_padd2" id="Domains">
          <div class="container">
            <div class="col-12 text-center mb_15">
              <h3 class="title">Domains</h3>
            </div>
            <Payment home slideData={payments} />
          </div>
        </div>

        <div className="blog_area section_padd v2" id="Success">
          <div className="container">
            <div className="row">
              <div class="col-12 text-center mb_15">
                <h2 class="title">Success Stories</h2>
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
                  btnclassName="big_btn dark"
                  btnText="EXPLORE MORE"
                  link="/resource-listing?type=White%20Papers"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
ServiceLandingTemp.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}
const ServiceLanding = ({ data }) => {
  console.log(data)
  return (
    <TemplateWrapper>
      <Helmet title={` Verinite | Service | ${data.wordpressWpService.title}`} />
      
      <ServiceLandingTemp
        data={data.wordpressWpService}
        products={data.allWordpressWpServiceProducts}
        postData={data.allWordpressPost}
        payments={data.wordpressWpService.acf.payment_slider}
        portfolio={data.allWordpressWpPortfolio}
        title={data.wordpressWpService.title}
        Scategories={data.allWordpressWpServiceCategories}
      />
      <GetInTouch/>
    </TemplateWrapper>
  )
}

export default ServiceLanding

export const ServiceQuery = graphql`
  query ServicePage($id: String!) {
    allWordpressWpServiceProducts {
      nodes {
        service_categories
        title
        slug
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
    allWordpressWpServiceCategories {
      nodes {
        name
        wordpress_id
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
    wordpressWpService(id: { eq: $id }) {
      title
      content
      id
      featured_media {
        source_url
      }

      acf {
        header {
          heading
          subheading
          subtitle
        }
        about {
          description
          head
        }
        data {
          heading
          contents
        }
        
        
        payment_slider {
          content
          heading
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
        }
      }
    }
  }
`
