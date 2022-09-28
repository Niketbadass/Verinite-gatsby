import React from 'react'
import Slider from 'react-slick'
import teamImg1 from '../../assets/img/team1.png'
import teamImg2 from '../../assets/img/team2.png'
import teamImg3 from '../../assets/img/team3.png'
import teamImg4 from '../../assets/img/team4.png'
import teamImg5 from '../../assets/img/team5.png'
import teamImg6 from '../../assets/img/team6.png'
import teamImg7 from '../../assets/img/team7.png'

const imgData = [
  teamImg1,
  teamImg2,
  teamImg3,
  teamImg4,
  teamImg5,
  teamImg6,
  teamImg7,
]
const GallerySlide = () => {
  const settings = {
    slidesToShow: 7,
  }
  return (
    <Slider {...settings}>
      {imgData.map((item, index) => {
        return (
          <div className="swiper-slide" key={index}>
            <div className="img_wrap">
              <img src={item} alt="" />
            </div>
          </div>
        )
      })}
    </Slider>
  )
}
export default GallerySlide
