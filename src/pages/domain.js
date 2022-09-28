import React from 'react'
import BlogCard from '../components/BlogBox'
import CaseStudyBox from '../components/CaseStudyBox/CaseStudyBox'
import CommonBanner from '../components/CommonBanner/CommonBanner'
import PavingBox from '../components/PavingBox/PavingBox'
import PartnerRating from '../components/SliderComponents/PartnerRating/ParterRating'
import StatisticsBox from '../components/StatisticsBox'
import img10 from '../assets/img/img10.jpg'
import domBgImg from '../assets/img/domain_bg.png'
import TemplateWrapper from '../components/Layout'
import BigButton from '../components/button/BigButton'
import PartnerSlider from '../components/partner/PartnerSlider'
import { graphql } from 'gatsby'

const DomainPage = ({ data }) => {
  return (
    <TemplateWrapper>
      <main>
        <CommonBanner
          badge
          title="Cards Domain"
          subHeading="Predictive analytics intelligence for fraud prevention"
          description="Vernite card solution has efficiently helped us double the security of our card management system"
          homeBtn
          btnClass="white_btn"
          btnText="know more"
          align="left"
          image={domBgImg}
          pageClass="industry v2"
        />

        {/* rating-area */}
        <div class="rating_area">
          <div class="container">
            <div class="swiper-container partner_slider pb-0">
              <div class="swiper-wrapper text-center align-items-center">
                <PartnerRating domain />
              </div>
            </div>
          </div>
        </div>

        {/* introduction-area */}
        <div class="container text-center">
          <div class="row justify-content-center">
            <div class="col-xl-12">
              <h2 class="title">Introduction</h2>
              <p class="article_text px-xl-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                quis ligula et quam tempus imperdiet non vitae arcu. Vestibulum
                nec facilisis nulla, ac luctus nunc. Vestibulum vitae imperdiet
                arcu. Sed id lectus et est porttitor gravida. Etiam ullamcorper
                consequat mi, tempus hendrerit ex semper pretium. Nulla vehicula
                nulla laoreet sodales ultrices. Phasellus malesuada convallis
                blandit. Integer odio est, pretium sed neque et, hendrerit
                sodales dui. Morbi fringilla sollicitudin tellus.
              </p>
            </div>
          </div>
        </div>

        {/* business-area */}
        <div class="business_area section_padd">
          <div class="container">
            <div class="row">
              <div class="col-12 text-center">
                <h2 class="title">Business</h2>
              </div>
            </div>
            <ul class="nav nav-pills main_tab justify-content-center">
              <li class="nav-item">
                <a class="nav-link active" data-toggle="pill" href="#issue">
                  Issuing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="pill" href="#aquire">
                  Acquiring
                </a>
              </li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane fade show active" id="issue">
                <div class="paving_box overflow-hidden">
                  <ul class="nav nav-pills">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        data-toggle="pill"
                        href="#debit"
                      >
                        Debit
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-toggle="pill" href="#credit">
                        Credit
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-toggle="pill" href="#prepaid">
                        Prepaid
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div class="tab-pane fade show active" id="debit">
                      <PavingBox
                        title="EMV chip technology is the new global standard for debit cards"
                        description1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                        imgUrl={img10}
                      />
                    </div>
                    <div class="tab-pane fade" id="credit">
                      <PavingBox
                        title="EMV chip technology is the new global standard for debit cards"
                        description1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                        imgUrl={img10}
                      />
                    </div>
                    <div class="tab-pane fade" id="prepaid">
                      <PavingBox
                        title="EMV chip technology is the new global standard for debit cards"
                        description1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                        imgUrl={img10}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="aquire">
                <div class="paving_box overflow-hidden">
                  <ul class="nav nav-pills">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        data-toggle="pill"
                        href="#debit2"
                      >
                        Debit
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-toggle="pill" href="#credit2">
                        Credit
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-toggle="pill" href="#prepaid2">
                        Prepaid
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div class="tab-pane fade show active" id="debit2">
                      <PavingBox
                        title="EMV chip technology is the new global standard for debit cards"
                        description1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                        imgUrl={img10}
                      />
                    </div>
                    <div class="tab-pane fade" id="credit2">
                      <PavingBox
                        title="EMV chip technology is the new global standard for debit cards"
                        description1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                        imgUrl={img10}
                      />
                    </div>
                    <div class="tab-pane fade" id="prepaid2">
                      <PavingBox
                        title="EMV chip technology is the new global standard for debit cards"
                        description1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                        imgUrl={img10}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* project-area */}
        <div class="project_area section_padd light_bg">
          <div class="container">
            <div class="row">
              <div class="col-12 text-center mb_20">
                <h2 class="title">Our projects</h2>
              </div>
            </div>
            <div class="swiper-container payment_slider">
              <div class="swiper-wrapper">
                <PartnerSlider domain />
              </div>
            </div>
          </div>
        </div>

        {/* statistics-area */}
        <div class="statistics_area section_padd pb-0 counter">
          <div class="container">
            <div class="row">
              <div class="col-12 text-center">
                <h2 class="title mb_15">Statistics</h2>
              </div>
              <StatisticsBox />
            </div>
          </div>
        </div>

        {/* case-study */}
        <div class="case_study section_padd">
          <div class="container">
            <div class="row">
              <div class="col-12 text-center mb_15">
                <h3 class="title">Services we offer</h3>
              </div>
              {data.allWordpressPost.edges.map(items => {
                return (
                  <>
                    {items.node.categories[0].name === 'Case Studies' ? (
                      <CaseStudyBox
                        title={items.node.title}
                        imgUrl={
                          items.node.featured_media.localFile &&
                          items.node.featured_media.localFile.childImageSharp
                            .fluid.src
                        }
                        content={items.node.content}
                      />
                    ) : null}
                  </>
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
                />
              </div>
            </div>
          </div>
        </div>

        {/* blog-area */}
        <div class="blog_area section_padd v2">
          <div class="container">
            <div class="row">
              <div class="col-12 text-center mb_15">
                <h2 class="title">Success Stories</h2>
              </div>
              {data.allWordpressPost.edges.map(items => {
                return (
                  <>
                    {items.node.categories.map(item =>
                      item.name === 'Success Stories' ? (
                        <BlogCard
                          title={items.node.title}
                          content={items.node.content}
                          imgUrl={
                            items.node.featured_media.localFile.childImageSharp
                              .fluid.src
                          }
                        />
                      ) : null
                    )}
                  </>
                )
              })}
              <div
                className="col-12 text-center mt_50"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <BigButton btnClass="black_btn" btnText="download whitepaper" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </TemplateWrapper>
  )
}

export default DomainPage

export const serviceListing = graphql`
  query OurWordPressPost {
    allWordpressPost {
      edges {
        node {
          link
          title
          template
          slug
          id
          content
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
  }
`
