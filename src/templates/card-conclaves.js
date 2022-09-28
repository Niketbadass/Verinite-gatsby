import React from 'react'
import Helmet from 'react-helmet'

import CommonBanner from '../components/CommonBanner/CommonBanner'

import TemplateWrapper from '../components/Layout'
import { graphql } from 'gatsby'
import home from '../assets/img/home.jpg'

import PavingBox from '../components/PavingBox/PavingBox'

import Conclaveboxmini from '../components/ConclaveBoxmini'
import Conclavebox from '../components/ConclaveBox'
import MediaBox from '../components/MediaBox/MediaBox'
import ConclaveProfileSlider from '../components/ConclaveProfileSlider'
import PartnerRating from '../components/SliderComponents/PartnerRating/ParterRating'
import ConclaveSlider from '../components/GallerySlider/ConclaveSlider'

import GetInTouch from '../components/GetInTouch/GetInTouch'

export const Cardconclave = ({ acf, title }) => {
  return (
    <main>
      <CommonBanner
        badge
        align="left"
        title="Cards Conclave - 2019"
        subHeading="Collaboration & exchange of ideas propells towards an intelligent society"
        description="“Our team had a great time participating in the cards conclave event, organised by Verinite. Learned immense value from the gathering and also had great fun!”"
        image={home}
      />
      <div className="paving_area section_padd pb-0">
        <div className="container">
          <div className="paving_box v2">
            <PavingBox
              title={acf.verinite_card.head}
              mission
              image={
                acf.verinite_card.image.localFile &&
                acf.verinite_card.image.localFile.childImageSharp.fluid
              }
              content={acf.verinite_card.text}
              venue={acf.verinite_card.venue}
              date={acf.verinite_card.date}
            />
          </div>
        </div>
      </div>
      <div className="section_padd">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 text-center">
              <h2 className="title">{acf.verinite__cards_conclave.head}</h2>
              <p className="article_text">
                {acf.verinite__cards_conclave.text}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="conclave_sec section_padd">
        <div className="container">
          <div className="row">
            {acf.locations.map(items => {
              return (
                <Conclaveboxmini
                  img={items.icon.source_url}
                  heading={items.numbers}
                  description={items.text}
                />
              )
            })}
          </div>
        </div>
      </div>
      <div className="section_padd ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 text-center">
              <h2 className="text-ol">{acf.details.heading}</h2>
            </div>
          </div>
          <div className="section_padd">
            {acf.details.contents.map((items, index) => {
              return (
                <Conclavebox
                  image={items.image.source_url}
                  direction={index}
                  head={items.head}
                  content={items.text}
                />
              )
            })}
          </div>
        </div>
      </div>
      <div className="section_padd conclave_sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 text-center">
              <h2 className="text-ol">{acf.keynote.heading}</h2>
            </div>
            <div className="col-xl-10 text-center">
              <MediaBox
                channelType="youtube"
                videoId={acf.keynote.link}
                videoText=""
                play="play-video-wt"
                class="conclave-video-bg"
              />
            </div>
            <div className="col-xl-11 text-center">
              <p className="article_text mt_35">{acf.keynote.details}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section_padd container">
        <div className="row justify-content-center">
          <div className="col-xl-12 text-center">
            <h2 className="text-ol mb-5">{acf.speakers.header}</h2>
          </div>
          <div className="col-12">
            <ConclaveProfileSlider slideData={acf.speakers.contents} />
          </div>
        </div>
      </div>
      <div className="conclave_sec section_padd">
        <div className="row justify-content-center">
          <div className="col-xl-12 text-center mb-5">
            <h2 className="text-ol">{acf.comapnies.head}</h2>
          </div>
        </div>
        <PartnerRating image={acf.comapnies.slider_image} />
      </div>
      <div className="gallery section_padd overflow-hidden pb-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 mb-5 text-center">
              <h2 className="text-ol">{acf.gallery.head}</h2>
            </div>
            <div className="col-12 p-0">
              <ConclaveSlider
                image2={acf.gallery.slider2}
                image={acf.gallery.slider_}
              />
            </div>
          </div>
        </div>
      </div>
      <div class="post_area overflow-hidden">
        {/* <div class="row no-gutters">
           {acf.post_box.map((item, index) => ( 
           {index === 0 ? 'fade-right' : 'fade-left'} 
          <div class="col-lg-6" data-aos="fade-right">
            <a
              href="#"
              class="post_box d-block text-lg-right"
              style={{
                backgroundImage: ` url(${one})`,
              }}
              // item.image.localFile.childImageSharp.fluid.src
            >
              <div class="post_content ml-lg-auto">
                <h6 class="text-white">Previous Event</h6>
                <h3 class="title_sm text-white mt_10">
                  Verinite Cards Conclave - 2020
                </h3>
              </div>
            </a>
          </div>
          <div class="col-lg-6" data-aos="fade-left">
            <a
              href="#"
              class="post_box d-block text-lg-right"
              style={{
                backgroundImage: ` url(${two})`,
              }}
              // item.image.localFile.childImageSharp.fluid.src
            >
              <div class="post_content text-left ml-lg-auto">
                <h6 class="text-white">Next Event</h6>
                <h3 class="title_sm text-white mt_10">
                  Verinite Cards Conclave - 2021
                </h3>
              </div>
            </a>
          </div>
        ))} 
        </div> */}
      </div>
    </main>
  )
}

const Conclave = ({ data }) => {
  return (
    <TemplateWrapper>
      <Helmet  title={`Verinite | Card Conclave `}/>
      <Cardconclave acf={data.wordpressPage.acf} />
      <GetInTouch />

    </TemplateWrapper>
  )
}
export default Conclave

export const CConclaveQuery = graphql`
  query ConclaveQuery($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      slug
      acf {
        description
        verinite__cards_conclave {
          head
          text
        }
        verinite_card {
          head
          text
          venue
          date
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
        locations {
          text
          numbers
          icon {
            source_url
          }
        }

        details {
          heading
          contents {
            head
            text
            image {
              source_url
            }
          }
        }

        keynote {
          details
          heading
          link
        }
        speakers {
          header
          contents {
            company
            designation
            name
            profile_pic {
              source_url
            }
          }
        }
        comapnies {
          head
          slider_image {
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

        gallery {
          head
          slider_ {
            image {
              source_url
            }
          }
          slider2 {
            image {
              source_url
            }
          }
        }
      }
    }
  }
`
