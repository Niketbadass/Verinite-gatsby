import React from 'react'
import './CaseStudyBox.scss'
import arrowImg from '../../assets/img/arrow2.svg'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const CaseStudyBox = props => {
  const { image, title } = props

  const renderNormalImage = () => (
    <img src={image} className="icon" alt="..." width="54" height="46" />
  )

  const renderGatsbyImage = () => {
    const imageData = getImage(image)
    return (
      <GatsbyImage
        image={imageData}
        className="icon"
        objectFit="contain"
        objectPosition="left"
      />
    )
  }

  const renderImage = () => {
    if (image && image.childImageSharp) {
      return renderGatsbyImage()
    }
    return renderNormalImage()
  }

  return (
    <div
      className="col-lg-4 col-md-6 mt_30 stud"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <div className="case_study_box">
        <div className="content">
          {renderImage()}
          <h6>{title}</h6>
          <p dangerouslySetInnerHTML={{ __html: props.content }} />
          <Link to={props.slug}>
            Know more <img src={arrowImg} alt="..." />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CaseStudyBox
