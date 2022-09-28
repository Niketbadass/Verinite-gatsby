import React, { useState, useEffect, useRef,props } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from 'styled-components'
import BigButton from '../../button/BigButton'
import './Banner.scss'
import home from '../../../assets/img/home.jpg'
import home2 from '../../../assets/img/about_bg.png'

const BannerWrapper = styled.div`
  background-image: ${props => `url(${props.image})`};
  // background: ${props => props.color};
`
// const Banner = props () => {

  const Banner = props => {


  const [current, setCurrent] = useState(null)
  const [current2, setCurrent2] = useState(null)
  const slider1 = useRef(null)
  const slider2 = useRef(null)

  useEffect(() => {
    slider1.current.slickGoTo(current)
    slider2.current.slickGoTo(current)
  }, [current])
  useEffect(() => {
    slider2.current.slickGoTo(current2)
  }, [current2])
  let content=[];
{props.contents?content=props.contents:
  content = [
    {
      banner_image: home,
      color: 'black',
      banner_title: 'Home',
      banner_header:
        'Verinite enables 50% increase in monetization with digitization',
      banner_description:
        'Life is all about being Versatile and training all realms of life” With the expansion in our services, Verinite is…',
      button: 'Read more1',
      slide_control_text: '50% increase in revenue',
    },
    {
      banner_image: home2,
      color: 'red',
      banner_title: 'Home',
      banner_header:
        'Verinite enables 50% increase in monetization with digitization',
      banner_description:
        'Life is all about being Versatile and training all realms of life” With the expansion in our services, Verinite is…',
      button: 'Read more',
      slide_control_text: '200+ applications covered',
    },
    {
      banner_image: home,
      color: 'black',
      banner_title: 'Home',
      banner_header:
        'Verinite enables 50% increase in monetization with digitization',
      banner_description:
        'Life is all about being Versatile and training all realms of life” With the expansion in our services, Verinite is…',
      button: 'Read more1',
      slide_control_text: '40% increase in cross-sell',
    },
    {
      banner_image: home,
      color: 'black',
      banner_title: 'Home',
      banner_header:
        'Verinite enables 50% increase in monetization with digitization',
      banner_description:
        'Life is all about being Versatile and training all realms of life” With the expansion in our services, Verinite is…',
      button: 'Read more1',
      slide_control_text: '50% increase in revenue',
    },
    {
      banner_image: home,
      color: 'black',
      banner_title: 'Home',
      banner_header:
        'Verinite enables 50% increase in monetization with digitization',
      banner_description:
        'Life is all about being Versatile and training all realms of life” With the expansion in our services, Verinite is…',
      button: 'Read more1',
      slide_control_text: '50% increase in revenue',
    },
  ]}

  var settings = {
    autoplay: true,
    slidesToShow: 1,
    autoplaySpeed: 3000,
    speed: 0.1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    draggable: false,
    pauseOnHover: false,
    className:"w-100",
    afterChange: index => {
      setCurrent2(index)
    },
  }
  var settings1 = {
    autoplay: true,
    slidesToScroll: 1,
    slidesToShow: 5,
    arrows: false,
    draggable: false,
    swipe: false,
    swipeToSlide: false,
    touchMove: false,
    className:"w-100",
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1110,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          speed: 0.1,
        },
      },
    ],
  }
  return (
    <>
      <Slider {...settings} ref={slider1} className="banner-slick-slider">
        {content.map(data => {
          return (
            <>
              <BannerWrapper
                className="home_wrapper d-flex align-items-center"
                image={data.banner_image}
              ></BannerWrapper>
              <div className="container home_container">
                <div className="row">
                  <div className="col-xl-8 col-lg-9">
                    <div className="home-text">
                      <span className="badge_top">{data.banner_title}</span>
                      <h2 className="text-white">{data.banner_header}</h2>
                      <p className="text-white">{data.banner_description}</p>
                      {data.button?(
                      <div>

                        <BigButton btnClass="blue_btn" btnText={data.button} />
                      </div>):(
                        <div className="sub-area">
                        <input type="text" placeholder="Enter your Email address"></input>
                        <button>subscribe</button>
                      </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </Slider>

      <div className="container">
        <Slider
          {...settings1}
          ref={slider2}
          className="banner-slick-slider-handler"
        >
          {content.map((data, index) => {
            return (
              <div
                className="row mt_20 label_wrapper"
                onClick={() => setCurrent(index)}
              >
                <div className="col mt_30">
                  <div className="label_content">
                    <div className="bar1"></div>
                    <div className="bar">
                      <div className="value"></div>
                    </div>
                    <p>{data.slide_control_text}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </>
  )
}

export default Banner
