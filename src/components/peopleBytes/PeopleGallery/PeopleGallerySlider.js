import React from 'react'

import Slider from '../../UI/Slider/SliderComponent'
import slideImg5 from '../../../assets/img/g5.png'
import slideImg6 from '../../../assets/img/g6.png'
import slideImg7 from '../../../assets/img/g7.png'
import slideImg8 from '../../../assets/img/g8.png'

const PeopleGallerySlider = () => {
  const image = [slideImg5, slideImg6, slideImg7, slideImg8]
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '39%',
    customPaging: i => <div className="slick__dots--custom"></div>,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '38%',
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '35%',
          infinite: true,
        },
      },
      {
        breakpoint: 868,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '31%',
          infinite: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '20%',
          infinite: true,
        },
      },
      {
        breakpoint: 560,
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
    <Slider {...settings}>
      {image.map((items, index) => (
        <div className="swiper-slide" key={index}>
          <img src={items} alt="..." />
        </div>
      ))}
    </Slider>
  )
}
export default PeopleGallerySlider
