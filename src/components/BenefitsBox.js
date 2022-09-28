import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const ContentWrapper = styled.div`
  h1,
  h2,
  h3 {
    font-size: 34px;
    line-height: 44px;
    letter-spacing: 0.3px;
    color: #030303;
  }

  ul {
    li {
      &:before {
        position: absolute;
        content: '\f058';
        left: 0;
        font-family: 'Font Awesome 5 Pro';
        font-weight: 300;
        color: #4d6e81;
        font-size: 21px;
        top: 0;
      }
      margin-top: 20px;
      padding-left: 40px;
      position: relative;
      letter-spacing: 0.6px;
      font-size: 17px;
    }
  }
`

const BenefitsBox = ({ image, content, direction }) => {
  return (
    <div className="row align-items-center pb_35">
      <div
        className={`col-lg-6 mt_40 ${
          direction === 'right' ? `order-lg-2` : ``
        }`}
        data-aos="fade-left"
      >
        <div className="benefits_img">
          {/*<Img fluid={image}/>*/}
          <img src={image} alt="..." />
        </div>
      </div>
      <div className="col-lg-6 mt_40 pl-xl-5 order-lg-1" data-aos="fade-right">
        <ContentWrapper dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  )
}

export default BenefitsBox
