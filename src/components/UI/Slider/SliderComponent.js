import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './SliderComponent.scss'

const SliderComponent = props => {
  return <Slider {...props}>{props.children}</Slider>
}

export default SliderComponent
