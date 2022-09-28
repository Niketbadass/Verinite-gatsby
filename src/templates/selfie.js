import React from 'react'
import CommonBanner from '../components/CommonBanner/CommonBanner'
import TemplateWrapper from '../components/Layout'
import { Link, graphql } from 'gatsby'
import Servicebox from '../components/Servicebox'
import Slider from '../components/UI/Slider/SliderComponent'
import Stackbox from '../components/Stabkbox/StackBox'
import arrow from '../img/arrow-pointing-to-right.png'
import quote from '../assets/img/selfie/quote.png'
import QuoteBox from '../components/QuoteBox/QuoteBox'
import BigButton from '../components/button/BigButton'
import Helmet from 'react-helmet'
import GetInTouch from '../components/GetInTouch/GetInTouch'

export const Selfie = ({ data, integrations }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    // centerPadding: '33%',
    customPaging: i => <div className="slick__dots--custom"></div>,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // centerPadding: '26%',
          infinite: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // centerPadding: '25%',
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // centerPadding: '20%',
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          infinite: true,
        },
      },
    ],
  }

  return (
    <main>
      <CommonBanner
        align="left"
        badge
        homeBtn
        btnClass="white_btn"
        btnText="Request demo"
        title={data.title}
        image={data.acf.image.source_url}
        subHeading={data.acf.second_heading}
        description={data.acf.description}
        link="/contact-us"
      />

      <div className="selfie_area section_padd">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb_15">
              <h2 className="title_sm">{data.acf.why_goselfie.head}</h2>
            </div>

            {data.acf.why_goselfie.highlights.map((items, index) => {
              return (
                <div
                  className="col-lg-4 col-sm-6 mt_30"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  key={index}
                >
                  <Servicebox
                    icon={items.icon.source_url}
                    title={items.head}
                    description={items.text}
                    link={`/tech/${items.slug}`}
                  />
                </div>
              )
            })}


          </div>
        </div>
      </div>
      <div className="step_selfiearea section_padd">
        <div className="row">
          <div className="col-12 text-center mb_30">
            <h2 className="title">GoSelfie Integration</h2>
          </div>
        </div>
        <Slider {...settings}>
          {data.acf.steps.map((items, key) => {
            return (
              <div key={key}>
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-4 mt_30 z-index-1">
                      <div className="impact_box" data-aos="fade-right">
                        <h3 className="title_sm">{items.head}</h3>
                        <p className="mt_30 article_text">{items.text}</p>
                        <Link to={items.button.url} className="demo_btn">
                          {items.button.title} <img src={arrow} alt="" />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-8 mt_30" data-aos="fade-left">
                      <img
                        src={items.image.localFile.childImageSharp.fixed.src}
                        class="img-fluid impact_img"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
      <div class=" section_padd personal_details_wrapper ">
        <div className="container">
          <div class="row">
            <div class="col-12">
              <div class=" mb_30 ">
                <h2 class="title text-center">
                  {data.title} Technology Stack
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {integrations.nodes.map((items, index, arr) => {
              if (arr[index].tags[0].name === 'GoSelfie') {
                return (
                  <Stackbox
                    icon={items.acf.image.source_url}
                    heading={items.acf.sub_heading}
                    // subHeading={items.acf.description}
                  />
                )
              }
            })}

            <div className="col-lg-12 text-center">
              <BigButton
                btnText="Connect with us"
                btnClass="black_btn"
                link="/contact-us"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section_padd service-product-bg personal_details_wrapper">
        <div className="container">
          <div className="row ">
            <div class="col-12 mb_30 ">
              <h2 class="title text-center">Modules in {data.title}</h2>
            </div>
            {data.acf.modules_goselfie.map(items => {
              return (
                <div
                  className="col-lg-4 col-xl-4 col-md-6 col-sm-12 mb_30"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="selfie_modules">
                    <img src={items.image.source_url} alt="..." />

                    <h5>{items.head}</h5>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <QuoteBox
        quoteTitle={data.acf.quotebox.head}
        btntxt={data.acf.quotebox.button.title}
        links={data.acf.quotebox.button.url}
        sideimg={data.acf.quotebox.image.localFile}
      />
    </main>
  )
}
export const Goselfie = ({ data }) => {
  return (
    <TemplateWrapper>
      <Helmet title={` Verinite | ${data.wordpressPage.title}`} />

      <Selfie
        data={data.wordpressPage}
        integrations={data.allWordpressWpApplicationStack}
      />
      <GetInTouch/>
    </TemplateWrapper>
  )
}

export default Goselfie
export const GoselfieQuery = graphql`
  query GoselfiePage($id: String!) {
    allWordpressWpApplicationStack {
      nodes {
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
      title
      acf {
        image {
          source_url
        }
        heading
        designation
        description
        second_heading
        why_goselfie {
          head
          highlights {
            head
            text
            icon {
              source_url
            }
          }
        }
        quotebox {
          head
          button {
            title
            url
          }
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 90)
              }
            }
          }
        }
        steps {
          head
          text
          button {
            title
            url
            target
          }
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
        modules_goselfie {
          head
          image {
            source_url
          }
        }
      }
    }
  }
`
