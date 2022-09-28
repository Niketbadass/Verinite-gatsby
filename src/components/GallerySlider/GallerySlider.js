import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import './slider.scss'

const GallerySlider = props => {
  /*const image = [slideImg1, slideImg2, slideImg3]*/
  const { image } = props
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '36%',
    customPaging: i => <div className="slick__dots--custom"></div>,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '35%',
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
          centerPadding: '30%',
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
      {props.image.map((item, index) => (
        <div className="swiper-slide" key={index}>
          <img src={item.image.localFile.childImageSharp.fluid.src} alt="..." />
        </div>
      ))}
    </Slider>
  )
}
export default GallerySlider
