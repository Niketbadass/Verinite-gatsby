import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import CommonBanner from '../components/CommonBanner/CommonBanner'
import AvatarSlider from '../components/peopleBytes/AvatarSlider/AvatarSlider'
import PeopleSliderBox from '../components/peopleBytes/PeopleSilder/PeopleSliderBox'
import FullScreenSlider from '../components/FullScreenSlider/FullScreenSlider'
import TemplateWrapper from '../components/Layout'
import QuoteBox from '../components/QuoteBox/QuoteBox'
import { graphql } from 'gatsby'
import GetInTouch from '../components/GetInTouch/GetInTouch'

export const PageTemplate = ({ acf, title }) => {
  const [index, setIndex] = React.useState(0)
  return (
    <main>
      <CommonBanner
        badge
        title={title}
        image={acf.image.localFile.childImageSharp.fluid.src}
        subHeading={acf.second_heading}
        description={acf.description}
      />
      <div className="meet_people section_padd pb-0">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb_10">
              <h2 className="title">Meet our people</h2>
            </div>
          </div>
          <div className="row justify-content-center position-relative">
            <div className="col-lg-8">
              <div className="swiper-container gallery-top">
                <div className="swiper-wrapper">
                  <PeopleSliderBox
                    data={acf.people_testimonal}
                    activeIndexValue={index}
                    setCurrentSlideIndex={currentIndex =>
                      setIndex(currentIndex)
                    }
                  />
                </div>
              </div>
            </div>
            <div className="col-12 gallery-thumbs_wrapper">
              <div className="swiper-container gallery-thumbs">
                <div
                  className="swiper-wrapper"
                  id="swiper-wrapper-779e9103d98eb3d2b"
                  aria-live="polite"
                  style={{
                    transitionDuration: '0ms',
                    transform: 'translate3d(0px, 0px, 0px)',
                  }}
                >
                  <AvatarSlider
                    data={acf.people_testimonal}
                    activeIndexValue={index}
                    sendValue={index => setIndex(index)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FullScreenSlider sliderImages={acf.slides} />
      <QuoteBox
        quoteTitle="Happy teams produce happy customers"
        links="/life-verinite"
      />
    </main>
  )
}

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const PeopleBytes = ({ data }) => {
  const { wordpressPage: page } = data
  return (
    <TemplateWrapper>
      <Helmet title={`Verinite | ${page.title}`} />
      <PageTemplate acf={page.acf} title={page.title} />
      <GetInTouch/>
    </TemplateWrapper>
  )
}

export default PeopleBytes

export const pageQuery = graphql`
  query PeopleBytes($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      acf {
        second_heading
        sub_heading
        heading
        description
        image {
          localFile {
            childImageSharp {
              fluid(quality: 100) {
                src
              }
            }
          }
        }
        slides {
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
        people_testimonal {
          name
          designation
          testimonial
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
