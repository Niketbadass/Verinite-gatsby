import React, { useEffect, useRef } from 'react'
import Slider from 'react-slick'
import { Map } from 'react-lodash'
import './AvatarSlider.scss'

const AvatarSlider = props => {
  const slider = useRef(null)
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: i => <div className="slick__dots--custom"></div>,
  }

  useEffect(() => {
    slider.current.slickGoTo(props.activeIndexValue)
  }, [props.activeIndexValue])
  return (
    <Slider ref={slider} {...settings}>
      <Map
        collection={props.data}
        iteratee={(item, index) => (
          <div
            key={index + '_avatar'}
            className={
              index === props.activeIndexValue
                ? 'swiper-slide swiper-slide-visible swiper-slide-active'
                : 'swiper-slide swiper-slide-visible'
            }
            role="group"
            aria-label={index + 1 + ' / 17'}
            style={{ width: '132.857' }}
            onClick={() => props.sendValue(index)}
          >
            <div className="img_wrap">
              <img src={item.image.localFile && item.image.localFile.childImageSharp.fixed.src} alt="" />
            </div>
          </div>
        )}
      ></Map>
    </Slider>
  )
}

export default AvatarSlider
