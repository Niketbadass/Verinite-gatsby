import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import './slider.scss'

const GallerySlider = props => {
  /*const image = [slideImg1, slideImg2, slideImg3]*/
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
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
  const settings2 = {
    rtl: true,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
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

  const { image, image2 } = props
  return (
    <div>
      <div className="mb_30">
        <Slider {...settings}>
          {image.map((item, index) => (
            <div className="swiper-slide" key={index}>
              <img src={item.image.source_url} alt="..." />
            </div>
          ))}
          {/* {item.image.localFile.childImageSharp.fluid.src} */}
        </Slider>
      </div>
      <div className="mb_30">
        <Slider {...settings2}>
          {image2.map((item, index) => (
            <div className="swiper-slide" key={index}>
              <img
                src={item.image.source_url}
                alt="..."
                className="conclave-gallery"
              />
            </div>
          ))}
          {/* {item.image.localFile.childImageSharp.fluid.src} */}
        </Slider>
      </div>
    </div>
  )
}
export default GallerySlider
