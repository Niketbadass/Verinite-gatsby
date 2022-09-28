import React, { useState, useEffect, useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import BigButton from '../../button/BigButton'
import './Banner.scss'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import ReactHtmlParser from 'react-html-parser'

const BannerWrapper = styled.div``

const CustomBanner = props => {
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
  let content = []
  { props.seperateContent?(
    content= props.seperateContent
  ):
    props.contents
      ? (content = props.contents)
      : (content = [
          {
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
            color: 'black',
            banner_title: 'Home',
            banner_header:
              'Verinite enables 50% increase in monetization with digitization',
            banner_description:
              'Life is all about being Versatile and training all realms of life” With the expansion in our services, Verinite is…',
            button: 'Read more1',
            slide_control_text: '50% increase in revenue',
          },
        ])
  }

  var settings = {
    autoplay: true,
    slidesToShow: 1,
    autoplaySpeed: 5000,
    speed: 0.1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    draggable: false,
    pauseOnHover: false,
    afterChange: index => {
      setCurrent2(index)
    },
  }
  var settings1 = {
    autoplay: false,
    slidesToScroll: 1,
    slidesToShow: 5,
    arrows: false,
    draggable: false,
    swipe: false,
    swipeToSlide: false,
    touchMove: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1110,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 5,
          speed: 0.1,
        },
      },
    ],
  }
  
  return (
    <>
    {props.seperateContent?(
    // seperatBackground
    <>
      <Slider {...settings} ref={slider1} className="banner-slick-slider">
        {
          content.map((data,index) => {
            // console.log("seperatBackground",props.seperatBackground[index].image)
          // const backgroundImage = getImage(data.featured_media.localFile)
          // const backgroundImage = getImage(props.seperatBackground[index].image.localFile)
          const backgroundImage = getImage(props.seperatBackground[index].featured_media.localFile)

          return (
            <>
              <div>
              <BannerWrapper className="home_wrapper d-flex align-items-center">
                <GatsbyImage
                  className="background_image"
                  image={backgroundImage}
                  objectFit="cover"
                />
              </BannerWrapper>
              </div>
            
              <div className="container home_container">
                <div className="row">
                  <div className="col-xl-9 col-lg-9">
                    <div className="home-text">
                      <span className="badge_top">Latest {data.categories[1].name}</span>
                      <h2 className="text-white">{ReactHtmlParser(data.title)}</h2>
                      <p className="text-white" dangerouslySetInnerHTML={{ __html: data.excerpt.slice(0,110)+"..." }} />
                      <p className="text-white display-flex">
                        <span className="margin-ac">
                          {data.author ? `By ${data.author.name}` : ''}{' '}
                        </span>{' '}
                        {data.date ? (
                          <ul className="margin-ac">
                            <li> {data.date}</li>
                          </ul>
                        ) : (
                          ''
                        )}
                      </p>
                      { props.popupclick?(
                        <div>
                        <BigButton
                          btnClass="blue_btn"
                          click={props.popupclick}
                          btnText="subscribe"
                        />
                      </div>
                      ):data.button ? (
                        <div>
                          <BigButton
                            btnClass="blue_btn"
                            link={data.button.url}
                            btnText={data.button.title}
                          />
                        </div>
                      ) : (
                        <div className="sub-area">
                          <input
                            type="text"
                            placeholder="Enter your Email address"
                          ></input>
                          <button>subscribe</button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        })
        }
      </Slider>

      <div className="container" style={{height:"4px"}}>
        <Slider
          {...settings1}  
          ref={slider2}
          className="banner-slick-slider-handler"
        >
          {content.map((data, index) => {
            return (
              <>
              <div
                className="row mt_20 label_wrapper"
                onClick={() => setCurrent(index)}
              >
                <div className="col custompadding mt_30">
                  <div className="label_content">
                    <div className="bar1"></div>
                    <div className="bar">
                      <div className="value"></div>
                    </div>
                    {data.title &&
                    <p>{ReactHtmlParser(data.title.slice(0, 45))}...</p>
                    }
                  </div>
                </div>
              </div>
              </>
            )
          })}
        </Slider>
      </div>
    </>
  ):(
    <>
      <Slider {...settings} ref={slider1} className="banner-slick-slider">
        {
          content.map(data => {
          const backgroundImage = getImage(data.image.localFile)
          return (
            <>
              <BannerWrapper className="home_wrapper d-flex align-items-center">
                <GatsbyImage
                  className="background_image"
                  image={backgroundImage}
                  objectFit="cover"
                />
              </BannerWrapper>
              <div className="container home_container">
                <div className="row">
                  <div className="col-xl-8 col-lg-9">
                    <div className="home-text">
                      <span className="badge_top">{data.title}</span>
                      <h2 className="text-white">{data.sub_title}</h2>
                      <p className="text-white">{data.description}</p>
                      <p className="text-white display-flex">
                        <span className="margin-ac">
                          {data.author ? `By ${data.author}` : ''}{' '}
                        </span>{' '}
                        {data.date ? (
                          <ul className="margin-ac">
                            <li> {data.date}</li>
                          </ul>
                        ) : (
                          ''
                        )}
                      </p>
                      { props.popupclick?(
                        <div>
                        <BigButton
                          btnClass="blue_btn"
                          click={props.popupclick}
                          btnText="subscribe"
                        />
                      </div>
                      ):data.button ? (
                        <div>
                          <BigButton
                            btnClass="blue_btn"
                            link={data.button.url}
                            btnText={data.button.title}
                          />
                        </div>
                      ) : (
                        <div className="sub-area">
                          <input
                            type="text"
                            placeholder="Enter your Email address"
                          ></input>
                          <button>subscribe</button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        })
        }
      </Slider>

      <div className="container" style={{height:"4px"}}>
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
                <div className="col mt_25">
                  <div className="label_content">
                    <div className="bar1"></div>
                    <div className="bar">
                      <div className="value"></div>
                    </div>
                    <p>{data.control_text}</p>
                  </div>
                </div>
              </div>
              
            )
          })}
        </Slider>
      </div>
    </>
  )}
  </>

  )
}

export default CustomBanner
