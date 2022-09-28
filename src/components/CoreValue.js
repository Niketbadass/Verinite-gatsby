import React from 'react'
import Img from 'gatsby-image'
const CoreValue = props => {
  return (
    <div class="core_area section_padd">
      <div class="container">
        <div class="row text-center">
          <div class="col-12 mb_65">
            <h2 class="title">{props.title}</h2>
          </div>
          <div class="col-12" data-aos="fade-up">
            {/*<Img fluid={props.image} class="img-fluid" alt="" />*/}
            <img src={props.image} className="img-fluid" alt="..." />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoreValue
