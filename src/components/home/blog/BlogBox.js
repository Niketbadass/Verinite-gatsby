import React from 'react'

import Twitter from '../../icons/Twitter'
import LinkedIn from '../../icons/LinkedIn'

const BlogBox = props => {
  const { image, description, title, socialClass } = props
  return (
    <div className="blog_box">
      <a href="!#" className="blog_img overflow-hidden">
        <img src={image} alt="..." />
      </a>
      <a href="!#">
        <h6>{title}</h6>
      </a>
      <p className="mt_10">{description}</p>
      {socialClass === 'socialIcon' ? (
        <div class="social_area">
          <a href="!#">
            <Twitter />
          </a>
          <a href="!#">
            <LinkedIn />
          </a>
        </div>
      ) : null}
    </div>
  )
}
export default BlogBox
