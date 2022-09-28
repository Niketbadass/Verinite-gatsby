import React from 'react'
import BigButton from '../button/BigButton'
import Img from "gatsby-image"
import styled from 'styled-components'

/*const PavingBoxWrapper = styled.div`
  background-image: ${props => `url(${props.image})`};
`*/
const BlogPostContentWrapper = styled.div`
  p {
    font-size: 18px;
    line-height: 31px;
    letter-spacing: 0.5px;
    margin-top: 15px;
    color: #4d6e81;
  }
`
const PavingBox = props => {
  const { title, description, image, pavBtn,venue,date } = props
  return (
    <>
      {props.mission ? (
        <div className="row align-items-center">
          <div className="col-lg-7 mt_40 mb_10">
            <h3 data-aos="fade-up" data-aos-delay="600">
              {title}
            </h3>
            <p className="mt_15" data-aos="fade-up" data-aos-delay="800" ></p>
            {venue?
            <p className="mt_15" data-aos="fade-up" data-aos-delay="800" >Venue: {venue}</p>:("")}
           {date?
            <p className="mt_15" data-aos="fade-up" data-aos-delay="800" >Date: {date}</p>:("")}
            <BlogPostContentWrapper className="mt_15" data-aos="fade-up" data-aos-delay="800" dangerouslySetInnerHTML={{ __html: props.content }}/>
            
          </div>
          <div
            className="col-lg-5 mt_40 mb_10"
            data-aos="fade-left"
            data-aos-delay="800"
          >
            {/* <Img fluid={image} className="paving_img"/> */}
            <img src={image} className="paving_img" alt="" />
          </div>
        </div>
      ) : (
        <div className="row align-items-center">
          <div className="col-lg-7 mt_40 mb_10">
            <h3 data-aos="fade-up" data-aos-delay="600" style={{ fontSize: "36px" }}>
              {title}
            </h3>
              <BlogPostContentWrapper
              dangerouslySetInnerHTML={{ __html: description}}
              />
            {/* <p className="mt_15" data-aos="fade-up" data-aos-delay="800">
              {description}
            </p> */}
            {pavBtn ? (
              <div data-aos="fade-up" data-aos-delay="1000">
                <BigButton btnClass="black_btn mt_40" btnText="know more" />
              </div>
            ) : null}
          </div>
          <div
            className="col-lg-5 mt_40 mb_10"
            data-aos="fade-left"
            data-aos-delay="800"
          >
            {/*<Img 
            fluid={image}/>*/}
            <img src={image} className="paving_img" alt="..." />
          </div>
        </div>
      )}
    </>
  )
}

export default PavingBox