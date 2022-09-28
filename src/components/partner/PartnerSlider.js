import React from 'react'
import Slider from '../UI/Slider/SliderComponent'
import Img from 'gatsby-image'

const PartnerSlider = props => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '33%',
    customPaging: i => <div className="slick__dots--custom"></div>,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '26%',
          infinite: true,
        },
      },
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
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '20%',
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
    <>
      <Slider {...settings}>
        {props.slideData &&
          props.slideData.map((item, index) => {
            return (
              <div className="swiper-slide" key={index}>
                <div className={`partner_box ${props.class}`}>
                  <div className="partner_icon">
                    <img
                      src={
                        item.logo.localFile &&
                        item.logo.localFile.childImageSharp.fixed.src
                      }
                      alt="..."
                    />
                  </div>
                  <h3 className="title_sm">{item.title}</h3>
                  <p className="article_text">{item.sub_heading}</p>
                </div>
              </div>
            )
          })}
      </Slider>
    </>
  )
}

export default PartnerSlider
