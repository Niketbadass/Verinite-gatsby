import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import QuoteIcon from '../../assets/img/quote.svg'
import QuoteImg from '../../img/team-work-1.jpeg'
import BigButton from '../../components/button/BigButton'

const QuoteBox = props => {
  const { backgroundImageFile } = useStaticQuery(graphql`
    query TopographyBackground {
      backgroundImageFile: file(absolutePath: { regex: "/topography_blue/" }) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH)
        }
      }
    }
  `)

  const imgClassName = 'quote_img'

  const renderNormalImage = () => {
    return (
      <img
        src={props.sideimg ? props.sideimg : QuoteImg}
        className={imgClassName}
        alt=""
      />
    )
  }

  const renderGatsbyImage = () => {
    const image = getImage(props.sideimg)
    return <GatsbyImage image={image} className={imgClassName} />
  }

  const renderImage = () => {
    if (props.sideimg && props.sideimg.childImageSharp) {
      return renderGatsbyImage()
    }
    return renderNormalImage()
  }

  const backgroundImage = backgroundImageFile && getImage(backgroundImageFile)

  return (
    <div className="quote_area section_padd">
      <div className="container">
        <div className="quote_box">
          {backgroundImage && (
            <GatsbyImage className="background_image" image={backgroundImage} />
          )}
          <div className="row align-items-center">
            <div className="col-lg-6 mt_30">
              <img
                src={QuoteIcon}
                alt="..."
                data-aos="fade-up"
                data-aos-delay="400"
              />
              <h2 ata-aos="fade-up" data-aos-delay="600">
                {props.quoteTitle}
              </h2>
              <div
                data-aos="fade-up"
                data-aos-delay="800"
                className="quote_btn"
              >
                <BigButton
                  btnClass="light"
                  link={props.links}
                  btnText={props.btntxt ? props.btntxt : 'Culture at verinite'}
                />
              </div>
            </div>
            <div
              className="col-lg-6 mt_30"
              data-aos="fade-left"
              data-aos-delay="1000"
            >
              {renderImage()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuoteBox
