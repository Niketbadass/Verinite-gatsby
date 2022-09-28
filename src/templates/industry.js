import React, { useEffect, useRef } from 'react'
import Bankingbox from '../components/Bankingbox'
import BlogCard from '../components/BlogBox'
import CaseStudyBox from '../components/CaseStudyBox/CaseStudyBox'
import CommonBanner from '../components/CommonBanner/CommonBanner'
import TemplateWrapper from '../components/Layout'
import PavingBox from '../components/PavingBox/PavingBox'
import PartnerRating from '../components/SliderComponents/PartnerRating/ParterRating'
import BigButton from '../components/button/BigButton'
import arrowImg from '../assets/img/arrow3.svg'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Tabs from "../components/Tabs/tabs";
import TabPane from "../components/Tabs/tab-panel";
import _ from 'lodash'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import GetInTouch from '../components/GetInTouch/GetInTouch'

const PavingParagraph = styled.div`
  p {
    margin-top:20px;
    text-align:center;
  }
`


export const IndustryTemplate = ({
  industry,
  postData,
  portfolio,
  industryBgImg,
  serviceData,
  title,
}) => {
  // console.log(industry.acf.banking_future)
  const scrollToRef = ref =>
    window.scrollTo({ top: ref.current.offsetTop - 80, behavior: 'smooth' })
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)

  const [ postWpData, setPostWpData] = React.useState('')
  useEffect(()=>{
    if(postWpData===''){
      const category = portfolio.nodes.map(e => e)
    const blogs = postData.nodes
     const name = category.filter((e)=>{
       return e.name.toLowerCase()==title.toLowerCase()
     })
    //  const temp = name.map(e=>e.wordpress_id)
     var maincontent = []
     blogs.map((e)=>{
      if(e.portfolio.some(e => e==JSON.stringify(name[0].wordpress_id))){
        maincontent.push(e)
      }
    })
    setPostWpData(maincontent)
    }
    // console.log("postWpData",postWpData)
  },[postWpData])

  return (
    <main>
      <CommonBanner
        badge={true}
        title={title}
        homeBtn={true}
        align="left"
        pageClass="industry vision-banner-bg"
        image={industryBgImg}
        subHeading={industry.acf.second_heading}
        btnClass="white_btn"
        btnText="know more"
        descText={true}
        description={industry.acf.description}
        click={executeScroll}
      />
      <div className="rating_area2">
        <div className="container">
          <PartnerRating image={industry.acf.slider} />
        </div>
      </div>
      <div ref={myRef} className="banking_area section_padd">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb_15">
              <h2 className="title_sm">
                {industry.acf.banking_head}
              </h2>
            </div>
            {industry.acf.banking_needs.map((need, index) => {
              return (
                <div
                  className="col-lg-4 col-sm-6 mt_30"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  key={index}
                >
                  <Bankingbox
                    faIconClass={need.icon}
                    title={need.title}
                    description={need.text}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="paving_area section_padd pb-0">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="title">
                {industry.acf.banking_future.heading}
              </h2>
            </div>
          </div>
         
          {industry.acf.banking_future.paragraph?(
             <PavingParagraph
            dangerouslySetInnerHTML={{__html:industry.acf.banking_future.paragraph}}
          />
          ):(
          <div className="paving_box overflow-hidden">
          <Tabs custom="debit industry-toggle" image={arrowImg}>
            {industry.acf.banking_future.content.map((item, index) => (
              <TabPane name={item.toggle_id} key={index}>
              <PavingBox
                industryPaving={true}
                title={item.heading}
                description={item.description}
                image={
                  item.image.localFile &&
                  item.image.localFile.childImageSharp.fluid.src
                }
              />
              
            </TabPane>
            
            ))}
              
            </Tabs>
          </div>
          )}
        </div>
      </div>
      <div className="case_study section_padd v2">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb_15">
              <h3 className="title">Verinite’s range of services</h3>
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
                btnText="view case studies"
                link="/resource-listing?type=Success%20Stories"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="blog_area section_padd">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb_15">
              <h2 className="title">Success Stories</h2>
            </div>
            {postWpData !==''?(
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
            ):("")}
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
    </main>
  )
}

IndustryTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.object,
}
const IndustryPage = ({ data }) => {
  const {
    wordpressPage: page,
    allWordpressPost: post,
    allWordpressWpService: service,
    allWordpressWpPortfolio:portfolio
  } = data
  return (
    <TemplateWrapper>
      <Helmet title={` Verinite | Industries | ${page.title}`} />

      <IndustryTemplate
        title={page.title}
        industryBgImg={page.featured_media.localFile.childImageSharp.fluid.src}
        serviceData={service.nodes}
        industry={page}
        postData={post}
        portfolio={portfolio}
      />
      <GetInTouch />
    </TemplateWrapper>
  )
}

export default IndustryPage

export const industryQuery = graphql`
  query IndustryPage($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      id
      slug
      acf {
        second_heading
        heading
        sub_heading
        description
        banking_head
        slider {
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 90, layout: CONSTRAINED, height: 60)
              }
            }
          }
        }
        our_services {
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
        }
        banking_needs {
          icon
          text
          title
        }
        banking_future {
          paragraph
          heading
          content {
            description
            heading
            toggle_id
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
      id
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
      filter: { categories: { elemMatch: { name: { eq: "Success Stories" } } } },limit:6
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
