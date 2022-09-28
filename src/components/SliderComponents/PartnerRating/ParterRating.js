import React from 'react'
import Slider from 'react-slick'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import './PartnerRating.scss'

const PartnerRating = props => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  }

  const renderNormalImage = localFile => {
    const { fluid, fixed } = localFile.childImageSharp
    const imageSrc = fluid ? fluid.src : fixed.src
    return <img src={imageSrc} alt="..." height="60" />
  }

  const renderGatsbyImage = localFile => {
    const image = getImage(localFile)
    return <GatsbyImage image={image} className="logo" />
  }

  const renderImage = item => {
    const { localFile } = item.image
    if (localFile && localFile.childImageSharp.fluid) {
      return renderNormalImage(localFile)
    } else if (localFile) {
      return renderGatsbyImage(localFile)
    }
    return null
  }

  return (
    <>
      {props.domain ? (
        <Slider {...settings}>
          {props.image &&
            props.image.map((item, index) => (
              <div className="swiper-slide" key={index}>
                {renderImage(item)}
              </div>
            ))}
        </Slider>
      ) : (
        <Slider {...settings}>
          {props.image.map((item, index) => (
            <div className="swiper-slide" key={index}>
              {renderImage(item)}
            </div>
          ))}
        </Slider>
      )}
    </>
  )
}
export default PartnerRating
