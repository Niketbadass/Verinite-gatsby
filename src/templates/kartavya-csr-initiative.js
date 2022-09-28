import React from 'react'
import CommonBanner from '../components/CommonBanner/CommonBanner'
import GallerySlider from '../components/GallerySlider/GallerySlider'

import TemplateWrapper from '../components/Layout'
import PavingBox from '../components/PavingBox/PavingBox'

import Helmet from 'react-helmet'
import GetInTouch from '../components/GetInTouch/GetInTouch'

import { graphql } from 'gatsby'

const KartavyaTemplate = ({
  title,
  acf,
  kartavyaBgImg,
  progressData,
  gallerySlider,
  page,
}) => {

  return (
    <main>
      <CommonBanner
        badge={true}
        align="left"
        title={title}
        subHeading={acf.second_heading}
        description={acf.description}
        image={acf.image.localFile.childImageSharp.fluid.src}
      />

      <div className="personal_details_wrapper section_padd pb-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-11">
              {acf.about_content.about_text.map((item, index) => (
                <p
                  className={index === 0 ? 'mt_25 mt-0' : 'mt_25'}
                  data-aos="fade-up"
                  key={index}
                >
                  {item.description}
                </p>
              ))}
              <div className="row justify-content-center">
                {/* <ProgressCircle data={progressData} /> */}
                {progressData.map((item, index) => {
                  // console.log("item", item)
                  return (
                    <div className="col-12 mt_40">
                      <div className="d-flex">
                        <div className="bullet_img">
                          <img
                            src={item.icon.source_url}
                          />

                        </div>
                        <div className="bullet_content">
                          <p>{item.progress_text}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}

              </div>
              <h6
                className="text-center mt_45 about_title theme_color"
                data-aos="fade-up"
              >
                {acf.about_content.impact_text.heading}
              </h6>
              {acf.about_content.impact_text.text.map((item, index) => (
                <p className="mt_25" data-aos="fade-up" key={index}>
                  {item.description}
                </p>
              ))}
              <div className="paving_box overflow-hidden">
                <PavingBox
                  // title="OUR KARTAVYA"
                  description={acf.about_content.impact_text.description}

                  image={acf.about_content.impact_text.image.localFile.childImageSharp.fluid.src}
                />
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="gallery section_padd overflow-hidden">
        <div className="row">
          <div className="col-12 text-center mb_5">
            <h2 className="title">{gallerySlider.heading}</h2>
          </div>
        </div>
        <div className="swiper-container gallery_slider">
          <div className="swiper-wrapper">
            <GallerySlider image={gallerySlider.image} />
          </div>
        </div>
      </div>
    </main>
  )
}

const KartavyaCsrInitiative = ({ data }) => {
  const { wordpressPage: page } = data
  return (
    <TemplateWrapper>
      <Helmet title={` Verinite | Kartavya`} />

      <KartavyaTemplate
        title={page.title}
        kartavyaBgImg={page.featured_media.localFile.childImageSharp.fluid.src}
        acf={page.acf}
        progressData={page.acf.about_content.progress_data}
        gallerySlider={page.acf.gallery_slider}
        page={page}
      />
      <GetInTouch />

    </TemplateWrapper>
  )
}
export default KartavyaCsrInitiative

export const kartavyaQuery = graphql`
  query KartavyaPageQuery($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title

      featured_media {
        localFile {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
      acf {
        description
        second_heading
        image {
          localFile {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
        about_content {
          about_text {
            description
          }
          impact_text {
            description
            heading
            text {
              description
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
          progress_data {
            icon {
              source_url
            }
            progress_text
          }
        }
        description
        heading
        gallery_slider {
          heading
          image {
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
  }
`
