import React from 'react'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'

import { graphql, Link } from 'gatsby'
import JobBanner from '../components/JobBanner/JobBanner'

import shape5 from '../assets/img/shape5.png'
import PeopleSliderBox from '../components/peopleBytes/PeopleSilder/PeopleSliderBox'
import AvatarSlider from '../components/peopleBytes/AvatarSlider/AvatarSlider'
import FullScreenSlider from '../components/FullScreenSlider/FullScreenSlider'

import BigButton from '../components/button/BigButton'
import ExpectBox from '../components/ExpectWork/ExpectWork'
import GetInTouch from '../components/GetInTouch/GetInTouch'

import BrouchurePopup from '../components/ModalPopup/BrouchurePopup'


export const JobCard = ({ title, acf, slug }) => {
  return (
    <div
      className="col-lg-4 col-md-6 mt_30"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <div className="job_box">
        <h5>
          {title} {acf.special_mention && <span>( {acf.special_mention})</span>}
        </h5>
        <p className="mt_20 job_location">
          <span className="theme_text">{acf.city && acf.city}</span>
          <span className="job_status">{acf.type && acf.type}</span>
        </p>
        <Link to={slug} className="mt_30">
          Apply Now
        </Link>
      </div>
    </div>
  )
}

const Lifeatverinite = ({ data }) => {
  // const { allWordpressWpJobs: jobs } = data
  const [index, setIndex] = React.useState(0)
  // for  Popup
  const [display, setDisplay] = React.useState(false)
  const open = () => {
    setDisplay(true)
    document.body.style.overflow = 'hidden'
  }
  const close = () => {
    setDisplay(false)
    document.body.style.overflow = 'unset'
  }
  // popup close
  return (
    <div>
      <Helmet title={` Verinite | ${data.title}`} />
      {display ? <BrouchurePopup close={close} subject="Culture Book" link={data.acf.culture_book}/> : ''}
      <JobBanner
        toolTipData={data.acf.tool_tip}
        image={shape5}
        subTitle={data.acf.second_heading}
        description={data.acf.description}
        btnTxt="download culture book"
        click={open}
        position="Verinite Culture"
      />
      <div className="section_padd">
        <div className="meet_people  pb-0">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb_10">
                <h2 className="title">People Bytes</h2>
              </div>
            </div>
            <div className="row justify-content-center position-relative ">
              <div className="col-lg-8">
                <div className="swiper-container gallery-top">
                  <div className="swiper-wrapper">
                    <PeopleSliderBox
                      data={data.acf.people_testimonal}
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
                      data={data.acf.people_testimonal}
                      activeIndexValue={index}
                      sendValue={index => setIndex(index)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section_padd service-product-bg personal_details_wrapper">
        <h2 className="title_sm text-center">Gallery</h2>
        <FullScreenSlider sliderImages={data.acf.slides} />
      </div>
      <div className="section_padd personal_details_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="title">{data.acf.work_at_verinite.heading}</h2>
            </div>
          </div>
          <ExpectBox data={data.acf.work_at_verinite.contents} />
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center mb-5">
          <BigButton
            btnText="See open positions"
            btnClass="black_btn"
            link="/current-openings/"
          />
        </div>
      </div>
    </div>
  )
}
const LifeVerinite = ({ data }) => {
  return (
    <Layout>
      <Lifeatverinite
        data={data.wordpressPage}

      />
      <GetInTouch />

    </Layout>
  )
}

export default LifeVerinite

export const lifeVeriniteQuery = graphql`
  query lifeVeriniteQuery($id: String!) {
    wordpressPage(id: { eq: $id }) {
      id
      title
      acf {
        culture_book 
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
        tool_tip {
          title
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

        work_at_verinite {
          heading
          contents {
            head
            text
            image {
              source_url
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
