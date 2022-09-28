import React from 'react'
import Slider from 'react-slick'

const PartnerSpeak = ({ sliderData }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: i => <div className="slick__dots--custom"></div>,
  }

  return (
    <Slider {...settings}>
      {sliderData.map((item, index) => {
        return (
          <div className="swiper-slide" key={index}>
            <div className="icon_box mb_20">
              <img
                src={item.logo.localFile.childImageSharp.fixed.src}
                alt="..."
                className="img-fluid"
              />
            </div>
            <p className="article_text mb_10">{item.sub_heading}</p>
          </div>
        )
      })}
    </Slider>
  )
}

export default PartnerSpeak
