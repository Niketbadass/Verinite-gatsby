import React, { useEffect, useRef } from 'react'
import Slider from 'react-slick'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import './Testimonial.scss'
const BlogPostContentWrapper = styled.div`
  p {
    margin-top:10px;
  }
`
const Testimonials = props => {
  const [index, setIndex] = React.useState(0)
  const slider = useRef(null)
  const slider2 = useRef(null)

  const settings = {
    // autoplay: true,
    // autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '33%',
    
    
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '25%',
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          infinite: true,
        },
      },
    ],
    customPaging: i => <div className="slick__dots--custom"></div>,
  }
  const settings2 = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // centerPadding: '100%',
    beforeChange: (current, next)=>{
      setIndex(next)
    },
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '100%',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
    customPaging: i => <div className="slick__dots--custom"></div>,
  }
  const renderHomeImage = ({ localFile }) => {
    const imageData = localFile && getImage(localFile)
    return imageData ? (
      <GatsbyImage image={imageData} className="client_img" />
    ) : null
  }
  useEffect(() => {
    slider.current.slickGoTo(index)
  }, [index])
  return (
    <div>
    <div className="row">
      <div className="col-12 pb_15 pt_30">
        {props.home ? (
          <Slider ref={slider}   {...settings}>
            {props.testiData.map(data => {
              return (
                <div key={data.id} className="testi_box">
                  <div className="review">
                    {renderHomeImage(data.acf.person_photo)}
                    <h5 className="name mt_15">{data.acf.name}</h5>
                    <p class="mt_10 small_text">{data.acf.designation}</p>
                    {/* <p>{data.description}</p> */}
                  </div>
                  <div className="client_details text-center mt_25">

                  </div>
                </div>
              )
            })}
          </Slider>
        ) : (
          <Slider {...settings}>
            {props.testiData.map(data => {
              return (
                <div key={data.id} className="testi_box">
                  <div className="review">
                    <p
                      dangerouslySetInnerHTML={{ __html: data.node.content }}
                    />
                  </div>
                  <div className="client_details text-center mt_25">
                    <img
                      src={
                        data.acf.designation.localFile.childImageSharp.fluid
                          .src
                      }
                      alt="..."
                      className="client_img"
                    />
                    <h5 className="name mt_15">{data.node.title}</h5>
                  </div>
                </div>
              )
            })}
          </Slider>
        )}
        
        <Slider  {...settings2}>
        {props.testiData.map(data => {
          return (
             <div className="testi_content_box">
                <div className="tsti_content">
              <BlogPostContentWrapper
                dangerouslySetInnerHTML={{ __html: data.acf.testimonial_details}}
                className="testimonial_content"
              />
              </div>
             </div>
          )
        })}
        </Slider>

      </div>
      
    </div>
    
  </div>
  )
}
export default Testimonials