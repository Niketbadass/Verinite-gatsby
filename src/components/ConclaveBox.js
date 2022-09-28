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
// ${
//   direction === 'right' ? `order-lg-2` : ``
// }
const ConclaveBox = ({ image, content, direction, head }) => {
  return (
    <div className="row align-items-center pb_35">
      <div
        className={`col-lg-7 conclave_text mt_40 pr-xl-5 pl-xl-5 ${
          direction % 2 != 0 ? 'order-lg-2 ' : ''
        } `}
        data-aos="fade-left"
      >
        <h3>{head}</h3>
        <p className="mt_20">{content}</p>
      </div>
      <div
        className={`col-lg-5 mt_40 pl-lg-5 pr-lg-5 ${
          direction % 2 == 0 ? 'order-lg-1 ' : ''
        }`}
        data-aos="fade-right"
      >
        <div
          className={`conclave_img ${
            (direction % 4) + 1 === 1
              ? 'conclave_img-bg1'
              : (direction % 4) + 1 === 2
              ? 'conclave_img-bg2'
              : (direction % 4) + 1 === 3
              ? 'conclave_img-bg3'
              : (direction % 4) + 1 === 4
              ? 'conclave_img-bg4'
              : ''
          }`}
        >
          {/*<Img fluid={image}/>*/}
          <img src={image} alt="..." />
        </div>
      </div>
    </div>
  )
}

export default ConclaveBox
