import React, { useEffect, useRef } from 'react'
import Slider from 'react-slick'
import './PeopleSlider.scss'

const PeopleSliderBox = props => {
  const slider = useRef(null)
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: index => {
      props.setCurrentSlideIndex(index)
    },
    customPaging: i => <div className="slick__dots--custom"></div>,
  }
  useEffect(() => {
    slider.current.slickGoTo(props.activeIndexValue)
  }, [props.activeIndexValue])
  return (
    <Slider ref={slider} {...settings}>
      {props.data.map((item, index) => {
        return (
          <div key={index + '_people_slider'} class="slider_box text-center">
            <p className="article_text">{item.testimonial}</p>
            <div className="media align-items-center d-inline-flex">
              <img
                src={
                  item.image.localFile &&
                  item.image.localFile.childImageSharp.fixed.src
                }
                alt=""
              />
              <div className="media-body text-left">
                <h5>{item.name}</h5>
                <p>{item.designation}</p>
              </div>
            </div>
          </div>
        )
      })}
    </Slider>
  )
}
export default PeopleSliderBox
