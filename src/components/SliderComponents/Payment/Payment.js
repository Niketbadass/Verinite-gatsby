import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import arrow_img from '../../../assets/img/arrow.png'
import Slider from 'react-slick'
import './Payment.scss'

const Payment = props => {
  const settings = {
    autoplay:true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    // centerPadding: '33%',
    customPaging: i => <div className="slick__dots--custom"></div>,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          // centerPadding: '25%',
          infinite: true,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,

          // centerPadding: '25%',
          infinite: true,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
          // centerPadding: '30%',
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          infinite: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          infinite: true,
        },
      },
    ],
  }


  const { file } = useStaticQuery(graphql`
    query CardBackground {
      file(absolutePath: { regex: "/card_bg/" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  const backgroundImage = file && (
    <Img fluid={file.childImageSharp.fluid} className="background_image" />
  )

  return (
    <div className="row">
      {props.home ? (
        <div className="col-12 swiper_container">
          <Slider {...settings}>
            {props.slideData.map((data, index) => {
              return (
                <div key={index} id={index} className="payment_box">
                  {data.background?(
                    <Img fluid={data.background.localFile.childImageSharp.fluid} className="background_image" />
                  )
                  :(backgroundImage)
                  // backgroundImage
                }
                  <img
                    src={
                      data.image.localFile.childImageSharp &&
                      data.image.localFile.childImageSharp.fluid.src}
                    className="icon"
                    alt="..."
                  />
                  <h3>{data.heading}</h3>
                  <p>{data.content}</p>
                  <a href={data.button.url}>
                    {data.button.title} <img src={arrow_img} alt="" />
                  </a>
                </div>
              )
            })}
          </Slider>
        </div>
      ) : ("")}
    </div>
  )
}

export default Payment
