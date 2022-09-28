import React from 'react'
import Slider from './UI/Slider/SliderComponent'
import Profile from './Profile/Profile'

const ConclaveProfileSlider = props => {
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
          slidesToShow: 2,
          slidesToScroll: 1,
          // centerPadding: '0%',
          centerMode: false,

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
                <Profile
                  img={item.profile_pic.source_url}
                  name={item.name}
                  desg={item.designation}
                  company={item.company}
                />
              </div>
            )
          })}
      </Slider>
    </>
  )
}

export default ConclaveProfileSlider
