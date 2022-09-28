import React from 'react'
import Slider from '../../components/UI/Slider/SliderComponent'

const FullScreenSlider = ({ sliderImages }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    autoplaySpeed: 3000,
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
    <div className="gallery overflow-hidden">
      <div className="swiper-container gallery_slider">
        <div className="swiper-wrapper">
          <Slider {...settings}>
            {sliderImages.map((item, index) => (
              <div className="swiper-slide" key={index}>
                <img
                  src={item.image.localFile && item.image.localFile.childImageSharp.fluid.src}
                  alt="..."
                />
              </div>
            ))}
            </Slider>
        </div>
      </div>
    </div>
  )
}
export default FullScreenSlider
